<script setup lang="ts">
// Stores
const orderStore = useOrderStore();
const { steps } = orderStore;

// Composables
const { isMobile } = useDevice();
</script>

<template>
  <div class="fixed w-full z-10">
    <UHeader
      fixed
      v-motion-pop-visible
      class="border-b border-gray-300"
      :ui="{
        wrapper:
          'bg-background/75 backdrop-blur border-b border-gray-300 dark:border-gray-800 -mb-px sticky top-0 z-50',
      }"
    >
      <template #logo>
        <UIcon name="streamline:subscription-cashflow" class="w-auto h-6" />
      </template>

      <template #center>
        <div class="animate__animated animate__slideInDown">
          <UTooltip
            text="Etapas do Pedido"
            :popper="{ placement: 'bottom', arrow: true }"
          >
            <div class="text-center cursor-pointer">
              <div
                class="font-semibold animate_animated animate__heartBeat"
                v-if="steps.step === 1"
              >
                Dados Pessoais
              </div>
              <div
                class="font-semibold animate_animated animate__heartBeat"
                v-if="steps.step === 2"
              >
                Endereço de Entrega
              </div>
              <div
                class="font-semibold animate_animated animate__heartBeat"
                v-if="steps.step === 3"
              >
                Metodo de Pagamento
              </div>
              <div
                class="font-light text-sm animate_animated animate__heartBeat"
              >
                {{ steps.step }} de {{ steps.max }} etapas
              </div>
            </div>
          </UTooltip>
        </div>
      </template>

      <template #right>
        <ToggleLocation size="sm" />
        <UColorModeButton size="sm" />
      </template>
    </UHeader>
    <UMeter
      :value="steps.step"
      :min="1"
      :max="steps.max"
      :ui="{
        meter: { rounded: '!rounded-none' },
        bar: {
          rounded:
            '!rounded-none [&::-webkit-meter-optimum-value]:rounded-none  [&::-moz-meter-bar]:rounded-none',
        },
      }"
    />
  </div>
</template>

<style></style>
