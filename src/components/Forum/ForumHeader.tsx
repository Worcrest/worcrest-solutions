import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { AuthModal } from '../Auth/AuthModal';

export function ForumHeader() {
  const { user, signOut } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="bg-secondary text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/forum" className="text-2xl font-montserrat font-bold">
              Community Forum
            </Link>
            <p className="text-gray-300 mt-1">
              Join the discussion with fellow IT professionals
            </p>
          </div>

          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to={`/forum/profile/${user.id}`}
                  className="text-white hover:text-secondary-blue transition-colors"
                >
                  My Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}