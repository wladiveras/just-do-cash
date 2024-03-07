<script setup lang="ts">

const { t } = useI18n()

definePageMeta({
    layout: 'auth'
})

const user = ref(false)

watch(user, () => {
    if (user.value) {
        return navigateTo('/')
    }
}, { immediate: true })
</script>

<template>
    <div>
        <h1>{{ t('confirm.waiting_response') }}</h1>
    </div>
</template>