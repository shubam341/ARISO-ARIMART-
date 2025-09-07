import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BottomTabBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 'home', icon: 'home', activeIcon: 'home' },
    { id: 'store', icon: 'storefront-outline', activeIcon: 'storefront' },
    { id: 'add', icon: 'add-circle', activeIcon: 'add-circle' },
    { id: 'messages', icon: 'chatbubble-outline', activeIcon: 'chatbubble' },
    { id: 'profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  return (
    <View className="flex-row bg-black border-t border-gray-800 py-2">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          onPress={() => onTabPress(tab.id)}
          className="flex-1 items-center py-2"
        >
          <Ionicons
            name={activeTab === tab.id ? tab.activeIcon as any : tab.icon as any}
            size={tab.id === 'add' ? 32 : 24}
            color={
              tab.id === 'add' 
                ? '#FF0000' 
                : activeTab === tab.id 
                  ? '#FFFFFF' 
                  : '#666666'
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};