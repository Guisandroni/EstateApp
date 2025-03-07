import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constraints/images'
import icons from '@/constraints/icons'
import { Login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {

  const {refetch, loading, isLoggedIn} = useGlobalContext()
if(  !loading && isLoggedIn){
  return <Redirect href='/'/>
} 

  const handleClickLogin = async () =>{
      const result = await Login()

      if(result){
        refetch()
      }else{
        Alert.alert("Error", "Failed to login");
      }
      // result? refetch : Alert.alert('Error', 'failed to login')
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

          <Text className='mt-2 text-3xl text-center font-rubik-bold text-black-300'>
            Let's Get Your Closer to {'\n'}
            <Text className='text-primary-300'> Your Ideal Home</Text>
          </Text>

          <Text className='mt-12 text-lg text-center font-rubik text-black-200'>
            Login to State App with Google
          </Text>

          <TouchableOpacity onPress={handleClickLogin}
            className='w-full py-4 mt-5 bg-white rounded-full shadow-xl shadow-zinc-600'
          >
            <View className='flex flex-row items-center justify-center gap-2'>
              <Image source={icons.google}
                className='w-6 h-6'
                resizeMode='contain'
                />
              <Text 
                className='ml-2 text-lg font-rubik-bold text-black-300'
              >Continue With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn