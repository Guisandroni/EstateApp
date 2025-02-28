import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constraints/icons'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import { useDebouncedCallback } from 'use-debounce'

const Search = () => {
    const path = usePathname()
    const params = useLocalSearchParams<{query?: string}>()
    const [search, setSearch] = useState(params.query)

    const bouncedSearch = useDebouncedCallback((text:string) =>router.setParams({
        query:text
    }), 500 )

        const handleSearch = (text:string) =>{
            setSearch(text)
            bouncedSearch(text)
        }
  return (
    <View className='flex flex-row items-center justify-center w-full px-3 mt-5 bg-white shadow rounded-xl shadow-zinc-200'>
       <View className='z-50 flex flex-row items-center justify-start flex-1'>
       <Image source={icons.search} className='size-6'/>
       <TextInput className='flex-1 ml-2 text-sm text-black-300 font-rubik'
        value={search}
        onChangeText={handleSearch}
        placeholder='Search params'
        
       />
       </View>
        <TouchableOpacity>
        <Image source={icons.filter} className='size-6'/>
        </TouchableOpacity>     
    </View>
  )
}

export default Search