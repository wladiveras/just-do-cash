<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Docs',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: '/releases'
}]
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-primary-50 dark:bg-primary-400 dark:bg-opacity-50 p-3"
    v-motion-pop-visible>
    <div class="flex items-center flex-shrink-0 text-white mr-5">
      <span class="font-semibold text-xl tracking-tight">
        <UIcon name="cryptocurrency-color:ncash" size="2rem" />
      </span>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow flex items-center">
        <span class="text-lg mr-2 border-l-[1px] border-gray-300 pl-2">Etapa 1:</span>
        <span class="text-lg font-semibold">Metodo de Pagamento</span>
      </div>
      <div>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  </nav>
</template>