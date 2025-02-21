import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { CategoryList } from '../../components/Forum/CategoryList';
import { ForumHeader } from '../../components/Forum/ForumHeader';
import type { Category, Topic } from '../../types/forum';

export function ForumPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recentTopics, setRecentTopics] = useState<Record<string, Topic[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadForumData() {
      try {
        // Load categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('*')
          .order('order');

        if (categoriesError) throw categoriesError;

        // Load recent topics for each category
        const topicsPromises = categoriesData.map(async (category) => {
          const { data: topicsData, error: topicsError } = await supabase
            .from('topics')
            .select(`
              *,
              user_profiles!topics_user_id_fkey(username),
              posts(count)
            `)
            .eq('category_id', category.id)
            .order('pinned', { ascending: false })
            .order('created_at', { ascending: false })
            .limit(5);

          if (topicsError) throw topicsError;

          return {
            categoryId: category.id,
            topics: topicsData.map(topic => ({
              ...topic,
              user_profile: topic.user_profiles,
              post_count: topic.posts[0].count,
            })),
          };
        });

        const topicsResults = await Promise.all(topicsPromises);
        const topicsByCategory = topicsResults.reduce((acc, { categoryId, topics }) => {
          acc[categoryId] = topics;
          return acc;
        }, {} as Record<string, Topic[]>);

        setCategories(categoriesData);
        setRecentTopics(topicsByCategory);
      } catch (error) {
        console.error('Error loading forum data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadForumData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-secondary-blue border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ForumHeader />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CategoryList categories={categories} recentTopics={recentTopics} />
      </div>
    </div>
  );
}