import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Post } from '../types/indexx';

const { width } = Dimensions.get('window');
const cardWidth = (width - 24) / 2; // 2 cards per row with padding

interface PostCardProps {
  post: Post;
  onPress: () => void;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onFollow: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onPress,
  onLike,
  onComment,
  onShare,
  onFollow,
}) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-gray-900 rounded-lg overflow-hidden mb-3"
      style={{ width: cardWidth }}
    >
      <Image 
        source={{ uri: post.video }} 
        className="w-full h-48"
        resizeMode="cover"
      />
      
      <View className="p-3">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center flex-1">
            <Image 
              source={{ uri: post.user.avatar }} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <Text className="text-white text-sm font-medium flex-1" numberOfLines={1}>
              {post.user.username}
            </Text>
          </View>
          
          <TouchableOpacity 
            onPress={onFollow}
            className={`px-3 py-1 rounded-full ${
              post.user.isFollowing ? 'bg-gray-600' : 'bg-red-500'
            }`}
          >
            <Text className="text-white text-xs font-bold">
              {post.user.isFollowing ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text className="text-white text-sm mb-3" numberOfLines={2}>
          {post.description}
        </Text>
        
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={onLike} className="flex-row items-center">
            <Ionicons 
              name={post.isLiked ? "heart" : "heart-outline"} 
              size={16} 
              color={post.isLiked ? "#FF0000" : "#FFFFFF"} 
            />
            <Text className="text-white text-xs ml-1">
              {formatNumber(post.likes)}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onComment} className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={16} color="#FFFFFF" />
            <Text className="text-white text-xs ml-1">
              {formatNumber(post.comments)}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onShare} className="flex-row items-center">
            <Ionicons name="share-outline" size={16} color="#FFFFFF" />
            <Text className="text-white text-xs ml-1">
              {formatNumber(post.shares)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};