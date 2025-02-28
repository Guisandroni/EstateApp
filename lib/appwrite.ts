import { Account, Avatars, Client, Databases, OAuthProvider, Query } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.state.app",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
  galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
  reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
  propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const database = new Databases(client)

export const Login = async () => {
  try {
    const redirectUri = Linking.createURL("/");

    const res = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!res) throw new Error("Falha ao realizar login");

    const browserResult = await openAuthSessionAsync(
      res.toString(),
      redirectUri
    );

    if (browserResult.type !== "success")
      throw new Error("Falha ao realizar login");

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Failed to Login");
    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create a session");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// export const Login = async () => {
//     try {
//       const redirectUri = Linking.createURL("/");
  
//       console.log("🚀 URL de redirecionamento gerada:", redirectUri);
  
//       const res = await account.createOAuth2Token(
//         OAuthProvider.Google,
//         redirectUri
//       );
  
//       if (!res) throw new Error("❌ Falha ao gerar URL de login");
  
//       console.log("🔗 URL do OAuth:", res.toString());
  
//       const browserResult = await openAuthSessionAsync(
//         res.toString(),
//         redirectUri
//       );
  
//       console.log("🌐 Resultado do navegador:", browserResult);
  
//       if (browserResult.type !== "success")
//         throw new Error("❌ Falha ao realizar login");
  
//       const url = new URL(browserResult.url);
//       console.log("🔄 URL retornada:", url.toString());
  
//       const secret = url.searchParams.get("secret")?.toString();
//       const userId = url.searchParams.get("userId")?.toString();
  
//       console.log("🆔 User ID:", userId);
//       console.log("🔑 Secret:", secret);
  
//       if (!secret || !userId) throw new Error("❌ Falha ao obter credenciais");
  
//       const session = await account.createSession(userId, secret);
  
//       console.log("✅ Sessão criada:", session);
  
//       if (!session) throw new Error("❌ Falha ao criar sessão");
  
//       return true;
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   };
  

export const logout = async () => {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getCurrentUser = async () => {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const getLatestProperties = async ()=>{
    try {
        const result = await database.listDocuments
       ( config.databaseId!,
        config.propertiesCollectionId!,
        [Query.orderAsc('$createdAt'), Query.limit(5)]
    )
    return result.documents

    } catch (error) {
        console.error(error)
    }
}

export const getProperties = async ({filter,query,limit}: {filter:string,query:string,limit:number}) =>{
    try {
        const buildQuery = [Query.orderDesc('$createdAt')]
        if(filter && filter !=='All') buildQuery.push(Query.equal('type',filter))
            if(query){
                buildQuery.push(
                    Query.or([
                        Query.search('name',query),
                        Query.search('address',query),
                        Query.search('type',query)

                    ])
                )
            }

            if(limit) buildQuery.push(Query.limit(limit))
                const result = await database.listDocuments
            ( config.databaseId!,
             config.propertiesCollectionId!,
                buildQuery
            )
            return result.documents
    } catch (error) {
        console.error(error)
    }
}