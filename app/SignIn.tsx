import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constraints/images'
import icons from '@/constraints/icons'

const SignIn = () => {
  const handleClickLogin = () =>{

  }
  return (
    <SafeAreaView className='bg-white w-dvw'>
      <ScrollView 
        contentContainerClassName='h-full'
        
      >
        <Image source={images.onboarding}
          className='w-full h-4/6 resize-cover'
        />

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome a App State
          </Text>

          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's Get Your Closer to {'\n'}
            <Text className='text-primary-300'> Your Ideal Home</Text>
          </Text>

          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
            Login to State App with Google
          </Text>

          <TouchableOpacity onPress={handleClickLogin}
            className='bg-white shadow-xl shadow-zinc-600 rounded-full w-full py-4 mt-5'
          >
            <View className='flex flex-row items-center justify-center gap-2'>
              <Image source={icons.google}
                className='w-6 h-6'
                resizeMode='contain'
                />
              <Text 
                className='text-lg font-rubik-bold text-black-300 ml-2'
              >Continue With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn