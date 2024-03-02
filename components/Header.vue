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


const handleLogin = () => {
  navigateTo('/login')
}

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
  else navigateTo('/')
}

</script>

<template>
  <UHeader :links="links">
    <template #logo>
      {{ name }}
      <UBadge label="premium" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton @click="handleLogin" v-if="!user" label="Entrar" color="white" variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
      <UButton @click="handleLogout" v-else label="Sair" color="white" variant="ghost"
        trailing-icon="i-heroicons-arrow-left-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <NuxtLink @click="handleLogin" v-if="!user" label="Entrar" color="white" block class="mb-3">Entrar</NuxtLink>
      <NuxtLink @click="handleLogout" v-else label="Sair" color="white" block class="mb-3">Sair</NuxtLink>
    </template>
  </UHeader>
</template>
