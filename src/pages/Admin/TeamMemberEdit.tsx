import React, { useState } from 'react';
import { ImageUpload } from '../../components/ImageUpload';

export function TeamMemberEdit() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
    // Here you would typically update the team member's data in your database
    console.log('Image uploaded:', url);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-montserrat font-bold text-secondary mb-6">
        Edit Team Member Photo
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Member Photo
          </label>
          <ImageUpload onUploadComplete={handleImageUpload} />
        </div>

        {imageUrl && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview:</h3>
            <img
              src={imageUrl}
              alt="Team member preview"
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}