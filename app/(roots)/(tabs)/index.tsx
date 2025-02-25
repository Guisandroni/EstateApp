import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}

      className="gap-10"
    >
      <Text className="text-lg font-bold text-green-500">nativewild</Text>
      <Text className="text-lg font-bold text-purple-500">nativewild</Text>

      <Text className="text-lg font-bold text-red-500 ">nativewild</Text>

      <Link href='/SignIn'>sign</Link>
      <Link href='/Profile'>profile</Link>
      <Link href='/Explorer'>explorer</Link>
      <Link href='/properties/1'>explorer</Link>


    </View>
  );
}
