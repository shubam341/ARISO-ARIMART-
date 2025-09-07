export interface Post {
  id: string;
  user: {
    id: string;
    username: string;
    avatar: string;
    isFollowing: boolean;
  };
  video: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  following: number;
  likes: number;
  bio: string;
}