import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  onMenuPress: () => void;
  onSearchPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuPress, onSearchPress }) => {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-black">
      <TouchableOpacity onPress={onMenuPress} className="p-2">
        <Ionicons name="menu" size={24} color="white" />
      </TouchableOpacity>
      
      <View className="flex-row items-center space-x-6">
        <Text className="text-white text-lg font-medium">Following</Text>
        <Text className="text-white text-lg font-bold border-b-2 border-red-500 pb-1">Explore</Text>
        <Text className="text-white text-lg font-medium">Nearby</Text>
      </View>
      
      <TouchableOpacity onPress={onSearchPress} className="p-2">
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};