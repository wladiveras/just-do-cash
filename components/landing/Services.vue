<script lang="ts" setup>
const landingStore = useLandingStore();
const { services } = landingStore;

// Composables
const toast = useToast();
const { t } = useI18n();
</script>

<template>
  <div>
    <ULandingSection
      :title="services.title"
      :description="services.description"
      :headline="services.headline"
    >
      <UPageGrid
        id="features"
        class="duration-1000 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in services.items"
          :key="index"
          v-motion-pop-visible
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>

<style></style>
