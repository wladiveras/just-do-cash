<script lang="ts" setup>
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
})

const page = reactive({
  title: "Beleza Natural",
  description: "A beleza que é natural",
});

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description,
});
</script>

<template>
  <div>
    <PreLoader v-if="isLoading" />
    <div v-show="!isLoading">
      <UPage>
        <Header />
        <UPageBody>
          <slot />
        </UPageBody>
        <Footer />
      </UPage>
    </div>
  </div>
</template>

<style></style>
