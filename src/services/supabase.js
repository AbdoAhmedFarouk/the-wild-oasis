import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hobignejticnjslluwhj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYmlnbmVqdGljbmpzbGx1d2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNTQ2MzUsImV4cCI6MjAzNzczMDYzNX0.2UBzPi4PM24yJNvDEHpmM0Mlpig6Wm3btMc-JQqZmsQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
