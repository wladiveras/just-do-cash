import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {

  const user = await auth(event)


  return { data: user }
})
