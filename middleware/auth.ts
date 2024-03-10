export default defineNuxtRouteMiddleware((_from) => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/login");
  }
});
