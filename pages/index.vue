<script setup lang="ts">
const { $storage } = useNuxtApp()

onMounted(() => {
  $storage.setItem('pessoa', 'wladi')
})

const name = useRuntimeConfig().public.name


</script>

<template>
  <div>
    <LandingHeader />
    <LandingServices />
    <LandingPlans />
    <LandingTestemonial />
    <LandingPromotion />
    <LandingFaq />

  </div>
</template>
