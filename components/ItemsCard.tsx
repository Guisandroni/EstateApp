import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constraints/images'
import icons from '@/constraints/icons'

export const ItemsCard = () => {
  return (
    <TouchableOpacity className='relative flex flex-col mx-1 h-80 w-60'>
            <Image source={images.japan} className='rounded-xl size-full'/>
            <Image source={images.cardGradient} className='absolute bottom-0 size-full rounded-xl'/>

            <View className='absolute flex flex-row items-center gap-1 px-3 py-1.2 bg-white rounded-full right-6 top-4'>
                <Image  source={icons.star} className='size-3.5'/>
                <Text className='text-md text-primary-300 font-rubik-bold'>4.8</Text>
            </View>

        <View className='absolute flex flex-col items-start inset-x-4 bottom-2 left-4'>
            <Text className='text-xl text-white font-rubik-bold'>Merialla Villa</Text>
            <Text  className='text-xl text-white font-rubik'>New York, US</Text>
            <View className='flex flex-row items-center justify-between w-full '>
                <Text  className='text-xl text-white font-rubik-bold'>R$122.19</Text>
                <Image source={icons.heart} className='size-5'/>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export const Card = () => {
    return (
        <TouchableOpacity className='relative flex-1 w-full gap-4 px-3 py-4 bg-white shadow-lg roundedmt-4 shadow-black-100/70 rounded-xl'>
             <View className='absolute flex flex-row items-center gap-1 px-3 py-1.2 bg-white rounded-full right-6 top-4'>
                <Image  source={icons.star} className='size-3.5'/>
                <Text className='text-md text-primary-300 font-rubik-bold'>4.8</Text>
            </View>
            <Image source={images.japan} className='w-full h-40 rounded-xl'/>

            <View className='flex flex-col items-start '>
            <Text className='text-xl black text-md font-rubik-bold'>Merialla Villa</Text>
            <Text  className='text-md text-black-100 font-rubik'>New York, US</Text>
            <View className='flex flex-row items-center justify-between w-full '>
                <Text  className='text-lg text-primary-300 font-rubik-bold'>R$122.19</Text>
                <Image source={icons.heart} className='size-5'/>
            </View>
        </View>

    </TouchableOpacity>
    )
  }
  
  

