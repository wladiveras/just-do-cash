<script lang="ts" setup>
const landingStore = useLandingStore();
const { faq } = landingStore;

// Composables
const toast = useToast();
const { t } = useI18n();
</script>

<template>
  <div>
    <ULandingSection
      id="faq"
      v-motion-slide-visible-bottom
      :title="faq.title"
      :description="faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ multiple :items="faq.items" class="max-w-4xl mx-auto" />
    </ULandingSection>
  </div>
</template>

<style></style>
