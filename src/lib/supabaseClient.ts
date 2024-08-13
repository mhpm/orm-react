
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ovevaibtxbvpaoycjvfj.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string

export const supabaseClient = createClient(supabaseUrl, supabaseKey)