import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const urlQuery = getQuery(event);

  const { error, data } = await client
    .from("metas")
    .select("*")
    .contains("key", urlQuery);

  if (error) {
    return error;
  }

  return data;
})
