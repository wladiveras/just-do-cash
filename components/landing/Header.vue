<script lang="ts" setup>
const landingStore = useLandingStore();
const { header } = landingStore;

// Composables
const toast = useToast();
const { t } = useI18n();
</script>
<template>
  <ULandingHero>
    <template #title class="">
      <div class="animate__animated animate__backInDown">
        <span class="max-w-1.2">{{ header.title }}</span>
      </div>
    </template>

    <template #description>
      <div class="animate__animated animate__jello">
        <span>{{ header.description }}</span>
      </div>
    </template>

    <template #headline>
      <!-- todo: add a new feature can be show above title-->
    </template>
    <div class="relative">
      <div class="bg-background border-gradient rounded-xl p-4">
        <div
          class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-950/10 dark:border-white/10"
        >
          <iframe
            v-if="header.content.type === 'video'"
            class="absolute"
            :src="header.content.src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </ULandingHero>
</template>

<style></style>
