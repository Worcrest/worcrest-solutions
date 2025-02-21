/*
  # Update Forum Relationships

  1. Changes
    - Drop existing foreign key constraints
    - Update topics and posts to reference user_profiles
    - Re-add foreign key constraints with correct references
    
  2. Security
    - Ensure RLS policies are updated for the new relationships
*/

-- Update topics table to reference user_profiles
DO $$ 
BEGIN
  -- Drop existing foreign key if it exists
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'topics_user_id_fkey'
  ) THEN
    ALTER TABLE topics DROP CONSTRAINT topics_user_id_fkey;
  END IF;

  -- Add new foreign key to user_profiles
  ALTER TABLE topics
  ADD CONSTRAINT topics_user_id_fkey
  FOREIGN KEY (user_id) 
  REFERENCES user_profiles(id) 
  ON DELETE CASCADE;
END $$;

-- Update posts table to reference user_profiles
DO $$ 
BEGIN
  -- Drop existing foreign key if it exists
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'posts_user_id_fkey'
  ) THEN
    ALTER TABLE posts DROP CONSTRAINT posts_user_id_fkey;
  END IF;

  -- Add new foreign key to user_profiles
  ALTER TABLE posts
  ADD CONSTRAINT posts_user_id_fkey
  FOREIGN KEY (user_id) 
  REFERENCES user_profiles(id) 
  ON DELETE CASCADE;
END $$;