<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const { isHelpSlideoverOpen } = useDashboard()
const { t } = useI18n()

const links = reactive([
  {
    id: 'home',
    label: t('dashboard.layout.links.home'),
    icon: 'i-heroicons-home',
    to: '/dashboard',
    tooltip: {
      text: t('dashboard.layout.links.home'),
      shortcuts: ['G', 'H']
    }
  },
  {
    id: 'inbox',
    label: t('dashboard.layout.links.inbox'),
    icon: 'i-heroicons-inbox',
    to: '/dashboard/inbox',
    badge: '4',
    tooltip: {
      text: t('dashboard.layout.links.inbox'),
      shortcuts: ['G', 'I']
    }
  },
  {
    id: 'orders',
    label: t('dashboard.layout.links.sales'),
    icon: 'iconoir:home-sale',
    to: '/dashboard/orders',
    tooltip: {
      text: t('dashboard.layout.links.users'),
      shortcuts: ['G', 'O']
    }
  },
  {
    id: 'users',
    label: t('dashboard.layout.links.members'),
    icon: 'i-heroicons-user-group',
    to: '/dashboard/users',
    tooltip: {
      text: t('dashboard.layout.links.users'),
      shortcuts: ['G', 'U']
    },
    children: [{
      label: t('dashboard.layout.links.general'),
      to: '/dashboard/users',
      exact: true
    },
    {
      label: t('dashboard.layout.links.leads'),
      to: '/dashboard/users/leads',
    },
    ],
  },
  {
    id: 'settings',
    label: t('dashboard.layout.links.settings'),
    to: '/dashboard/settings',
    icon: 'i-heroicons-cog-8-tooth',
    tooltip: {
      text: t('dashboard.layout.links.settings'),
      shortcuts: ['G', 'S']
    },
    children: [
      {
        label: t('dashboard.layout.links.general'),
        to: '/dashboard/settings',
        exact: true
      },
      {
        label: t('dashboard.layout.links.panel'),
        to: '/dashboard/settings/panel'
      },
      {
        label: t('dashboard.layout.links.services'),
        to: '/dashboard/settings/services'
      },
      {
        label: t('dashboard.layout.links.subscriptions'),
        to: '/dashboard/settings/subscriptions'
      },
      {
        label: t('dashboard.layout.links.users'),
        to: '/dashboard/settings/members'
      },
      {
        label: t('dashboard.layout.links.notifications'),
        to: '/dashboard/settings/notifications'
      }
    ],
  }
])

const footerLinks = [
  {
    label: t('dashboard.layout.links.footer.invite'),
    icon: 'i-heroicons-plus',
    to: '/dashboard/settings/members'
  },
  {
    label: t('dashboard.layout.links.footer.support'),
    icon: 'i-heroicons-question-mark-circle',
    click: () => isHelpSlideoverOpen.value = true
  }
]

const groups = [
  {
    key: 'links',
    label: t('dashboard.layout.links.footer.goto'),
    commands: links.map(link => ({ ...link, shortcuts: link.tooltip?.shortcuts }))
  },
  {
    key: 'support',
    label: t('dashboard.layout.links.footer.support'),
    commands: [
      {
        id: 'support',
        label: t('dashboard.layout.links.footer.support'),
        icon: 'i-heroicons-question-mark-circle',
        click: () => {
          window.open(`#`, '_blank')
        }
      }
    ]
  }
]

const defaultColors = ref(['green', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'].map(color => ({ label: color, chip: color, click: () => appConfig.ui.primary = color })))
const colors = computed(() => defaultColors.value.map(color => ({ ...color, active: appConfig.ui.primary === color.label })))
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="250" :resizable="{ min: 200, max: 300 }" collapsible>
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <PanelsDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>

        <template #header>
          <UDashboardSearchButton :label="t('dashboard.search')" />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <UDivider />

        <UDashboardSidebarLinks :links="[{ label: 'Colors', draggable: true, children: colors }]"
          @update:links="colors => defaultColors = colors" />

        <div class="flex-1" />

        <UDashboardSidebarLinks :links="footerLinks" />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>
