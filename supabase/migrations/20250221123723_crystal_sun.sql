/*
  # Enable storage for team member images

  1. Storage Policies
    - Enable public access to team member images
    - Allow authenticated users to upload images
*/

-- Enable storage for authenticated users to upload team member images
CREATE POLICY "Allow public access to team member images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'public' AND position('team-members/' in name) = 1);

CREATE POLICY "Allow authenticated users to upload team member images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'public' AND position('team-members/' in name) = 1);