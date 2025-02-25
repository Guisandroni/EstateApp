import{Account, Avatars, Client, OAuthProvider} from "react-native-appwrite"
import * as Linking from "expo-linking"
import { openAuthSessionAsync } from "expo-web-browser"

export const config = {
    platform: 'com.state.app',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}

export const client = new Client()

client 
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

    export const avatar = new Avatars(client)
    export const account = new Account(client)

    export const Login = async () => {
        try{
            const redirectUri = Linking.createURL('/')

            const res = await account.createOAuth2Token(OAuthProvider.Google, redirectUri)
            
            
            if(!res) throw new Error ('Falha ao realizar login')

                const browserResult = await openAuthSessionAsync(
                    res.toString(),
                    redirectUri
                )

                if (browserResult.type !== 'success') throw new Error('Falha ao realizar login')
                
                const url = new URL ( browserResult.url)

                const secret = url.searchParams.get('secret')?.toString()
                const userId = url.searchParams.get('userId')?.toString()
                if ( !secret || !userId) throw new Error('Failed to Login')
                    const session = await account.createSession(userId, secret)
                if(!session) throw new Error('Failed to create a session')

                    return true
                }
         catch (error){
                console.error(error)
                return false
         }
    }

export const logout = async () =>{
    try {
        const result = await account.deleteSession('current')
        return result
    } catch (error) {
        console.error(error) 
        return false
    }
}


export const getCurrentUser = async () =>{
    try {
        const result = await account.get()
        if(result.$id) {
            const userAvatar = avatar.getInitials(result.name)
        
        return {
            ...result,
            avatar: userAvatar.toString(),
        }
    }
    return null
    } catch (error) {
        console.error(error) 
        return null
    }
}
