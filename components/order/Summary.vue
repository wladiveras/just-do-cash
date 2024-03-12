<script lang="ts" setup>
const orderStore = useOrderStore();

const trigger = computed(() => orderStore.steps.trigger);

const nextStep = () => {
  orderStore.TriggerStep(true);
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
              icon="line-md:confirm"
              variant="solid"
              label="Concluir Pedido"
              block
              :loading="trigger"
              :disabled="trigger"
              @click="nextStep"
            />
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<style></style>
