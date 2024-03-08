<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  cardholder: string().required('Nome do titular do cartão é obrigatório'),
  cardnumber: string().required('Número do cartão é obrigatório').test('credit-card', 'Número de cartão inválido', (value) => {

    const cardNumber = value.replace(/\D/g, '');

    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }),
  expire_month: string().required('Mês de expiração é obrigatório').matches(/^(0[1-9]|1[0-2])$/, 'Formato de mês inválido'),
  expire_year: string().required('Ano de expiração é obrigatório').matches(/^(20)\d{2}$/, 'Formato de ano inválido'),
  cvv: string().required('CVV é obrigatório').length(3, 'CVV deve ter 3 dígitos'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  cardholder: '',
  cardnumber: '',
  expire_month: '',
  expire_year: '',
  cvv: '',
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
        @submit="onSubmit">

        <UFormGroup label="Nome no Cartão" name="cardholder">
          <UInput v-model="state.cardholder" />
        </UFormGroup>

        <UFormGroup label="Número do Cartão" name="cardnumber">
          <UInput v-model="state.cardnumber" />
        </UFormGroup>


        <div class="grid grid-cols-3 gap-4">
          <UFormGroup label="Exp. Mês">
            <USelect icon="quill:snooze-month" size="sm" :options="months" v-model="state.expire_month"
              placeholder="Mês..." />
          </UFormGroup>
          <UFormGroup label="Exp. Ano">
            <USelect icon="quill:snooze-month" size="sm" :options="years" v-model="state.expire_year"
              placeholder="Ano..." />
          </UFormGroup>
          <UFormGroup label="CVV">
            <UInput icon="iconoir:card-lock" size="sm" v-model="state.cvv" placeholder="ex: 123" />
          </UFormGroup>
        </div>
      </UForm>

      <div class="space-y-4 flex flex-col justify-center items-center flex-wrap">
        <Card class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          :cardholder="state.cardholder" :cardnumber="state.cardnumber" :expire_month="state.expire_month"
          :expire_year="state.expire_year" :cvv="state.cvv" />
      </div>
    </div>
  </div>
</template>

<style></style>