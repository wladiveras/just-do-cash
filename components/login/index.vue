<template>
  <div>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
      <UAuthForm :fields="fields" :validate="validate" :providers="providers" :title="t('login.welcome')" align="top"
        icon="i-heroicons-lock-closed" :ui="{ base: 'text-center', footer: 'text-center' }"
        :submit-button="{ trailingIcon: 'i-heroicons-arrow-right-20-solid' }" @submit="onSubmit">
        <template #description>
          {{ t('login.starts_with_email') }}
        </template>

        <template #password-hint>

        </template>

        <template #footer>
          <span>
            {{ t('login.terms.text_1') }} <a to="" class="text-primary font-medium"> {{ t('login.terms.text_2') }}
            </a>.</span>
        </template>
      </UAuthForm>


    </UCard>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()
const { t } = useI18n()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })

const fields = [{
  name: 'email',
  type: 'text',
  label: t('login.email.label'),
  placeholder: t('login.email.placeholder')
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: t('login.email.error') })
  return errors
}

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

const providers = [{
  label: t('login.signin_with_google'),
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

  toast.add({ icon: 'i-heroicons-check-badge', color: 'primary', title: 'Link mágico enviado', description: 'Verifique seu endereço de email para continuar.', timeout: 60000 })

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