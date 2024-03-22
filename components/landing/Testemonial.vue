<script lang="ts" setup>
const landingStore = useLandingStore();
const { testimonials } = landingStore;
</script>

<template>
  <div>
    <ULandingSection
      :headline="testimonials.headline"
      :title="testimonials.title"
      :description="testimonials.description"
    >
      <UPageColumns
        id="testimonials"
        class="duration-1000 xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(testimonial, index) in testimonials.items"
          :key="index"
          v-motion-roll-visible-left
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>
  </div>
</template>

<style></style>
