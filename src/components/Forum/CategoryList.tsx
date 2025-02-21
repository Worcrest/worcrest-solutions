import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Pin } from 'lucide-react';
import type { Category, Topic } from '../../types/forum';
import { formatDistanceToNow } from 'date-fns';

interface CategoryListProps {
  categories: Category[];
  recentTopics: Record<string, Topic[]>;
}

export function CategoryList({ categories, recentTopics }: CategoryListProps) {
  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-secondary p-4">
            <Link 
              to={`/forum/category/${category.slug}`}
              className="text-xl font-montserrat font-bold text-white hover:text-secondary-blue transition-colors"
            >
              {category.name}
            </Link>
            <p className="text-gray-300 mt-1">{category.description}</p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {recentTopics[category.id]?.map((topic) => (
              <div key={topic.id} className="p-4 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-secondary-blue" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    {topic.pinned && (
                      <Pin className="w-4 h-4 text-primary" />
                    )}
                    <Link 
                      to={`/forum/topic/${topic.slug}`}
                      className="text-lg font-semibold text-secondary hover:text-secondary-blue transition-colors"
                    >
                      {topic.title}
                    </Link>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    By {topic.user_profile?.username} • {formatDistanceToNow(new Date(topic.created_at))} ago
                  </div>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div className="text-lg font-semibold text-secondary">{topic.post_count}</div>
                  <div className="text-sm text-gray-500">replies</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4">
            <Link
              to={`/forum/category/${category.slug}`}
              className="text-secondary-blue hover:text-secondary transition-colors font-medium"
            >
              View all topics →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}