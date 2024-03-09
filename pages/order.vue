<script lang="ts" setup>

definePageMeta({
  layout: 'purchase'
})


// Payment Methods
const paymentMethods = reactive([
  {
    label: 'Cartão de Credito',
    active: true,
    icon: 'i-heroicons-credit-card',
    component: resolveComponent('OrderMethodCard')
  }, {
    label: 'Paypal',
    active: false,
    icon: 'mingcute:paypal-fill',
    component: resolveComponent('OrderMethodPaypal')
  }
])

const changeSelectedMethod = (method: any) => {
  paymentMethods.forEach((m) => {
    m.active = false
  })
  method.active = true
}


</script>

<template>
  <div>
    <ULandingSection>
      <div class="flex flex-col md:flex-row">
        <ULandingSection>
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <div>
                  <h1 class="text-lg font-semibold">
                    Metodo de Pagamento
                  </h1>
                  <span class="text-sm text-gray-600">Selecione um metodo de pagamento</span>
                </div>
                <div>
                  <UButton icon="i-heroicons-arrow-left" size="sm" color="primary" variant="link" label="Button"
                    :trailing="false" to="/">
                    Voltar
                  </UButton>
                </div>
              </div>
            </template>
            <div>
              <div v-for="method in paymentMethods" :key="method.label" v-auto-animate
                class="payment-method border-b pt-5 pb-5">
                <div class="w-full flex flex-wrap sm:flex-nowrap" @click="changeSelectedMethod(method)">
                  <h2 class="font-bold text-xl flex items-center">
                    <UIcon :name="method.icon" class="mr-2 text-xl" />
                    <span>{{ method.label }}</span>
                  </h2>
                </div>
                <component :is="method.component" v-if="method.active" v-motion-roll-visible-bottom />
              </div>
            </div>
          </UCard>
        </ULandingSection>

        <ULandingSection v-motion-roll-visible-top>
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <div>
                  <h1 class="text-lg font-semibold">
                    Resumo do Pedido
                  </h1>
                  <span class="text-sm text-gray-600">Veja os detalhes do seu pedido.</span>
                </div>

              </div>
            </template>
            <p>Um texto apresentavel do produto e todos os passos concluidos</p>


            <template #footer>
              <UButton class="m-auto" color="primary" variant="solid" to="purchase">
                finalizar compra
              </UButton>
            </template>


          </UCard>
        </ULandingSection>
      </div>
    </ULandingSection>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .flex-col.md\:flex-row {
    flex-direction: row;
  }
}
</style>
