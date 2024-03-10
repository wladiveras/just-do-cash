<script lang="ts" setup>
definePageMeta({
  layout: "order",
});
</script>

<template>
  <UContainer>
    <div class="flex flex-col md:flex-row gap-10">
      <OrderPaymentMethods />
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
