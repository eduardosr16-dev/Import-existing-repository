import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://svvxthekfgsjvwskipmc.supabase.co'

const supabaseKey =
  'sb_publishable_eS3HNjiuw7re2VGsGx5fZg_FxlMvOGf'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)