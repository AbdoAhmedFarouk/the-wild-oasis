import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cdpvvsgbuualhknupdws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcHZ2c2didXVhbGhrbnVwZHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NzkxMTAsImV4cCI6MjA5OTM1NTExMH0.IBKFPLe572Y28GDgMxevWQL09RwkH-KG3EktHkM2Rhw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
