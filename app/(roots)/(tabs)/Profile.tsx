import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constraints/icons'
import images from '@/constraints/images'
import { AntDesign } from '@expo/vector-icons'
import SettingsProfile from '@/components/SettingsProfile'
import { settings } from '@/constraints/data'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'

const Profile = () => {
  const {user,refetch} = useGlobalContext()
  const handleLogin = async () =>{
    const result = await logout()
    if(result){
      Alert.alert('success', 'Login with success')
      refetch()
    }else{
      Alert.alert('error', 'Failed to login')
    }
    // result? Alert.alert('success', 'Login with success') refetch() : Alert.alert('error', 'Failed to login') , []
  }
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-40 px-7'
      >
        <View className='flex-row justify-between mt-2'>
          <Text className='text-xl font-rubik-bold'>...</Text>
          <Image source={icons.bell} className='size-6' />
        </View>

        <View className='flex flex-row justify-center mt-5'>
          <View className='relative flex-col items-center justify-center mt-5'>
            <Image source={{uri:user?.avatar}}
              className='relative rounded-full size-44'
            />
            <TouchableOpacity className='absolute right-0 bottom-8 '>
              <Image source={icons.edit} className='size-9' />
            </TouchableOpacity>
            <Text className='mt-1 text-xl font-rubik-medium'>{user?.name}</Text>
          </View>
        </View>


        <View className='flex flex-col gap-6 mt-6'>

          <SettingsProfile title='My Bookings' icon={icons.calendar} direction={'right'}  textStyle='' onPress={handleLogin}/>
          <SettingsProfile title='Payments' icon={icons.wallet} direction={'right'} textStyle='' onPress={handleLogin} />

          <View>

            <View className='flex flex-col gap-6 pt-5 mt-1 border-t border-primary-200'>
                    {/* settings é um array com os icons e title salvos */}
              {settings.slice(2).map((item,index) =>( 
                <SettingsProfile key={index} {...item} direction={'right'} textStyle='' onPress={handleLogin} />

              ))}

            </View>

            <View className='flex flex-col pt-5 mt-5 border-t border-primary-200'>
            <SettingsProfile
              onPress={handleLogin}
            title='Payments' 
            icon={icons.logout} 
            direction={''}
             textStyle='text-danger' />

          </View>

          <View className='flex flex-col gap-6 pt-5 mt-1 border-t border-primary-200'>
                    {/* settings é um array com os icons e title salvos */}
              {settings.slice(2).map((item,index) =>( 
                <SettingsProfile key={index} {...item} direction={'right'} textStyle='' onPress={handleLogin} />

              ))}

            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile