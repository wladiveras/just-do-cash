<script lang="ts" setup>
const orderStore = useOrderStore();
// Payment Methods
const paymentMethods = reactive([
  {
    label: "Cartão de Credito",
    active: true,
    icon: "i-heroicons-credit-card",
    component: resolveComponent("OrderMethodCard"),
  },
  {
    label: "Paypal",
    active: false,
    icon: "mingcute:paypal-fill",
    component: resolveComponent("OrderMethodPaypal"),
  },
]);

const changeSelectedMethod = (method: any) => {
  paymentMethods.forEach((m) => {
    m.active = false;
  });
  method.active = true;
};

const previousStep = () => {
  orderStore.prevStep();
};
</script>

<template>
  <UContainer class="mb-[10rem]">
    <div class="animate__animated animate__bounceIn">
      <div class="flex items-center justify-center flex-wrap">
        <div class="w-full text-center mb-10 mt-10">
          <UIcon name="streamline:subscription-cashflow" class="w-auto h-16" />
        </div>

        <div class="text-center">
          <p class="text-2xl">Formas de Pagamento</p>
          <p class="text-sm mb-10 text-gray-500 dark:text-gray-400">
            Quase lá, agora escolha uma forma de pagamento para concluir seu
            pedido.
          </p>
        </div>
      </div>
      <div>
        <div
          v-for="method in paymentMethods"
          :key="method.label"
          v-auto-animate
          class="payment-method border-b pt-5 pb-5 dark:border-gray-800"
        >
          <div
            class="w-full flex flex-wrap sm:flex-nowrap"
            @click="changeSelectedMethod(method)"
          >
            <div
              v-auto-animate
              class="font-bold text-xl flex items-center block w-full cursor-pointer"
              :class="{
                'text-primary dark:text-primary': method.active,
              }"
            >
              <div class="flex justify-between w-full">
                <div>
                  <UIcon :name="method.icon" class="mr-2 mt-[-0.2rem]" />
                  <span>{{ method.label }}</span>
                </div>
                <div>
                  <UTooltip
                    :text="`Clique para selecionar a forma de pagamento ${method.label}`"
                    :popper="{ placement: 'left', arrow: true }"
                  >
                    <UIcon name="game-icons:click" class="" />
                  </UTooltip>
                </div>
              </div>
            </div>
          </div>
          <component
            :is="method.component"
            v-if="method.active"
            v-motion-roll-visible-bottom
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style></style>
