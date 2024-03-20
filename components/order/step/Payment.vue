<script lang="ts" setup>
// Stores
const orderStore = useOrderStore();
const { steps } = orderStore;

// Payment Methods
const paymentMethods = reactive([
  {
    label: "Pague com Cartão de Credito ou Debito",
    active: true,
    icon: "i-heroicons-credit-card",
    component: resolveComponent("OrderMethodCard"),
  },
  {
    label: "Pague com Pix",
    active: false,
    icon: "ic:baseline-pix",
    component: resolveComponent("OrderMethodPix"),
  },
  {
    label: "Pague com Boleto",
    active: false,
    icon: "fa-solid:file-invoice",
    component: resolveComponent("OrderMethodBoleto"),
  },
  {
    label: "Pague com Paypal",
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
</script>

<template>
  <UContainer class="mb-[10rem]">
    <div
      class="animate__animated"
      :class="{
        animate__backInRight: steps.rollback === false,
        animate__backInLeft: steps.rollback === true,
      }"
    >
      <OrderDetails
        title="Formas de Pagamento"
        description="Quase lá, agora escolha uma forma de pagamento para concluir seu
            pedido."
      />
      <div>
        <div class="dark:border-gray-800">
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
            <component :is="method.component" v-if="method.active" />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style></style>
