<script lang="ts" setup>
// Stores
const orderStore = useOrderStore();
const { steps } = orderStore;

const icon = ref("line-md:arrow-small-right");
const label = ref("Continuar");

watch(
  () => steps.step,
  () => {
    if (steps.step === steps.max) {
      icon.value = "line-md:check-all";
      label.value = "Finalizar Pedido";
    } else {
      icon.value = "line-md:arrow-small-right";
      label.value = "Continuar";
    }
  },
);

// Actions
const nextStep = () => {
  orderStore.triggerStep(true);
};
</script>
<template>
  <div>
    <UContainer>
      <UCard v-motion-fade-visible>
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-lg font-semibold">
                <UIcon name="material-symbols:order-approve-outline-sharp" />
                Resumo do Pedido
              </h1>
              <span class="text-sm text-gray-600">
                Veja os detalhes do seu pedido.
              </span>
            </div>
          </div>
        </template>
        <p>Um texto apresentavel do produto e todos os passos concluidos</p>

        <template #footer>
          <div
            class="animate__animated animate__zoomInDown"
            v-motion-roll-visible-top
          >
            <UButton
              v-motion-fade-visible
              class="m-auto mx-auto w-full text-center"
              color="primary"
              :icon="icon"
              variant="solid"
              :label="label"
              block
              :loading="steps.trigger"
              :disabled="steps.trigger"
              @click="nextStep"
            />
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<style></style>
