<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  name: string().email('Invalid email').required('Required'),
  number: string().email('Invalid email').required('Required'),
  expire_month: string().email('Invalid email').required('Required'),
  expire_year: string().email('Invalid email').required('Required'),
  cvv: string().email('Invalid cvv').required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  number: undefined,
  expire_month: undefined,
  expire_year: undefined,
  cvv: undefined,
})


const months = [
  { value: '01', label: '01' },
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
]

const years = [
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
  { value: '2026', label: '2026' },
  { value: '2027', label: '2027' },
  { value: '2028', label: '2028' },
  { value: '2029', label: '2029' },
  { value: '2030', label: '2030' },
  { value: '2031', label: '2031' },
  { value: '2032', label: '2032' },
  { value: '2033', label: '2033' },
  { value: '2034', label: '2034' },
  { value: '2035', label: '2035' },
  { value: '2036', label: '2036' },
  { value: '2037', label: '2037' },
  { value: '2038', label: '2038' },
  { value: '2039', label: '2039' },
  { value: '2040', label: '2040' },
  { value: '2041', label: '2041' },
  { value: '2042', label: '2042' },
  { value: '2043', label: '2043' },
  { value: '2044', label: '2044' },
  { value: '2045', label: '2045' },
  { value: '2046', label: '2046' },
  { value: '2047', label: '2047' },
  { value: '2048', label: '2048' },
  { value: '2049', label: '2049' },
  { value: '2050', label: '2050' },
]


async function onSubmit(event: FormSubmitEvent<Schema>) {
  // TODO: add states to pinia
  console.log(event.data)
}
</script>

<template>
  <div class="w-full flex flex-col gap-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <UForm :schema="schema" :state="state" class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem]"
        @submit="onSubmit" v-auto-animate>

        <UFormGroup label="Nome no Cartão" name="name" v-auto-animate>
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Número do Cartão" name="number" v-auto-animate>
          <UInput v-model="state.number" />
        </UFormGroup>


        <div class="grid grid-cols-3 gap-4" v-auto-animate>
          <UFormGroup label="Exp. Mês">
            <USelect icon="quill:snooze-month" size="sm" :options="months" placeholder="Mês..." />
          </UFormGroup>
          <UFormGroup label="Exp. Ano">
            <USelect icon="quill:snooze-month" size="sm" :options="years" placeholder="Ano..." />
          </UFormGroup>
          <UFormGroup label="CVV">
            <UInput icon="iconoir:card-lock" size="sm" :trailing="false" placeholder="ex: 123" />
          </UFormGroup>
        </div>
      </UForm>

      <div class="space-y-4 flex flex-col justify-center items-center flex-wrap">
        <Card />
      </div>
    </div>
  </div>
</template>

<style></style>