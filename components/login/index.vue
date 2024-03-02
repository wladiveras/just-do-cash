<template>
  <div>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
      <UAuthForm :fields="fields" :validate="validate" :providers="providers" title="Bem-vindo de volta" align="top"
        icon="i-heroicons-lock-closed" :ui="{ base: 'text-center', footer: 'text-center' }"
        :submit-button="{ trailingIcon: 'i-heroicons-arrow-right-20-solid' }" @submit="onSubmit">
        <template #description>
          Não tem uma conta? <NuxtLink to="/signup" class="text-primary font-medium">Cadastre-se</NuxtLink>.
        </template>

        <template #password-hint>
          <NuxtLink to="/" class="text-primary font-medium">Esqueceu a senha?</NuxtLink>
        </template>

        <template #footer>
          Ao fazer login, você concorda com nossos <NuxtLink to="/" class="text-primary font-medium">Termos de Serviço
          </NuxtLink>.
          <UButton class="mt-3" icon="i-mdi-github" block label="Google" variant="black"
            @click="auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })" />
        </template>
      </UAuthForm>
    </UCard>
  </div>
</template>

<script lang="ts" setup>

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const fields = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Digite seu email'
}, {
  name: 'password',
  label: 'Senha',
  type: 'password',
  placeholder: 'Digite sua senha'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'É necessário informar um email.' })
  if (!state.password) errors.push({ path: 'password', message: 'É necessário informar uma senha.' })
  return errors
}

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

const providers = [{
  label: 'Continue com Google',
  icon: 'i-simple-icons-google',
  color: 'white' as const,
  click: async () => {
    const { error } = await auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })
    if (error) console.log(error)
  }
}]

async function onSubmit(data: any) {

  const { error } = await auth.signInWithOtp({
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