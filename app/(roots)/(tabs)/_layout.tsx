import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constraints/icons'
import NavigatorTabs, { TypeTabs } from '@/components/NavigatorTabs'



const TabsLayout = ({ focused, icon, title }: TypeTabs) => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                title: '',
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#000',
                    borderTopWidth: 1,
                    minHeight: 70,
                }
            }}
        >
            <Text>Tabs layout</Text>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <NavigatorTabs icon={icons.home} focused={focused} title='Home' />
                    )
                }}
            />

            <Tabs.Screen
                name='Profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <NavigatorTabs icon={icons.person} focused={focused} title='Profile' />
                    )
                }}
            />

            
<Tabs.Screen
                name='Explorer'
                options={{
                    title: 'Explorer',
                    tabBarIcon: ({ focused }) => (
                        <NavigatorTabs icon={icons.search} focused={focused} title='Explorer' />
                    )
                }}
            />

        </Tabs>
    )
}

export default TabsLayout