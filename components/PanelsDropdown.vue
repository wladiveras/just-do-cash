<script setup lang="ts">
const teams = [
  {
    label: "Residencia em Portugal",
    avatar: {
      src: "https://i.imgur.com/MAxzZyE.png",
    },
    click: () => {
      team.value = teams[0];
    },
  },
  {
    label: "Beleza Natural",
    avatar: {
      src: "https://i.imgur.com/5ALoQn1.png",
    },
    click: () => {
      team.value = teams[1];
    },
  },
];

const actions = [
  {
    label: "Criar um painel",
    icon: "i-heroicons-plus-circle",
  },
  {
    label: "Gerenciar Paineis",
    icon: "i-heroicons-cog-8-tooth",
  },
];

const team = ref(teams[0]);
</script>

<template>
  <UDropdown
    v-slot="{ open }"
    mode="hover"
    :items="[teams, actions]"
    class="w-full"
    :ui="{ width: 'w-full' }"
    :popper="{ strategy: 'absolute' }"
  >
    <UButton
      color="gray"
      variant="ghost"
      :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      class="w-full"
    >
      <UAvatar :src="team.avatar.src" size="2xs" />

      <span class="truncate text-gray-900 dark:text-white font-semibold">{{
        team.label
      }}</span>
    </UButton>
  </UDropdown>
</template>
