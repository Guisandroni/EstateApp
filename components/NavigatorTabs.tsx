import { View, Text, Image } from 'react-native'
import React from 'react'

export interface TypeTabs{
    focused: boolean,
    icon:any,
    title: string,
}

const NavigatorTabs = ({focused, icon, title}:TypeTabs) => {
  return (
    <View 
    className='flex flex-col items-center flex-1 mt-3'
    >
        <Image
            tintColor={focused? '#0061ff' : '#666876'}
            resizeMode='contain'
            className='size-6'
        source={icon}/>
      <Text
      className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'}
        text-xs w-full text-center mt-1`}
      >{title}</Text>
    </View>
  )
}

export default NavigatorTabs