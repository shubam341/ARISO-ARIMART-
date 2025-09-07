import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../data/mockData';

interface MenuScreenProps {
  onNavigate: (screen: string) => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({ onNavigate }) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-800">
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        
        <View className="flex-row items-center space-x-6">
          <Text className="text-white text-lg font-medium">Following</Text>
          <Text className="text-white text-lg font-bold border-b-2 border-red-500 pb-1">Explore</Text>
          <Text className="text-white text-lg font-medium">Nearby</Text>
        </View>
        
        <TouchableOpacity onPress={() => onNavigate('search')}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="px-4 py-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white text-lg font-bold">My Channels</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 mr-2">Edit</Text>
              <TouchableOpacity>
                <Ionicons name="chevron-up" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          
          <Text className="text-gray-500 text-sm mb-6">Tap to access the channel</Text>
          
          {/* Categories Grid */}
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index}
                className="w-[48%] bg-gray-900 p-4 rounded-lg mb-3 items-center"
              >
                <Text className="text-white font-medium">{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View className="mt-6">
            <Text className="text-white text-lg font-bold mb-4">More Channels</Text>
            <Text className="text-gray-500 text-sm">Tap to add more channels</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};