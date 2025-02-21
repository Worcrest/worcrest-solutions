export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  order: number;
  created_at: string;
}

export interface Topic {
  id: string;
  title: string;
  slug: string;
  category_id: string;
  user_id: string;
  pinned: boolean;
  locked: boolean;
  created_at: string;
  updated_at: string;
  user_profile?: UserProfile;
  post_count?: number;
}

export interface Post {
  id: string;
  content: string;
  topic_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  user_profile?: UserProfile;
}

export interface UserProfile {
  id: string;
  username: string;
  avatar_url: string | null;
  title: string | null;
  post_count: number;
  joined_at: string;
}