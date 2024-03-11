<script lang="ts" setup>
const { $storage } = useNuxtApp();

definePageMeta({
  layout: "order",
});

const orderStore = useOrderStore();

onMounted(() => {
  orderStore.captureLead();
  orderStore.nextStep();
});
</script>

<template>
  <UContainer>
    <div class="flex flex-col md:flex-row gap-10">
      <OrderPaymentMethods class="px-0 py-0" />
      <OrderSummary />
    </div>
  </UContainer>
</template>

<style>
@media (min-width: 768px) {
  .flex-col.md\:flex-row {
    flex-direction: row;
  }
}
</style>
