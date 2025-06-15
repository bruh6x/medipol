import * as React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';

export default function SettingsScreen() {
  return (
    <View className='flex-1 items-center justify-center p-4 bg-secondary/30'>
      <Text className='text-2xl font-bold'>Ayarlar</Text>
      <Text className='text-muted-foreground mt-2'>Ayarlar sayfası içeriği</Text>
    </View>
  );
} 