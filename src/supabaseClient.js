
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

export const supabase = (isValidUrl(supabaseUrl) && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            select: () => Promise.resolve({ data: [], error: { message: 'Supabase configuration missing or invalid. Check your .env file.' } }),
            insert: () => Promise.resolve({ data: null, error: { message: 'Supabase configuration missing or invalid. Check your .env file.' } }),
        }),
        storage: {
            from: () => ({
                upload: () => Promise.resolve({ data: null, error: { message: 'Supabase configuration missing or invalid. Check your .env file.' } }),
                getPublicUrl: () => ({ data: { publicUrl: '' } })
            })
        }
    }

if (!isValidUrl(supabaseUrl)) {
    console.error("Invalid or missing VITE_SUPABASE_URL in .env. It must be a valid URL (e.g., https://xyz.supabase.co).");
}
