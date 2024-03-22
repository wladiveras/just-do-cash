<script lang="ts" setup>
const landingStore = useLandingStore();
const { plans } = landingStore;

// Composables
const toast = useToast();
const { t } = useI18n();
</script>

<template>
  <UContainer>
    <ULandingSection
      :title="plans.title"
      :description="plans.description"
      :headline="plans.headline"
    >
      <UPricingGrid
        id="pricing"
        compact
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <UPricingCard
          v-motion-pop-visible
          v-for="(plan, index) in plans.subscriptions"
          :key="index"
          align="top"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :highlight="plan.highlight"
          :scale="plan.scale"
          :features="plan.features"
          :button="plan.button"
        />
      </UPricingGrid>
    </ULandingSection>
  </UContainer>
</template>

<style></style>
