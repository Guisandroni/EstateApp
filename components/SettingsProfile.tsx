import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '@/constraints/icons'
import { AntDesign } from '@expo/vector-icons'
interface SettingsType{
    title:string,
    icon:any,
    direction:any,
    textStyle:string,
    onPress: ()=>void,
}
const SettingsProfile = ({title,icon,direction,textStyle,onPress}: SettingsType) => {
  return (
    <TouchableOpacity className={`flex-row items-center justify-between `}
        onPress={onPress}
    >
             
    <View className='flex flex-row items-center gap-5'>
    <Image source={icon} className='size-8'/>
    <Text className={`text-lg font-rubik-medium  ${textStyle}`}>{title}</Text>
    </View>
    <AntDesign name={direction} size={18} color="black" />

  </TouchableOpacity>
  )
}

export default SettingsProfile