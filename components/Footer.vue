<script setup lang="ts">

const name = ref('Beleza Natural')

const links = [
  {
    label: 'Company',
    children: [
      {
        label: 'About'
      }
    ]
  }
]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Assinado!',
      description: 'Você se inscrever na nossa newsletter.'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup label="Se inscreve na nossa newsletter" :ui="{ container: 'mt-3' }">
              <UInput v-model="email" type="email" placeholder="Informe seu email"
                :ui="{ icon: { trailing: { pointer: '' } } }" required size="xl" autocomplete="off" class="max-w-sm">
                <template #trailing>
                  <UButton type="submit" size="xs" :label="loading ? 'Quase la..' : 'Inscrever'" :loading="loading" />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. {{ name }} Todos os direitos reservados.
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

    </template>
  </UFooter>
</template>
