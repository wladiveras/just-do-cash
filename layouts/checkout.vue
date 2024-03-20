<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "dark:bg-gray-950",
  },
});

const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <div>
    <PreLoader v-if="isLoading" />
    <div v-show="!isLoading" class="h-screen w-full">
      <UPage>
        <OrderHeader />
        <UPageBody class="mt-[6rem] h-screen">
          <slot />
        </UPageBody>
      </UPage>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(var(--color-primary-500) / 0.25) 0,
    #fff 100%
  );
}

.dark {
  .gradient {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(var(--color-primary-400) / 0.1) 0,
      rgb(var(--color-gray-950)) 100%
    );
  }
}

.overlay {
  background-size: 100px 100px;
  background-image: linear-gradient(
      to right,
      rgb(var(--color-gray-200)) 0.5px,
      transparent 0.5px
    ),
    linear-gradient(
      to bottom,
      rgb(var(--color-gray-200)) 0.5px,
      transparent 0.5px
    );
}

.dark {
  .overlay {
    background-image: linear-gradient(
        to right,
        rgb(var(--color-gray-900)) 0.5px,
        transparent 0.5px
      ),
      linear-gradient(
        to bottom,
        rgb(var(--color-gray-900)) 0.5px,
        transparent 0.5px
      );
  }
}
</style>
