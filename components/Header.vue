<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const name = ref('Beleza Natural')

const links = computed(() => [{
  label: 'Serviços',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Planos',
  to: '#pricing',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('pricing') && !activeHeadings.value.includes('testimonials')
}, {
  label: 'Recomendações',
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('testimonials')
}, {
  label: 'FAQ',
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: activeHeadings.value.includes('faq')
}])


nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)

const handleLogin = () => {
  navigateTo('/login')
}

const handleLogout = async () => {

  await supabase.auth.signOut()
    .catch((error) => {
      return console.log(error)
    })
    .then((data) => {

    })
    .finally(() => {

    })
}

</script>

<template>
  <UHeader :links="links">
    <template #logo>
      {{ name }}
      <UBadge label="premium" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <ToggleLocation size="sm" />
      <UColorModeButton size="sm" />
      {{ $t('welcome') }}
      <div v-if="!user">
        <UButton @click="handleLogin" :label="loading ? 'Carregando ...' : 'Entrar'" color="white" :disabled="loading"
          variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
      </div>

      <div v-else class="flex">
        <UButton to="dashboard" label="Dashboard" color="white" :disabled="loading" variant="ghost"
          trailing-icon="mdi:view-dashboard-edit" class="hidden lg:flex" />

        <UButton @click="handleLogout" :label="loading ? 'Carregando ...' : 'Sair'" color="white" :disabled="loading"
          variant="ghost" trailing-icon="i-heroicons-arrow-left-20-solid" class="hidden lg:flex" />
      </div>



    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton @click="handleLogin" v-if="!user" label="Entrar" :disabled="loading" color="white" block class="mb-3">
        {{ loading ? 'Carregando ...' : 'Entrar' }}
      </UButton>

      <UButton @click="handleLogout" v-else label="Sair" color="white" :disabled="loading" block class="mb-3">
        {{ loading ? 'Carregando ...' : 'Sair' }}
      </UButton>
    </template>
  </UHeader>
</template>
