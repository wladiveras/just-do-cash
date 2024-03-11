<script setup lang="ts">
const links = [
  {
    label: "Docs",
    icon: "i-heroicons-book-open",
    to: "/getting-started",
  },
  {
    label: "Pro",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/pro",
  },
  {
    label: "Releases",
    icon: "i-heroicons-rocket-launch",
    to: "/releases",
  },
];
</script>

<template>
  <div>
    <UHeader
      fixed
      v-motion-pop-visible
      class="border-b border-gray-300 mb-[3rem]"
      :ui="{
        wrapper:
          'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
      }"
    >
      <template #logo>
        <UIcon name="streamline:subscription-cashflow" class="w-auto h-6" />
      </template>

      <template #center>
        <div class="animate__animated animate__slideInDown">
          <OrderStep />
        </div>
      </template>

      <template #right>
        <ToggleLocation size="sm" />
        <UColorModeButton size="sm" />
      </template>
    </UHeader>
  </div>
</template>

<style></style>
