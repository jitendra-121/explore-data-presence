
-- Create a storage bucket for resumes
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true);

-- Create a table to track resume uploads
CREATE TABLE public.resumes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_current BOOLEAN DEFAULT true
);

-- Enable RLS on the resumes table
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view resumes (since it's public)
CREATE POLICY "Anyone can view resumes" 
  ON public.resumes 
  FOR SELECT 
  TO public
  USING (true);

-- Create policy to allow anyone to insert resumes
CREATE POLICY "Anyone can upload resumes" 
  ON public.resumes 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create policy to allow anyone to update resumes
CREATE POLICY "Anyone can update resumes" 
  ON public.resumes 
  FOR UPDATE 
  TO public
  USING (true);

-- Create storage policy for the resumes bucket
CREATE POLICY "Anyone can upload resumes" 
  ON storage.objects 
  FOR INSERT 
  TO public
  WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Anyone can view resumes" 
  ON storage.objects 
  FOR SELECT 
  TO public
  USING (bucket_id = 'resumes');

CREATE POLICY "Anyone can update resumes" 
  ON storage.objects 
  FOR UPDATE 
  TO public
  USING (bucket_id = 'resumes');
