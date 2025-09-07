import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { currentUser, mockPosts } from '../data/mockData';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  const userPosts = mockPosts.filter(post => post.user.id === currentUser.id);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">{currentUser.username}</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Header */}
        <View className="items-center py-6">
          <Image 
            source={{ uri: currentUser.avatar }} 
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-white text-xl font-bold mb-2">{currentUser.username}</Text>
          <Text className="text-gray-400 text-center px-6 mb-4">{currentUser.bio}</Text>
          
          <View className="flex-row items-center space-x-8 mb-6">
            <View className="items-center">
              <Text className="text-white text-lg font-bold">{currentUser.following}</Text>
              <Text className="text-gray-400 text-sm">Following</Text>
            </View>
            <View className="items-center">
              <Text className="text-white text-lg font-bold">{currentUser.followers}</Text>
              <Text className="text-gray-400 text-sm">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-white text-lg font-bold">{currentUser.likes}</Text>
              <Text className="text-gray-400 text-sm">Likes</Text>
            </View>
          </View>
          
          <TouchableOpacity className="bg-red-500 px-8 py-2 rounded-full">
            <Text className="text-white font-bold">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <View className="px-4">
          <Text className="text-white text-lg font-bold mb-4">Posts</Text>
          <View className="flex-row flex-wrap justify-between">
            {userPosts.map((post) => (
              <TouchableOpacity 
                key={post.id}
                onPress={() => onNavigate('postDetail', { post })}
                className="w-[48%] mb-4"
              >
                <Image 
                  source={{ uri: post.video }} 
                  className="w-full h-32 rounded-lg"
                  resizeMode="cover"
                />
                <View className="absolute bottom-2 left-2 flex-row items-center">
                  <Ionicons name="heart" size={16} color="white" />
                  <Text className="text-white text-xs ml-1">{post.likes}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};