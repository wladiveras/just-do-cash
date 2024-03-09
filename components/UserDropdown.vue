<script setup lang="ts">
const { isHelpSlideoverOpen } = useDashboard();
const { isDashboardSearchModalOpen } = useUIState();
const { metaSymbol } = useShortcuts();
const { t } = useI18n();

const user = {
  email: "wladi.com.br",
  user_metadata: {
    full_name: "Wladi",
    avatar_url: "https://avatars.githubusercontent.com/u/1013389?v=4",
  },
};

const items = computed(() => [
  [
    {
      slot: "account",
      label: "",
      disabled: true,
    },
  ],
  [
    {
      label: t("dashboard.layout.links.settings"),
      icon: "i-heroicons-cog-8-tooth",
      to: "/dashboard/settings",
    },
    {
      label: t("dashboard.layout.links.commands"),
      icon: "i-heroicons-command-line",
      shortcuts: [metaSymbol.value, "K"],
      click: () => {
        isDashboardSearchModalOpen.value = true;
      },
    },
    {
      label: t("dashboard.layout.links.footer.support"),
      icon: "i-heroicons-question-mark-circle",
      shortcuts: ["?"],
      click: () => (isHelpSlideoverOpen.value = true),
    },
  ],
  [
    {
      label: "Assinaturas",
      icon: "i-heroicons-credit-card",
      to: "#",
    },
  ],
  [
    {
      label: t("header.signout"),
      icon: "i-heroicons-arrow-left-on-rectangle",
    },
  ],
]);
</script>

<template>
  <UDropdown
    mode="hover"
    :items="items"
    :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
    :popper="{ strategy: 'absolute', placement: 'top' }"
    class="w-full"
  >
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full"
        :label="user.user_metadata?.full_name"
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      >
        <template #leading>
          <UAvatar :src="user.user_metadata?.avatar_url ?? ''" size="2xs" />
        </template>

        <template #trailing>
          <UIcon name="i-heroicons-ellipsis-vertical" class="w-5 h-5 ml-auto" />
        </template>
      </UButton>
    </template>

    <template #account>
      <div class="text-left">
        <p>
          {{ t("dashboard.layout.links.footer.signed_by") }}
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ user.email }}
        </p>
      </div>
    </template>
  </UDropdown>
</template>
