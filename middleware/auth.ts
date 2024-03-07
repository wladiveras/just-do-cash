export default defineNuxtRouteMiddleware((to, _from) => {
    const user = false;

    if (!user) {
      return navigateTo('/login')
    }
  })