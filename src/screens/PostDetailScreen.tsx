import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Post } from '../types/indexx';

interface PostDetailScreenProps {
  post: Post;
  onNavigate: (screen: string) => void;
}

export const PostDetailScreen: React.FC<PostDetailScreenProps> = ({ post, onNavigate }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState('');
  const [comments] = useState([
    { id: '1', user: 'user1', text: 'Great content!', time: '2h' },
    { id: '2', user: 'user2', text: 'Love this!', time: '1h' },
    { id: '3', user: 'user3', text: 'Amazing work', time: '30m' },
  ]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

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
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Post Details</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Post Image */}
        <Image 
          source={{ uri: post.video }} 
          className="w-full h-80"
          resizeMode="cover"
        />
        
        {/* Post Info */}
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center flex-1">
              <Image 
                source={{ uri: post.user.avatar }} 
                className="w-12 h-12 rounded-full mr-3"
              />
              <View className="flex-1">
                <Text className="text-white text-lg font-bold">{post.user.username}</Text>
                <Text className="text-gray-400 text-sm">2 hours ago</Text>
              </View>
            </View>
            
            <TouchableOpacity className={`px-4 py-2 rounded-full ${
              post.user.isFollowing ? 'bg-gray-600' : 'bg-red-500'
            }`}>
              <Text className="text-white font-bold">
                {post.user.isFollowing ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <Text className="text-white text-base mb-4">{post.description}</Text>
          
          {/* Action Buttons */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity onPress={handleLike} className="flex-row items-center">
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={24} 
                color={isLiked ? "#FF0000" : "#FFFFFF"} 
              />
              <Text className="text-white ml-2">{formatNumber(likes)}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />
              <Text className="text-white ml-2">{formatNumber(post.comments)}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="share-outline" size={24} color="#FFFFFF" />
              <Text className="text-white ml-2">{formatNumber(post.shares)}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          
          {/* Comments Section */}
          <View>
            <Text className="text-white text-lg font-bold mb-4">Comments</Text>
            
            {comments.map((comment) => (
              <View key={comment.id} className="flex-row mb-4">
                <View className="w-8 h-8 bg-gray-600 rounded-full mr-3" />
                <View className="flex-1">
                  <View className="flex-row items-center mb-1">
                    <Text className="text-white font-medium mr-2">{comment.user}</Text>
                    <Text className="text-gray-400 text-sm">{comment.time}</Text>
                  </View>
                  <Text className="text-gray-300">{comment.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      
      {/* Comment Input */}
      <View className="flex-row items-center px-4 py-3 border-t border-gray-800">
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Add a comment..."
          placeholderTextColor="#666"
          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-full mr-3"
        />
        <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-full">
          <Text className="text-white font-bold">Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};