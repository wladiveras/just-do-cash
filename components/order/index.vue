<script setup lang="ts">
const { $storage } = useNuxtApp();
const orderStore = useOrderStore();
const { steps } = orderStore;

onMounted(() => {
  orderStore.captureLead();
});
</script>

<template>
  <UContainer>
    <div class="flex flex-col md:flex-row gap-10 md:gap-0">
      <!-- Dados Pessoais do cliente -->
      <OrderStepPersonal class="px-0 py-0" v-if="steps.step === 1" />

      <!-- Dados de entrega do cliente apenas caso tenha que receber produtos fisicos -->
      <OrderStepDelivery class="px-0 py-0" v-if="steps.step === 2" />

      <!-- Detalhamento do pedido -->
      <OrderStepInvoice class="px-0 py-0" v-if="steps.step === 4" />

      <!-- Etapa para escolher  o metodo de pagamento e finalizar o pedido <obrigatoria> -->
      <OrderStepPayment class="px-0 py-0" v-if="steps.step === 3" />

      <!-- Sumario do pedido e controle de etapas -->
      <OrderSummary v-if="steps.step >= 3" />
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
