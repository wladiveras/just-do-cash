<script setup lang="ts">
const { $storage } = useNuxtApp();

onMounted(() => {
  $storage.setItem("pessoa", "wladi");
});
</script>

<template>
  <UContainer>
    <LandingHeader />
    <LandingLogos />
    <LandingProduct />
    <LandingServices />
    <LandingPlans />
    <LandingTestemonial />
    <LandingPromotion />
    <LandingFaq />
  </UContainer>
</template>
<style lang="scss" scoped>
.w-content {
  @include w-border-debug;
}
</style>
