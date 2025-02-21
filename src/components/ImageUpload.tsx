import React, { useState } from 'react';
import { uploadTeamMemberImage } from '../lib/storage';
import { Loader2 } from 'lucide-react';

interface ImageUploadProps {
  onUploadComplete: (url: string) => void;
}

export function ImageUpload({ onUploadComplete }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setError(null);
      const url = await uploadTeamMemberImage(file);
      onUploadComplete(url);
    } catch (err) {
      setError('Error uploading image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="sr-only">Choose team member photo</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-secondary-blue file:text-white
            hover:file:bg-blue-700
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </label>
      
      {uploading && (
        <div className="flex items-center gap-2 text-secondary-blue">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Uploading...</span>
        </div>
      )}
      
      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}