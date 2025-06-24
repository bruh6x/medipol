import * as React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useColorScheme } from "~/lib/useColorScheme";

const { width: screenWidth } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    title: "Hoş Geldiniz!",
    description:
      "İstanbul Medipol Üniversitesi mobil uygulamasına hoş geldiniz. Öğrenci hayatınızı kolaylaştıracak tüm özellikler burada.",
    icon: "school-outline",
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Öğrenci Bilgileriniz",
    description:
      "GPA'nızı, ders programınızı ve akademik durumunuzu tek yerden takip edin.",
    icon: "person-outline",
    color: "#10B981",
  },
  {
    id: 3,
    title: "Kolay Erişim",
    description:
      "Tüm üniversite hizmetlerine hızlı ve kolay erişim sağlayın. Her şey parmaklarınızın ucunda!",
    icon: "flash-outline",
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Başlayalım!",
    description:
      "Artık hazırsınız! Uygulamayı keşfetmeye başlayın ve öğrenci deneyiminizi geliştirin.",
    icon: "rocket-outline",
    color: "#EF4444",
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const { isDarkColorScheme } = useColorScheme();

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboarding_completed", "true");
      router.replace("home");
    } catch (error) {
      console.error("Error saving onboarding status:", error);
    }
  };

  const nextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
    } else {
      completeOnboarding();
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollViewRef.current?.scrollTo({
        x: prevIndex * screenWidth,
        animated: true,
      });
    }
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / screenWidth
    );
    setCurrentIndex(slideIndex);
  };

  return (
    <View className="flex-1 bg-background">
      <View className="absolute top-12 right-4 z-10">
        <Button variant="ghost" size="sm" onPress={skipOnboarding}>
          <Text className="text-muted-foreground">Atla</Text>
        </Button>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      >
        {onboardingData.map((item, index) => (
          <View
            key={item.id}
            style={{ width: screenWidth }}
            className="flex-1 items-center justify-center px-8"
          >
            <View
              className="w-32 h-32 rounded-full items-center justify-center mb-8"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <Ionicons name={item.icon as any} size={64} color={item.color} />
            </View>

            <Text className="text-3xl font-bold text-center mb-4 text-foreground">
              {item.title}
            </Text>

            <Text className="text-lg text-center text-muted-foreground leading-6 max-w-sm">
              {item.description}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View className="flex-row justify-center items-center mb-8">
        {onboardingData.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </View>

      <View className="flex-row justify-between items-center px-8 pb-8">
        <Button
          variant="ghost"
          onPress={prevSlide}
          disabled={currentIndex === 0}
          className={`flex-row items-center ${
            currentIndex === 0 ? "opacity-30" : ""
          }`}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkColorScheme ? "#ffffff" : "#000000"}
          />
          <Text className="ml-2">Geri</Text>
        </Button>

        <Button onPress={nextSlide} className="px-8 flex-row items-center">
          <Text className="mr-2">
            {currentIndex === onboardingData.length - 1 ? "Başla" : "İleri"}
          </Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </Button>
      </View>
    </View>
  );
}
