<script lang="ts" setup>
const orderStore = useOrderStore();
const { payment, steps } = orderStore;

// Composables
const toast = useToast();

// Trigger to next step from summary
watch(
  () => steps.trigger,
  (value) => {
    if (value === true) {
      handleTrigger();
    }
  },
);

onMounted(() => {
  payment.method = "BOLETO";
});

// Handle Next Step from summary
const handleTrigger = async () => {
  if (steps.trigger === true) {
    try {
    } catch (error) {}
    orderStore.triggerStep(false);
  }
};
</script>

<template>
  <div class="w-full flex flex-col gap-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="space-y-4 flex flex-col justify-top p-[2rem]">
        <p class="text-base pl-2">
          Ao clicar em <span class="text-primary">"Finalizar Pedido"</span>,
          você será redirecionado para a página de confirmação do pedido.
        </p>
      </div>

      <div class="space-y-4 flex flex-col justify-center items-center">
        <div class="max-w-[20rem]">
          <UIcon
            name="fa-solid:file-invoice"
            class="text-[10rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
