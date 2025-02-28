import { View, Text,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import { useDebouncedCallback } from 'use-debounce'
import { categories } from '@/constraints/data'

const FilterCategory = () => {
        const params = useLocalSearchParams<{filter?: string}>()
        const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All')
    
    
    
            const handleCategory = (category:string) =>{
                if(  selectedCategory === category)
              { setSelectedCategory('All') 
                router.setParams({filter:'All'}) 
                return 
              }
              setSelectedCategory(category)
              router.setParams({filter:category}) 

            }
  return (
    <ScrollView 
    horizontal
  showsHorizontalScrollIndicator={false}
    >
 
 {categories.map((  item, index) =>(
        <TouchableOpacity
          onPress={()=> handleCategory(item.category)}
          // `flex flex-col px-4 py-4 mr-4 rounded-full ${selectedCategory === 'All' ?bg-white text-black : }
  className={`flex flex-col px-6 py-2 mr-4 rounded-full
   ${selectedCategory === item.category ?  'bg-primary-300' : 'bg-primary-100 border border-primary-200' }`}>
          <Text
          className={` font-rubik
            ${selectedCategory === item.category ?  'text-white' : 'text-black' }`}
          >{item.title}</Text>
        </TouchableOpacity>
 ))}
    
   
    </ScrollView>
  )
}

export default FilterCategory