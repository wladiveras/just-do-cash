<script setup lang="ts">
import { sub } from 'date-fns'
import type { Period, Range } from '~/types'

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useSeoMeta({
  title: 'Dashboard'
})

const { isNotificationsSlideoverOpen } = useDashboard()

const items = [[{
  label: t('dashboard.layout.links.home'),
  icon: 'i-heroicons-paper-airplane',
  to: '/dashboard/inbox'
}, {
  label: t('dashboard.layout.links.users'),
  icon: 'i-heroicons-user-plus',
  to: '/dashboard/users'
}]]

const range = ref<Range>({ start: sub(new Date(), { days: 14 }), end: new Date() })
const period = ref<Period>('daily')
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar :title="t('dashboard.title')">
        <template #right>
          <ToggleLocation size="sm" />
          <UColorModeButton size="sm" />
          <UTooltip :text="t('dashboard.notification')" :shortcuts="['N']">
            <UButton color="gray" variant="ghost" square @click="isNotificationsSlideoverOpen = true">
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton icon="i-heroicons-plus" size="md" class="ml-1.5 rounded-full" />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>

        <template #left>
          <!-- ~/components/home/HomeDateRangePicker.vue -->
          <HomeDateRangePicker v-model="range" class="-ml-2.5" />

          <!-- ~/components/home/HomePeriodSelect.vue -->
          <HomePeriodSelect v-model="period" :range="range" />
        </template>
      </UDashboardToolbar>

      <UDashboardPanelContent>
        <!-- ~/components/home/HomeChart.vue -->
        <HomeChart :period="period" :range="range" />

        <div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">
          <!-- ~/components/home/HomeSales.vue -->
          <HomeSales />
          <!-- ~/components/home/HomeCountries.vue -->
          <HomeServices />
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
