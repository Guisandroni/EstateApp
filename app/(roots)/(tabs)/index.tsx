import FilterCategory from "@/components/FilterCategory";
import { Card, ItemsCard } from "@/components/ItemsCard";
import Search from "@/components/Search";
import icons from "@/constraints/icons";
import images from "@/constraints/images";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { Link, useLocalSearchParams } from "expo-router";
import { Button, FlatList } from "react-native";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { user, refetch } = useGlobalContext()
  const params = useLocalSearchParams()
     
  return (
    <SafeAreaView className="h-full bg-white">
      <Button onPress={seed} title="seed" />
      <FlatList
        data={[1, 2, 3,4]}
        renderItem={(item) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5 mt-2"
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={<View className="px-5">
          <View className="flex-row items-center justify-between ">
            <View className="flex-row items-center justify-self-center">
              <Image source={{ uri: user?.avatar }} className="rounded-full size-14" />
              <View className="flex-col items-start justify-center ml-2">
                <Text className="text-xs font-rubik text-black-100"> Developer </Text>
                <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-6" />
          </View>
          <Search />

          <View className="my-4">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
              <TouchableOpacity>
                <Text className="text-xs text-base text-primary-300 font-rubik-bold">See All</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={[ 5, 6, 7]}
              renderItem={(item) => <ItemsCard />}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.toString()}
              contentContainerClassName="flex  mt-5"
              bounces={false}
              horizontal
            />


          </View>



          <View className="mt-2 mb-4">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">Recommendation</Text>
              <TouchableOpacity>
                <Text className="text-xs text-base text-primary-300 font-rubik-bold">See All</Text>
              </TouchableOpacity>
            </View>

            <FilterCategory />





          </View>


        </View>}
      />
      {/* <View className="px-5">
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center justify-self-center">
            <Image source={{uri:user?.avatar}} className="rounded-full size-14" />
            <View className="flex-col items-start justify-center ml-2">
              <Text className="text-xs font-rubik text-black-100"> Developer </Text>
              <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
        <Search />

        <View className="my-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-xs text-base text-primary-300 font-rubik-bold">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal className="my-1">
            <ItemsCard />
            <ItemsCard />
            <ItemsCard />
            <ItemsCard />
            <ItemsCard />
            <ItemsCard />
          </ScrollView>

        </View>



        <View className="">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-xs text-base text-primary-300 font-rubik-bold">See All</Text>
            </TouchableOpacity>
          </View>

          <FilterCategory />

          <View className="flex flex-row gap-5 mt-2">
            <Card />
            <Card />

          </View>



        </View>


      </View> */}
    </SafeAreaView>
  );
}
