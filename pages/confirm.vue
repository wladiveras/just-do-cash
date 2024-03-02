<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})

const user = useSupabaseUser()

const cookieName = useRuntimeConfig().public.supabase.cookieName
const redirectPath = useCookie(`${cookieName}-redirect-path`).value

watch(user, () => {
    if (user.value) {
        useCookie(`${cookieName}-redirect-path`).value = null
        return navigateTo(redirectPath || '/');
    }
}, { immediate: true })
</script>

<template>
    <div>Waiting for login...</div>
</template>