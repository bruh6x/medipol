import * as React from 'react';
import { View, Alert } from 'react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const resetOnboarding = async () => {
    Alert.alert(
      'Onboarding\'i Sıfırla',
      'Onboarding ekranlarını tekrar görmek istiyor musunuz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Evet',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('onboarding_completed');
              router.replace('/onboarding');
            } catch (error) {
              console.error('Error resetting onboarding:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <View className='flex-1 p-4 bg-secondary/30'>
      <View className='items-center justify-center flex-1'>
        <Text className='text-2xl font-bold mb-2'>Ayarlar</Text>
        <Text className='text-muted-foreground mb-8'>Ayarlar sayfası içeriği</Text>
      </View>
      
      <View className='mb-8'>
        <Button
          variant='outline'
          onPress={resetOnboarding}
          className='w-full'
        >
          <Text>Onboarding'i Sıfırla</Text>
        </Button>
      </View>
    </View>
  );
} 