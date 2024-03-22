<script setup lang="ts">
// Stores
const ladingStore = useLandingStore();
const { header } = ladingStore;

// Composables
const { isMobile } = useDevice();

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <div class="rounded-xl rounded-xl">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="header.content.carousel"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden p-4 rounded-xl"
      indicators
    >
      <img
        :src="item"
        class="w-full rounded-xl mt-[-0.85rem]"
        draggable="false"
      />
    </UCarousel>
  </div>
</template>
