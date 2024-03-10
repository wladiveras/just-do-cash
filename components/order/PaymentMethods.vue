<script lang="ts" setup>
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
  })
  method.active = true;
}
</script>

<template>
  <div>
    <UContainer>
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-lg font-semibold">Metodo de Pagamento</h1>
              <span class="text-sm text-gray-600"
                >Selecione um metodo de pagamento</span
              >
            </div>
            <div>
              <UButton
                icon="i-heroicons-arrow-left"
                size="sm"
                color="primary"
                variant="link"
                label="Button"
                :trailing="false"
                to="/"
              >
                Voltar
              </UButton>
            </div>
          </div>
        </template>
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
                class="font-bold text-xl flex items-center block w-full"
                :class="{
                  'text-primary dark:text-primary': method.active,
                }"
              >
                <UIcon :name="method.icon" class="mr-2 text-xl" />
                <span>{{ method.label }}</span>
              </div>
            </div>
            <component
              :is="method.component"
              v-if="method.active"
              v-motion-roll-visible-bottom
            />
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<style></style>
