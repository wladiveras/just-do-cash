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
    <UHeader v-motion-pop-visible class="border-b border-gray-300">
      <template #logo>
        <UIcon name="streamline:subscription-cashflow" class="w-auto h-6" />
      </template>

      <template #center>
        <ULink to="/" class="text-lg font-semibold hidden md:block">
          Beleza Natural
        </ULink>
      </template>

      <template #right>
        <ToggleLocation size="sm" />
        <UColorModeButton size="sm" />
      </template>
    </UHeader>
  </div>
</template>

<style></style>
