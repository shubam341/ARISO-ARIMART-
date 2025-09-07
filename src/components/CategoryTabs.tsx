import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const categories = ['All', 'Fashion', 'Travel', 'Nearby', 'Food', 'Music', 'Comedy', 'Art'];

interface CategoryTabsProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <View className="bg-black py-2">
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => onCategorySelect(category)}
            className={`mr-4 px-4 py-2 rounded-full ${
              selectedCategory === category 
                ? 'bg-red-500' 
                : 'bg-gray-800'
            }`}
          >
            <Text className={`${
              selectedCategory === category 
                ? 'text-white font-bold' 
                : 'text-gray-300'
            }`}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};