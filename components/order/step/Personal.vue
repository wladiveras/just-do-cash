<script lang="ts" setup>
import { object, string, type InferType, ValidationError } from "yup";

// Stores
const orderStore = useOrderStore();
const { isLoading, customer, steps } = orderStore;

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

const PersonalStep = ref(false);

const nextStep = () => {
  orderStore.triggerStep(true);
};

const triggerPersonalStep = () => {
  PersonalStep.value = !PersonalStep.value;
};

// Schema Validation
const personalSchema = object({
  email: string()
    .email("Informe um email válido")
    .required("E obrigátorio informar um email"),
  name: string().required("É obrigatório informar um nome"),
  phone: string()
    .matches(
      /^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,9}[-\s]?\d{1,9}$/,
      "Informe um número de telefone válido",
    )
    .required("É obrigatório informar um telefone"),
  document: string()
    .matches(
      /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/,
      "Informe um CPF ou CNPJ válido",
    )
    .required("É obrigatório informar um CPF ou CNPJ"),
});

// Handle Next Step from summary
const handleNextStep = async () => {
  if (steps.trigger === true) {
    try {
      await personalSchema.validate(customer);
    } catch (error) {
      if (error instanceof ValidationError) {
        toast.add({
          title: error.errors[0],
          icon: "material-symbols:error-outline",
        });
      }
    }

    orderStore.triggerStep(false);
  }
};
</script>

<template>
  <UContainer>
    <UForm
      :schema="personalSchema"
      :state="customer"
      class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem]"
    >
      <div v-show="!PersonalStep" class="animate__animated animate__backInUp">
        <div class="flex items-center justify-center flex-wrap">
          <div class="w-full text-center mb-10 mt-10">
            <UIcon
              name="streamline:subscription-cashflow"
              class="w-auto h-16"
            />
          </div>

          <div class="text-center">
            <p class="text-2xl">Vamos começar com seu email</p>
            <p class="text-lg mb-10">Informe seu email para continuar</p>
          </div>
        </div>

        <UFormGroup name="email">
          <UInput
            variant="outline"
            icon="line-md:email-opened-twotone-alt"
            v-model="customer.email"
            placeholder="Ex: email@justdo.cash"
            maxlength="30"
            size="xl"
          />
        </UFormGroup>
        <UButton
          class="m-auto mx-auto w-full text-center mt-10"
          icon="line-md:arrow-small-right"
          color="primary"
          variant="solid"
          size="md"
          block
          @click="triggerPersonalStep"
          :loading="steps.trigger"
          :disabled="steps.trigger"
        >
          Continuar
        </UButton>
      </div>
      <div v-if="PersonalStep" class="animate__animated animate__bounceIn">
        <div class="flex items-center justify-center flex-wrap">
          <div class="w-full text-center mb-10 mt-10">
            <UIcon
              name="streamline:subscription-cashflow"
              class="w-auto h-16"
            />
          </div>

          <div class="text-center">
            <UButton
              icon="i-heroicons-arrow-left"
              size="sm"
              color="primary"
              variant="link"
              label="Button"
              :trailing="false"
              @click="triggerPersonalStep"
            >
              Mudar Email
            </UButton>
            <p class="text-2xl">Agora informe seu dados pessoais</p>
            <p class="text-lg mb-10">Informe os dados pessoas para continuar</p>
          </div>
        </div>
        <div>
          <UFormGroup name="name" label="Nome" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:account"
              v-model="customer.name"
              placeholder="Nome Completo"
              maxlength="30"
              size="xl"
            />
          </UFormGroup>
          <UFormGroup name="document" label="Documento" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:document-add"
              v-model="customer.document"
              placeholder="CPF ou CNPJ"
              v-maska
              data-maska="[
                '###.###.###-##',
                '##.###.###/####-##'
              ]"
              maxlength="30"
              size="xl"
            />
          </UFormGroup>
          <UFormGroup name="phone" label="Celular" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:phone-add"
              v-model="customer.phone"
              v-maska
              data-maska="['+55 (##) #####-####']"
              placeholder="(xx) xxxxx-xxxx"
              maxlength="30"
              size="xl"
            />
          </UFormGroup>
          <UFormGroup name="next">
            <UButton
              class="m-auto mx-auto w-full text-center mt-10"
              icon="line-md:arrow-small-right"
              color="primary"
              variant="solid"
              size="md"
              block
              @click="nextStep"
              :loading="steps.trigger"
              :disabled="steps.trigger"
            >
              Continuar
            </UButton>
          </UFormGroup>
        </div>
      </div>
    </UForm>
  </UContainer>
</template>

<style></style>
