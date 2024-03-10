<script setup lang="ts">
const { t } = useI18n();

const services = [
  {
    label: "Ass. Premium",
    value: 31,
    color: "red",
  },
  {
    label: "Ass. Plus",
    value: 21,
    color: "orange",
  },
  {
    label: "Visto Tech",
    value: 15,
    color: "yellow",
  },
  {
    label: "Assistência",
    value: 10,
    color: "green",
  },
  {
    label: "Visto Tech",
    value: 6,
    color: "teal",
  },
  {
    label: "Ass. Basica",
    value: 1,
    color: "blue",
  },
  {
    label: "Visto D7",
    value: 1,
    color: "indigo",
  },
  {
    label: "Visto D2",
    value: 1,
    color: "pink",
  },
];
</script>

<template>
  <UDashboardCard
    :title="t('dashboard.services.title')"
    :description="
      t('dashboard.services.description', { subscriptions: 29, services: 4 })
    "
    icon="i-heroicons-globe-alt-20-solid"
  >
    <div class="space-y-2">
      <UMeter
        v-for="(service, index) in services"
        :key="index"
        :value="service.value"
        :label="service.label"
        :color="service.color"
        size="lg"
        class="flex-row-reverse items-center"
        :ui="{
          label: { base: 'flex-shrink-0 w-24' },
          indicator: { container: '!w-auto' },
          meter: { base: 'flex-1' },
        }"
        indicator
      />
    </div>
  </UDashboardCard>
</template>
