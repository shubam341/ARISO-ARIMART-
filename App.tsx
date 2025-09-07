import React, { useState } from 'react';
import './global.css';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { UploadScreen } from './src/screens/UploadScreen';
import { MenuScreen } from './src/screens/MenuScreen';
import { PostDetailScreen } from './src/screens/PostDetailScreen';
import { Post } from './src/types/indexx';



type Screen = 'home' | 'search' | 'profile' | 'upload' | 'menu' | 'postDetail';

interface NavigationState {
  screen: Screen;
  params?: any;
}

export default function App() {
  const [navigation, setNavigation] = useState<NavigationState>({ screen: 'home' });

  const navigate = (screen: Screen, params?: any) => {
    setNavigation({ screen, params });
  };

  const renderScreen = () => {
    switch (navigation.screen) {
      case 'home':
        return <HomeScreen onNavigate={navigate} />;
      case 'search':
        return <SearchScreen onNavigate={navigate} />;
      case 'profile':
        return <ProfileScreen onNavigate={navigate} />;
      case 'upload':
        return <UploadScreen onNavigate={navigate} />;
      case 'menu':
        return <MenuScreen onNavigate={navigate} />;
      case 'postDetail':
        return <PostDetailScreen post={navigation.params?.post} onNavigate={navigate} />;
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <>
      <StatusBar style="light" />
      {renderScreen()}
    </>
  );
}