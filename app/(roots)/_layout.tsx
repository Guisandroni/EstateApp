import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, Slot } from 'expo-router'
import { useGlobalContext } from '@/lib/global-provider'

const appLayout = () => {
    const {loading, isLoggedIn} = useGlobalContext()
 
    if(true) {
        return(
            <SafeAreaView className='bg-white h-full flex justify-center items-center'>
                <ActivityIndicator className='text-primary-300 ' size={"large"} />
            </SafeAreaView>
        )
    }

    if(!isLoggedIn) return <Redirect href={'/SignIn'}/>
    
    return <Slot/>
}

export default appLayout