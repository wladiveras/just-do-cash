<script setup lang="ts">
const { locale } = useI18n()


function toggleLocale() {
    const locales = ['en', 'pt', 'es']
    const currentIndex = locales.indexOf(locale.value)
    const nextIndex = (currentIndex + 1) % locales.length
    locale.value = locales[nextIndex]
}

const localeFlag = computed(() => {
    const flags = {
        en: 'twemoji:flag-us-outlying-islands',
        pt: 'twemoji:flag-brazil',
        es: 'twemoji:flag-spain'
    }

    return flags[locale.value]
})


</script>

<template>
    <div>
        <UButton :icon="localeFlag" color="gray" variant="ghost" @click="toggleLocale" />
    </div>
</template>