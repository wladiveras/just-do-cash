<script lang="ts" setup>
const landingStore = useLandingStore();
const { promotion } = landingStore;

// Composables
const toast = useToast();
const { t } = useI18n();
</script>

<template>
  <div>
    <ULandingSection
      class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"
    >
      <ULandingCTA
        id="promotion"
        align="center"
        :title="promotion.title"
        :description="promotion.description"
        :card="false"
        :links="[
          {
            label: promotion.label,
            to: promotion.path,
            color: 'primary',
            size: 'xl',
            click: () => {},
            trailingIcon: 'i-heroicons-arrow-up-20-solid',
          },
        ]"
      >
        <img
          v-motion-pop-visible
          :src="promotion.src"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        />
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>

<style></style>
