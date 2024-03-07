<template>

  <div>
    <PreLoader v-if="isLoading" />
    <div v-show="!isLoading">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})

const page = reactive({
  title: 'Beleza Natural',
  description: 'A beleza que é natural'
})

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description
})
</script>

<style></style>