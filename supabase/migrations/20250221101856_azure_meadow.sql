/*
  # Fresh Forum Setup

  1. New Tables
    - `categories` - Forum categories
    - `user_profiles` - Extended user information
    - `topics` - Forum topics/threads
    - `posts` - Individual posts within topics

  2. Security
    - Enable RLS on all tables
    - Set up policies for authenticated users
    - Allow public viewing of content
    
  3. Initial Data
    - Create default forum categories
*/

-- Drop existing tables if they exist
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;

-- Create categories table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  slug text UNIQUE NOT NULL,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create user profiles table
CREATE TABLE user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  avatar_url text,
  title text,
  post_count integer DEFAULT 0,
  joined_at timestamptz DEFAULT now()
);

-- Create topics table
CREATE TABLE topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE,
  pinned boolean DEFAULT false,
  locked boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(category_id, slug)
);

-- Create posts table
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  topic_id uuid REFERENCES topics(id) ON DELETE CASCADE,
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Categories Policies
CREATE POLICY "Categories are viewable by everyone"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Categories are insertable by admins only"
  ON categories FOR INSERT
  WITH CHECK (
    auth.jwt() ->> 'role' = 'admin'
  );

-- Topics Policies
CREATE POLICY "Topics are viewable by everyone"
  ON topics FOR SELECT
  USING (true);

CREATE POLICY "Topics can be created by authenticated users"
  ON topics FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Topics can be updated by their authors"
  ON topics FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Posts Policies
CREATE POLICY "Posts are viewable by everyone"
  ON posts FOR SELECT
  USING (true);

CREATE POLICY "Posts can be created by authenticated users"
  ON posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Posts can be updated by their authors"
  ON posts FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- User Profiles Policies
CREATE POLICY "Profiles are viewable by everyone"
  ON user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create initial categories
INSERT INTO categories (name, description, slug, "order") VALUES
('Announcements', 'Official announcements from Worcrest Solutions', 'announcements', 1),
('General Discussion', 'General IT and technology discussions', 'general-discussion', 2),
('Security & Compliance', 'Discussions about cybersecurity and compliance', 'security-compliance', 3),
('Cloud Solutions', 'Topics related to cloud infrastructure and services', 'cloud-solutions', 4),
('Technical Support', 'Technical support and troubleshooting', 'technical-support', 5);