<script lang="ts" setup>
import { object, string, type InferType, ValidationError } from "yup";

// Stores
const orderStore = useOrderStore();
const { checkout, steps } = orderStore;

// Composables
const toast = useToast();

// Trigger to next step from summary
watch(
  () => steps.trigger,
  (value) => {
    if (value === true) {
      handleNextStep();
    }
  },
);

onMounted(() => {
  checkout.method = "paypal";
});

// Schema Validation
const cardSchema = object({
  holderName: string().required("Nome do titular do cartão é obrigatório"),
  number: string()
    .min(16, "Minimo de 16 dígitos")
    .max(19, "Maximo de 19 dígitos")
    .required("Número do cartão é obrigatório")
    .test("credit-card", "Número de cartão inválido", (value) => {
      const cardNumber = value.replace(/\D/g, "");

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
  expireMonth: string()
    .required("Mês de expiração é obrigatório")
    .matches(/^(0[1-9]|1[0-2])$/, "Formato de mês inválido"),
  expireYear: string()
    .required("Ano de expiração é obrigatório")
    .matches(/^(20)\d{2}$/, "Formato de ano inválido"),
  cvv: string()
    .required("CVV é obrigatório")
    .length(3, "CVV deve ter 3 dígitos"),
});

// Gen type to from schema
type TCardSchema = InferType<typeof cardSchema>;

const holderInputMaskOptions = {
  tokens: {
    A: {
      pattern: /[A-Z]/,
      multiple: true,
      useMax: 10,
      transform: (chr: string) => chr.toUpperCase(),
    },
  },
};

// Handle Next Step from summary
const handleNextStep = async () => {
  if (steps.trigger === true) {
    try {
      await cardSchema.validate(checkout.card);
    } catch (error) {
      if (error instanceof ValidationError) {
        toast.add({
          title: error.errors[0],
          icon: "material-symbols:error-outline",
        });
      }
    }
    orderStore.TriggerStep(false);
  }
};
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <ClientOnly>
        <UForm
          :schema="cardSchema"
          :state="checkout.card"
          class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem]"
        >
          <UFormGroup label="Nome no Cartão" name="holderName">
            <UInput
              v-maska:[holderInputMaskOptions]
              data-maska="A A A"
              v-model="checkout.card.holderName"
              maxlength="30"
            />
          </UFormGroup>

          <UFormGroup label="Número do Cartão" name="number">
            <UInput
              v-maska
              data-maska="#### #### #### ####"
              v-model="checkout.card.number"
              maxlength="30"
            />
          </UFormGroup>

          <div class="grid grid-cols-3 gap-2">
            <UFormGroup label="Exp. Mês" name="expireMonth">
              <USelect
                v-model="checkout.card.expireMonth"
                icon="quill:snooze-month"
                size="sm"
                :options="months"
                placeholder="Mês..."
              />
            </UFormGroup>
            <UFormGroup label="Exp. Ano" name="expireYear">
              <USelect
                v-model="checkout.card.expireYear"
                icon="quill:snooze-month"
                size="sm"
                :options="years"
                placeholder="Ano..."
              />
            </UFormGroup>
            <UFormGroup label="CVV" name="cvv">
              <UInput
                v-model="checkout.card.cvv"
                icon="iconoir:card-lock"
                size="sm"
                v-maska
                data-maska="####"
                placeholder="ex: 123"
              />
            </UFormGroup>
          </div>
        </UForm>
      </ClientOnly>
      <div
        class="space-y-4 flex flex-col justify-center items-center flex-wrap"
      >
        <Card
          v-motion-fade-visible
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          :cardholder="checkout.card.holderName"
          :cardnumber="checkout.card.number"
          :expire_month="checkout.card.expireMonth"
          :expire_year="checkout.card.expireYear"
          :cvv="checkout.card.cvv"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
