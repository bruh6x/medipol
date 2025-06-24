import * as React from "react";
import { View, Image, StatusBar, Platform } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar backgroundColor="#f8fafc" barStyle="dark-content" />
      <View className="flex-1 bg-slate-50 px-6 justify-between">
        <View className="flex-1 justify-center items-center">
          <View className="items-center mb-16">
            <View className="p-6 mb-8 ios:shadow-lg">
              <Image source={require("../assets/images/med_arma.png")} className="w-48 h-48" resizeMode="contain"/>
            </View>

            <Text className="text-4xl font-bold text-gray-900 text-center mb-2">
              İstanbul Medipol Üniversitesi
            </Text>
          </View>

          <View className="w-full gap-3">
            <Button size="lg" className="w-full h-14 bg-[#22275E] rounded-2xl shadow-lg" onPress={() => router.push("/login")}>
              <Text className="text-white font-bold text-2xl">Giriş Yap</Text>
            </Button>

            <Button size="lg" variant="outline" className="w-full h-14 bg-white border-gray-300 rounded-2xl shadow-sm">
              <View className="flex-row items-center justify-center">
                <Text className="text-gray-700 font-semibold text-2xl">Office365 ile Giriş Yap</Text>
              </View>
            </Button>
          </View>
        </View>

        <View className="w-full pb-6">
          <Button size="lg" variant="outline" className="w-full bg-[#999999] border-gray-300 rounded-2xl shadow-sm">
            <View className="flex-row items-center justify-center">
              <Text className="text-white font-semibold text-2xl">
                Misafir Girişi
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
