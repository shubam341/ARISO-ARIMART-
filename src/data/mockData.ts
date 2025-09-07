import { Post, User } from '../types/indexx';

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'Newman Xie Study',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      isFollowing: false,
    },
    video: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'What is Predicate (Part 1)',
    likes: 37500,
    comments: 1200,
    shares: 890,
    isLiked: false,
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'Qili Lili',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      isFollowing: true,
    },
    video: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Should go see a broader world',
    likes: 4335,
    comments: 234,
    shares: 156,
    isLiked: true,
  },
  {
    id: '3',
    user: {
      id: '3',
      username: 'fashionista',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      isFollowing: false,
    },
    video: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Latest fashion trends 2024',
    likes: 12500,
    comments: 567,
    shares: 234,
    isLiked: false,
  },
  {
    id: '4',
    user: {
      id: '4',
      username: 'traveler_joe',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      isFollowing: false,
    },
    video: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Amazing travel destinations',
    likes: 8900,
    comments: 345,
    shares: 178,
    isLiked: true,
  },
];

export const currentUser: User = {
  id: '1',
  username: 'Newman Xie Study',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  followers: 1200,
  following: 890,
  likes: 45600,
  bio: 'Content creator | Educator | Sharing knowledge',
};

export const searchTrends = [
  { id: '1', title: 'Blood Moon Lunar Eclipse is coming', views: '8422.4k', hot: true },
  { id: '2', title: 'My youth really looked back at me once', views: '4740k', hot: true },
  { id: '3', title: 'Trump said he treats the US flag as a brother', views: '4642.3k', hot: false },
  { id: '4', title: 'Night scenes captured by phone look like flowing galaxies', views: '3946.6k', hot: false },
];

export const categories = [
  'For You', 'Video', 'Live', 'Series', 'Fashion', 'Food', 'Travel', 'TV & movies',
  'Comedy', 'Cartoon', 'Crafts', 'Gaming', 'Nails', 'Music', 'Science', 'Art',
  'Love & life', 'Photography', 'Celebrity', 'Cars', 'Painting', 'Home Decor',
  'Wallpaper', 'Learning'
];
