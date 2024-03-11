<script lang="ts" setup>
const links = [
  {
    step: 1,
    label: "Dados Pessoais",
    icon: "fa6-solid:address-card",
    to: "/",
  },
  {
    step: 2,
    label: "Dados de Entrega",
    icon: "entypo:address",
  },
  {
    step: 3,
    label: "Pagamento",
    icon: "fluent-mdl2:payment-card",
  },
];

const isOpen = ref(false);
const currentStep = links.filter((link) => link.step === 3);
</script>

<template>
  <div class="flex justify-center">
    <UContainer class="flex flex-col items-center">
      <UBreadcrumb
        v-auto-animate
        :links="links"
        :ui="{ ol: 'gap-x-3', li: 'gap-x-3' }"
        class="hidden sm:block"
      >
        <template #divider>
          <UIcon name="line-md:chevron-small-right" size="2rem" />
        </template>
      </UBreadcrumb>

      <UContainer class="block md:hidden cursor-pointer" @click="isOpen = true">
        <UIcon :name="currentStep[0].icon" size="1.5rem" class="mr-[0.4rem]" />
        <span>{{ currentStep[0].label }}</span>
      </UContainer>
    </UContainer>

    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <span class="font-bold text-base">
            <UIcon name="bi:bar-chart-steps" /> Etapas
          </span>
        </template>

        <UVerticalNavigation
          :ui="{
            wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
            base: 'border-s -ms-px leading-6 before:hidden',
            padding: 'p-0 ps-4',
          }"
          :links="links"
        />

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </USlideover>
  </div>
</template>

<style></style>
