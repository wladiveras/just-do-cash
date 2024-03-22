<script setup lang="ts">
const { $storage } = useNuxtApp();

onMounted(() => {
  $storage.setItem("pessoa", "wladi");
});
</script>

<template>
  <div>
    <LandingHeader />
    <LandingLogos />
    <LandingServices />
    <LandingPlans />
    <LandingTestemonial />
    <LandingPromotion />
    <LandingFaq />
  </div>
</template>
<style lang="scss" scoped>
.w-content {
  @include w-border-debug;
}
</style>
