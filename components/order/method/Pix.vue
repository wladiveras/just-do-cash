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
  payment.method = "PIX";
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
        <div class="space-y-4 flex flex-col justify-top p-[2rem]">
          <p class="text-base pl-2">
            Gere um QR code ou se preferir, copie o código Pix para efetuar o
            pagamento.
          </p>
        </div>
        <UAlert
          icon="ic:baseline-pix"
          color="green"
          variant="solid"
          title="Pague com Pix"
          description="Após o pagamento clique em 'Finalizar Pedido', você será redirecionado para a página de confirmação do pedido."
        />
        <UButtonGroup
          size="sm"
          orientation="horizontal"
          class="w-full mb-5 mt-5"
        >
          <UButton
            class="text-center"
            color="primary"
            variant="solid"
            icon="ic:baseline-qrcode"
            size="md"
            label="Gerar Código QR Pix"
            block
          >
          </UButton>
        </UButtonGroup>
        <UButtonGroup size="sm" orientation="horizontal" class="w-full">
          <UButton
            class="text-center"
            color="primary"
            variant="outline"
            size="md"
            label="Copiar codigo Pix"
            block
          >
          </UButton>
        </UButtonGroup>
      </div>

      <div class="space-y-4 flex flex-col justify-center items-center">
        <div class="max-w-[20rem]">
          <UIcon
            name="ic:baseline-qrcode"
            class="text-[10rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
