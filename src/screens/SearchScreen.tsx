import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { searchTrends } from '../data/mockData';

interface SearchScreenProps {
  onNavigate: (screen: string) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ onNavigate }) => {
  const [searchText, setSearchText] = useState('');
  const [recentSearches] = useState(['头像图片', '九三阅兵的武器', 'offer/淘汰危机']);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row items-center px-4 py-3 border-b border-gray-800">
        <TouchableOpacity onPress={() => onNavigate('home')} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <View className="flex-1 flex-row items-center bg-gray-900 rounded-lg px-3 py-2">
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="微信昵称"
            placeholderTextColor="#666"
            className="flex-1 text-white ml-2"
            autoFocus
          />
        </View>
        
        <TouchableOpacity className="ml-3">
          <Ionicons name="camera" size={24} color="white" />
        </TouchableOpacity>
        
        <Text className="text-red-500 ml-3 font-medium">Search</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Recent Searches */}
        <View className="px-4 py-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-white text-lg font-medium">Recent searches</Text>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          
          {recentSearches.map((search, index) => (
            <TouchableOpacity key={index} className="py-2">
              <Text className="text-gray-300">{search}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Discover Section */}
        <View className="px-4 py-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white text-lg font-medium">Discover</Text>
            <View className="flex-row items-center">
              <Ionicons name="refresh" size={20} color="#666" />
              <TouchableOpacity className="ml-3">
                <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between mb-6">
            <TouchableOpacity className="bg-gray-900 px-4 py-2 rounded-lg">
              <Text className="text-gray-300">微信昵称</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-900 px-4 py-2 rounded-lg">
              <Text className="text-gray-300">内蒙旅游攻略</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between mb-6">
            <TouchableOpacity className="bg-gray-900 px-4 py-2 rounded-lg">
              <Text className="text-gray-300">九三阅兵的武器</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-900 px-4 py-2 rounded-lg">
              <Text className="text-gray-300">80面战旗</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-gray-900 px-4 py-2 rounded-lg">
              <Text className="text-gray-300">offer/淘汰危机</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-900 px-4 py-2 rounded-lg">
              <Text className="text-gray-300">七夕就在今天</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hot Trends */}
        <View className="px-4 py-4">
          <Text className="text-red-500 text-lg font-bold mb-4">🔥川红书热点</Text>
          
          {searchTrends.map((trend, index) => (
            <TouchableOpacity key={trend.id} className="flex-row items-center py-3">
              <Text className={`text-lg font-bold mr-3 ${
                index < 3 ? 'text-red-500' : 'text-gray-500'
              }`}>
                {index + 1}
              </Text>
              
              <View className="flex-1">
                <View className="flex-row items-center">
                  <Text className="text-white font-medium flex-1">{trend.title}</Text>
                  {trend.hot && (
                    <View className="bg-red-500 px-2 py-1 rounded ml-2">
                      <Text className="text-white text-xs font-bold">热</Text>
                    </View>
                  )}
                </View>
                <Text className="text-gray-500 text-sm mt-1">{trend.views}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};