import {ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, Slot } from 'expo-router'
import { useGlobalContext } from '@/lib/global-provider'

const AppLayout = () => {
    const {loading, isLoggedIn} = useGlobalContext()
 
    if(loading) {
        return(
            <SafeAreaView className='flex items-center justify-center h-full bg-white'>
                <ActivityIndicator className='text-primary-300 ' size="large" />
            </SafeAreaView>
        )
    }

    if(!isLoggedIn){
        return <Redirect href='/SignIn'/>
    }
    
    return <Slot/>
}

export default AppLayout