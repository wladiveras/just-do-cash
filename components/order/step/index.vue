<script lang="ts" setup>
const orderStore = useOrderStore();
const { steps } = orderStore;

// Actions
const nextStep = () => {
  orderStore.triggerStep(true);
};

const links = [
  {
    step: 1,
    label: "Dados Pessoais",
    icon: "fa6-solid:address-card",
    active: false,
  },
  {
    step: 2,
    label: "Dados de Entrega",
    icon: "entypo:address",
    ui: { color: "primary" },
    active: true,
  },
  {
    step: 3,
    label: "Pagamento",
    icon: "fluent-mdl2:payment-card",
    active: false,
  },
];

const isOpen = ref(false);

const changeStep = (step: number) => {
  console.log(step);
};
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
          @click="changeStep"
        />

        <template #footer> x </template>
      </UCard>
    </USlideover>
  </div>
</template>

<style></style>
