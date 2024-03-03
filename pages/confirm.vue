<script setup lang="ts">

const { t } = useI18n()

definePageMeta({
    layout: 'auth'
})

const user = useSupabaseUser()

watch(user, () => {
    if (user.value) {
        return navigateTo('/welcome')
    }
}, { immediate: true })
</script>

<template>
    <div>
        <h1>{{ t('confirm.waiting_response') }}</h1>
    </div>
</template>