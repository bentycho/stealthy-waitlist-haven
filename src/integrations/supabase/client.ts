// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://erfuqbokxvghguoiukno.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyZnVxYm9reHZnaGd1b2l1a25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MjQ4NzYsImV4cCI6MjA1MjIwMDg3Nn0.d6iIXwzaipONlLAEL-ejVV_TZshUz7rSRKDo9Ri9fMM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);