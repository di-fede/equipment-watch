import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://oxdvxwhishvrgakggupj.supabase.co";
const supabaseKey = "sb_publishable_dwLGi1UFCwsSQ-sjxjjXlw_4B0vOYJ1";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
