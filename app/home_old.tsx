import * as React from "react";
import { View, TextInput, StatusBar, Platform, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    const setNavigationBar = async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync("#667eea");
        await NavigationBar.setButtonStyleAsync("light");
      }
    };
    setNavigationBar();
  }, []);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#667eea" }}>
      <StatusBar backgroundColor="#667eea" barStyle="light-content" />
      <View className="flex-1" style={{ backgroundColor: "#667eea" }}>
        <View className="flex-1 px-6 justify-between">
          <View className="items-center mt-8">
            <Text className="text-3xl font-bold text-white text-center leading-tight mb-2">
              İstanbul Medipol{"\n"}Üniversitesi
            </Text>
          </View>

          <View className="flex-1 justify-center px-4">
            <View className="bg-white rounded-3xl p-8 shadow-2xl">
              <Text className="text-2xl font-bold text-gray-800 text-center mb-8">
                Giriş Yap
              </Text>

              <View className="mb-5">
                <Text className="text-base font-bold text-gray-700 mb-3">
                  Kullanıcı Adı
                </Text>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Kullanıcı adınızı girin"
                  placeholderTextColor="#9CA3AF"
                  className="bg-gray-50 rounded-2xl px-6 py-4 text-base text-gray-900 shadow-sm border border-gray-100"
                  autoCapitalize="none"
                />
              </View>

              <View className="mb-6">
                <Text className="text-base font-bold text-gray-700 mb-3">
                  Şifre
                </Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Şifrenizi girin"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry
                  className="bg-gray-50 rounded-2xl px-6 py-4 text-base text-gray-900 shadow-sm border border-gray-100"
                />
              </View>

              <View className="space-y-3 gap-3">
                <Button
                  className="w-full h-14 rounded-2xl shadow-lg"
                  style={{ backgroundColor: "#667eea" }}
                >
                  <Text className="font-bold text-white text-lg">
                    Giriş Yap
                  </Text>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-14 rounded-2xl border-2 border-gray-200 bg-white shadow-sm"
                >
                  <View className="flex-row items-center justify-center">
                    <Text className="font-bold text-gray-700 text-base">
                      Office365 ile Giriş
                    </Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>

          <View className="gap-1">
            <Button variant="outline" className="bg-white/10 border-white/20 rounded-2xl shadow-xl py-6 active:scale-98">
              <Text className="text-white font-bold text-lg">Kampüs</Text>
            </Button>

            <Button variant="outline" className="bg-white/10 backdrop-blur border-white/20 rounded-2xl shadow-xl py-6 active:scale-98">
              <Text className="text-white font-bold text-lg">Yemek Menüsü</Text>
            </Button>

            <Button variant="outline" className="bg-white/10 backdrop-blur border-white/20 rounded-2xl shadow-xl py-6 active:scale-98">
              <Text className="text-white font-bold text-lg">Akademik Takvim</Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
