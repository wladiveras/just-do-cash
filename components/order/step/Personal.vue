<script lang="ts" setup>
import { object, string, type InferType, ValidationError } from "yup";

definePageMeta({
  scrollToTop: true,
});

// Stores
const orderStore = useOrderStore();
const { customer, steps } = orderStore;

// Composables
const toast = useToast();

// Trigger to next step from summary
watch(
  () => steps.trigger,
  (value) => {
    if (value === true) {
      handleTrigger();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
);

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
const handleTrigger = async () => {
  if (steps.trigger === true) {
    try {
      await personalSchema.validate(customer);
      orderStore.nextStep();
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
      class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem] max-w-[800px]"
    >
      <div class="animate__animated animate__backInRight">
        <OrderDetails
          title="Dados Pessoais"
          description="Informe seu sdados pessoais, dessa forma, conseguiremos
              identificar você para garantir que o produto chegue em suas mãos
              da maneira mais segura e rápida possível."
        />
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
          <UFormGroup name="email" label="Email" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:email-opened-twotone-alt"
              v-model="customer.email"
              placeholder="Ex: email@justdo.cash"
              maxlength="30"
              size="xl"
            />
          </UFormGroup>
          <div class="flex flex-wrap justify-center w-full">
            <div class="w-full md:flex-1 md:mr-5">
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
            </div>
            <div class="w-full md:flex-1 md:ml-5">
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
            </div>
          </div>
        </div>
      </div>
    </UForm>
  </UContainer>
</template>

<style></style>
