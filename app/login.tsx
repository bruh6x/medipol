import * as React from "react";
import {
  View,
  TextInput,
  StatusBar,
  Platform,
  Pressable,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const passwordRef = React.useRef<TextInput>(null);

  const handleLogin = () => {
    console.log("login", username, password);
  };

  const handleMicrosoftLogin = () => {
    console.log("microsoft login");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#22275E]">
      <StatusBar backgroundColor="#3b82f6" barStyle="light-content" />

      <View className="flex-row items-center px-6 py-4">
        <Pressable
          onPress={() => router.back()}
          className="px-4 py-2 rounded-full bg-white/10"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text className="flex-1 text-center text-white text-lg font-semibold mr-10">
          Giriş Yap
        </Text>
      </View>

      <KeyboardAvoidingView 
        className="flex-1" 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView 
          className="flex-1 px-6"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-center">
            <View className="items-center mb-8">
              <View className="mb-6">
                <Image
                  source={require("../assets/images/med_arma_beyaz.png")}
                  className="w-32 h-32"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-3xl font-bold text-white text-center leading-tight">
                İstanbul Medipol Üniversitesi
              </Text>
            </View>

            <View className="bg-white rounded-3xl p-8 shadow-2xl">
              <Text className="text-2xl font-bold text-gray-800 text-center mb-8">
                Hoş Geldiniz
              </Text>

              <View className="mb-5">
                <Text className="text-base font-semibold text-gray-700 mb-3">
                  Kullanıcı Adı
                </Text>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Öğrenci numaranızı girin"
                  placeholderTextColor="#9CA3AF"
                  className="bg-gray-50 rounded-2xl px-6 py-4 text-gray-900 border border-gray-200"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  blurOnSubmit={false}
                />
              </View>

              <View className="mb-6">
                <Text className="text-base font-semibold text-gray-700 mb-3">
                  Şifre
                </Text>
                <TextInput
                  ref={passwordRef}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Şifrenizi girin"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry
                  className="bg-gray-50 rounded-2xl px-6 py-4 text-gray-900 border border-gray-200"
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                />
              </View>

              <Pressable className="mb-6">
                <Text className="text-[#22275E] text-center font-medium">
                  Şifremi Unuttum
                </Text>
              </Pressable>

              <View className="gap-4">
                <Button
                  size="lg"
                  className="w-full h-14 bg-[#22275E] rounded-2xl shadow-lg"
                  onPress={handleLogin}
                >
                  <Text className="font-bold text-white text-lg">Giriş Yap</Text>
                </Button>

                <View className="flex-row items-center my-2">
                  <View className="flex-1 h-px bg-gray-300" />
                  <Text className="mx-4 text-gray-500 text-sm">veya</Text>
                  <View className="flex-1 h-px bg-gray-300" />
                </View>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-14 rounded-2xl border-2 border-gray-200 bg-white shadow-sm"
                  onPress={handleMicrosoftLogin}
                >
                  <View className="flex-row items-center justify-center">
                    <Text className="font-semibold text-gray-700 text-base">
                      Office365 ile Giriş
                    </Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>

          {/* <View className="pb-8 pt-4">
            <Text className="text-white/80 text-center text-sm">
              Giriş yaparken sorun yaşıyorsanız, bt@medipol.edu.tr ile iletişime geçin
            </Text>
          </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
