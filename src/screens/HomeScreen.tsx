import React, { useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { Header } from '../components/Header';
import { CategoryTabs } from '../components/CategoryTabs';
import { PostCard } from '../components/PostCard';
import { BottomTabBar } from '../components/BottomTabBar';
import { mockPosts } from '../data/mockData';
import { Post } from '../types/indexx';

interface HomeScreenProps {
  onNavigate: (screen: string, params?: any) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('home');

  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleFollow = (userId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.user.id === userId
          ? {
              ...post,
              user: { ...post.user, isFollowing: !post.user.isFollowing },
            }
          : post
      )
    );
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'profile') {
      onNavigate('profile');
    } else if (tab === 'add') {
      onNavigate('upload');
    }
  };

  const renderPost = ({ item, index }: { item: Post; index: number }) => (
    <PostCard
      post={item}
      onPress={() => onNavigate('postDetail', { post: item })}
      onLike={() => handleLike(item.id)}
      onComment={() => onNavigate('postDetail', { post: item })}
      onShare={() => {}}
      onFollow={() => handleFollow(item.user.id)}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-black">
      <Header
        onMenuPress={() => onNavigate('menu')}
        onSearchPress={() => onNavigate('search')}
      />
      
      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 12 }}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
      
      <View className="absolute bottom-0 left-0 right-0">
        <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
    </SafeAreaView>
  );
};