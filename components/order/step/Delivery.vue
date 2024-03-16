<script lang="ts" setup>
import { object, string, type InferType, ValidationError } from "yup";

// Stores
const orderStore = useOrderStore();
const { customer, address, steps } = orderStore;

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

const nextStep = () => {
  orderStore.triggerStep(true);
};

const previousStep = () => {
  orderStore.prevStep();
};

// Schema Validation
const addressSchema = object({
  street: string().required("É obrigatório informar um logradouro"),
  number: string().required("É obrigatório informar um número"),
  neighborhood: string().required("É obrigatório informar um bairro"),
  city: string().required("É obrigatório informar uma cidade"),
  state: string().required("É obrigatório informar um estado"),
  //country: string().required("É obrigatório informar um país"),
  complement: string().required("É obrigatório informar um complemento"),
  zipcode: string().required("É obrigatório informar um CEP"),
});

// Handle Next Step from summary
const handleNextStep = async () => {
  if (steps.trigger === true) {
    try {
      await addressSchema.validate(address);
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
  <div>
    <UContainer>
      <UCard
        class="animate__animated animate__bounceIn"
        :ui="{
          wrapper:
            'p-0 m-0 m-0 border-s border-gray-200 dark:border-gray-800 space-y-2',
          padding: 'p-0 m-0',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-lg font-semibold">Dados de Entrega</h1>
              <span class="text-sm text-gray-600">
                <b>{{ customer.name }}</b> Informe os dados para a entrega do
                seu produto
              </span>
            </div>
            <div>
              <UButton
                icon="i-heroicons-arrow-left"
                size="sm"
                color="primary"
                variant="link"
                label="Button"
                :trailing="false"
                @click="previousStep"
              >
                Voltar
              </UButton>
            </div>
          </div>
        </template>
        <div>
          <div class="border-b pt-5 pb-5 dark:border-gray-800">
            <div class="w-full flex flex-wrap sm:flex-nowrap">
              <div class="text-xl flex items-center block w-full">
                <UForm
                  :schema="addressSchema"
                  :state="address"
                  class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem]"
                >
                  <UFormGroup label="Rua" name="street">
                    <UInput v-model="address.street" />
                  </UFormGroup>

                  <UFormGroup label="Numero" name="number">
                    <UInput v-model="address.number" />
                  </UFormGroup>

                  <UFormGroup label="Bairro" name="neighborhood">
                    <UInput v-model="address.neighborhood" />
                  </UFormGroup>
                  <UFormGroup label="Cidade" name="city">
                    <UInput v-model="address.city" />
                  </UFormGroup>
                  <UFormGroup label="Estado" name="state">
                    <UInput v-model="address.state" />
                  </UFormGroup>

                  <UFormGroup label="Complemento" name="complement">
                    <UInput v-model="address.complement" />
                  </UFormGroup>
                  <UFormGroup label="CEP" name="zipcode">
                    <UInput v-model="address.zipcode" />
                  </UFormGroup>
                </UForm>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<style></style>
