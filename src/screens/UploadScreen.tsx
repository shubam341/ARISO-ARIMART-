import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface UploadScreenProps {
  onNavigate: (screen: string) => void;
}

export const UploadScreen: React.FC<UploadScreenProps> = ({ onNavigate }) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Background Video Preview */}
      <View className="flex-1 relative">
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400' }}
          className="w-full h-full"
          resizeMode="cover"
        />
        
        {/* Overlay */}
        <View className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Close Button */}
        <TouchableOpacity 
          onPress={() => onNavigate('home')}
          className="absolute top-12 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full items-center justify-center"
        >
          <Ionicons name="close" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Options */}
      <View className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-8">
        <View className="items-center space-y-6">
          <TouchableOpacity className="items-center">
            <View className="w-16 h-16 bg-gray-800 rounded-lg items-center justify-center mb-2">
              <Ionicons name="images" size={24} color="white" />
            </View>
            <Text className="text-white text-sm">Choose from Album</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="items-center">
            <View className="w-16 h-16 bg-gray-800 rounded-lg items-center justify-center mb-2">
              <Ionicons name="camera" size={24} color="white" />
            </View>
            <Text className="text-white text-sm">Camera</Text>
            <Text className="text-gray-400 text-xs">Capture & Go Live</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="items-center">
            <View className="w-16 h-16 bg-gray-800 rounded-lg items-center justify-center mb-2">
              <Ionicons name="text" size={24} color="white" />
            </View>
            <Text className="text-white text-sm">Text</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => onNavigate('home')}
            className="bg-gray-700 px-8 py-3 rounded-full mt-4"
          >
            <Text className="text-white font-medium">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};