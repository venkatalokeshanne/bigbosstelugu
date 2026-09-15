'use client'

import { createClient } from '@supabase/supabase-js'

// Public URL + anon key — safe to expose to the browser, used only to
// subscribe to Realtime changes (writes still go through /api/chat so
// validation/sanitization/rate-limiting stay server-side).
let client = null
export function getSupabaseBrowserClient() {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
  }
  return client
}
