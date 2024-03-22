<script lang="ts" setup>
const landingStore = useLandingStore();
const { logos } = landingStore;

// Composables
const toast = useToast();
const { t } = useI18n();
</script>
<template>
  <ULandingLogos
    v-motion-slide-visible-right
    :title="logos.title"
    align="center"
  >
    <UIcon
      v-for="icon in logos.icons"
      :key="icon"
      :name="icon"
      class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
    />
  </ULandingLogos>
</template>
