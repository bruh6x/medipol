import * as React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { Alert } from 'react-native';
import { Input } from '~/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

export default function Screen() {
  const AVATAR = 'https://github.com/mrzachnugent.png';
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const completed = await AsyncStorage.getItem('onboarding_completed');
      if (completed !== 'true') {
        router.replace('/onboarding');
        return;
      }
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      router.replace('/onboarding');
      return;
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center bg-secondary/30'>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View className='flex-1 items-center gap-5 p-4 bg-secondary/30'>
      <Card className='w-full'>
        <CardHeader className="flex-row items-center gap-4">
          <Avatar alt="Furkan Kılıç's Avatar">
            <AvatarImage source={{ uri: AVATAR }} />
            <AvatarFallback>
              <Text>FK</Text>
            </AvatarFallback>
          </Avatar>
          <View className='flex-1'>
            <CardTitle>Furkan Kılıç</CardTitle>
            <CardDescription>HR240018</CardDescription>
          </View>
          <View className='items-end'>
            <Text className='text-sm text-muted-foreground'>GPA</Text>
            <Text className='text-lg font-semibold'>3.55</Text>
          </View>
        </CardHeader>
        <CardContent>
          <View>
            <Text className='text-sm font-medium'>Meslek Yüksekokulu</Text>
            <Text className='text-xs text-muted-foreground'>Bilgisayar Programcılığı • İÖ 1. Sınıf</Text>
          </View>
        </CardContent>
      </Card>

      
    </View>
  );
}
