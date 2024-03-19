<script lang="ts" setup>
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
const previousStep = () => {
  orderStore.prevStep();
};

const triggerStep = () => {
  orderStore.triggerStep(true);
};
</script>

<template>
  <UContainer>
    <UCard class="max-w-[24rem] m-auto animate__animated animate__backInUp">
      <div class="flex justify-center items-center">
        <div v-if="steps.step >= 2" class="w-full">
          <UButtonGroup
            size="sm"
            orientation="horizontal"
            class="w-full w-[8rem]"
          >
            <UButton
              class="text-center"
              color="primary"
              variant="outline"
              icon="line-md:arrow-small-left"
              size="md"
              label="Voltar"
              block
              @click="previousStep"
            >
            </UButton>
          </UButtonGroup>
        </div>
        <div class="w-full">
          <UButtonGroup
            size="sm"
            orientation="horizontal"
            class="w-full"
            :class="{
              'w-[10rem]': steps.step >= 2,
            }"
          >
            <UButton
              class="text-center"
              color="primary"
              variant="solid"
              :label="label"
              size="md"
              block
              @click="triggerStep"
              :loading="steps.trigger"
              :disabled="steps.trigger"
            >
              <template #trailing>
                <UIcon :name="icon" size="1.3rem" />
              </template>
            </UButton>
          </UButtonGroup>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<style></style>
