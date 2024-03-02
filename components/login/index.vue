<template>
  <div>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
      <UAuthForm :fields="fields" :validate="validate" :providers="providers" title="Bem-vindo de volta" align="top"
        icon="i-heroicons-lock-closed" :ui="{ base: 'text-center', footer: 'text-center' }"
        :submit-button="{ trailingIcon: 'i-heroicons-arrow-right-20-solid' }" @submit="onSubmit">
        <template #description>
          Comece com seu email
        </template>

        <template #password-hint>

        </template>

        <template #footer>
          Ao fazer login, você concorda com nossos <NuxtLink to="/" class="text-primary font-medium">Termos de Serviço
          </NuxtLink>.
        </template>
      </UAuthForm>
    </UCard>
  </div>
</template>

<script lang="ts" setup>

const supabase = useSupabaseClient()
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })

const fields = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Digite seu email'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'É necessário informar um email.' })
  return errors
}

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

const providers = [{
  label: 'Continue com Google',
  icon: 'i-simple-icons-google',
  color: 'white' as const,
  click: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    if (error) console.log(error)
  }
}]

async function onSubmit(data: any) {

  const { error } = await supabase.auth.signInWithOtp({
    email: data.email,
    options: {
      emailRedirectTo: redirectTo,
      shouldCreateUser: true,
    }
  })
  if (error) console.log(error)
}

</script>

<style></style>