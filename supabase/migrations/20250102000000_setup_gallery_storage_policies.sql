-- Create gallery storage bucket if it doesn't exist
-- Note: Bucket creation must be done manually in Supabase Dashboard
-- This migration only sets up the policies

-- Enable RLS on storage.objects (if not already enabled)
-- Storage RLS is enabled by default, but we'll ensure policies exist

-- Policy: Allow admins to upload files to gallery bucket
CREATE POLICY "Admins can upload to gallery bucket"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'gallery' AND
  public.has_role(auth.uid(), 'admin')
);

-- Policy: Allow admins to update files in gallery bucket
CREATE POLICY "Admins can update gallery files"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'gallery' AND
  public.has_role(auth.uid(), 'admin')
)
WITH CHECK (
  bucket_id = 'gallery' AND
  public.has_role(auth.uid(), 'admin')
);

-- Policy: Allow admins to delete files from gallery bucket
CREATE POLICY "Admins can delete gallery files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'gallery' AND
  public.has_role(auth.uid(), 'admin')
);

-- Policy: Allow anyone to view files in gallery bucket (public bucket)
CREATE POLICY "Anyone can view gallery files"
ON storage.objects
FOR SELECT
USING (bucket_id = 'gallery');

