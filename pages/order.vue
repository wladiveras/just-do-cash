<script lang="ts" setup>

definePageMeta({
  layout: 'purchase'
})

// TODO: Move to store when create
const isLoading = ref(true)

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
  <div class="w-full bg-white/75 dark:bg-white/5 backdrop-blur">

    <ULandingSection class="w-full flex flex-col gap-y-4">
      <div class="flex flex-col md:flex-row">
        <ULandingSection class=" space-y-4 flex flex-col justify-top">
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <div>
                  <h1 class="text-lg font-semibold">Metodo de Pagamento</h1>
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

              <div class="payment-method border-b pt-5 pb-5" v-for="method in paymentMethods" v-auto-animate>
                <div class="w-full flex" @click="changeSelectedMethod(method)">

                  <h2 class="font-bold text-xl flex items-center">
                    <UIcon :name="method.icon" class="mr-2 text-xl" />
                    <span>{{ method.label }}</span>
                  </h2>
                </div>

                <component v-if="method.active" :is="method.component" />
              </div>

            </div>
          </UCard>
        </ULandingSection>

        <ULandingSection class="space-y-4 flex flex-col justify-top items-center">
          <UCard>
            <p>Um texto apresentavel do produto e todos os passos concluidos</p>
            <UButton class="m-auto" color="primary" variant="solid" to="purchase">
              finalizar compra
            </UButton>
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

<style></style>