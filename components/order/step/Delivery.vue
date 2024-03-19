<script lang="ts" setup>
import { object, string, type InferType, ValidationError } from "yup";

// Stores
const orderStore = useOrderStore();
const { address, steps } = orderStore;

// Composables
const toast = useToast();
const { isMobile } = useDevice();

// Trigger to next step from summary
watch(
  () => steps.trigger,
  (value) => {
    if (value === true) {
      handleTrigger();
    }
  },
);

// Scroll to top
const mainContainer = <HTMLElement | null>null;

onMounted(() => {
  mainContainer?.scrollIntoView({ behavior: "smooth" });
});

// Schema Validation
const addressSchema = object({
  street: string().required("É obrigatório informar um logradouro"),
  number: string().required("É obrigatório informar um número"),
  neighborhood: string().required("É obrigatório informar um bairro"),
  city: string().required("É obrigatório informar uma cidade"),
  state: string().required("É obrigatório informar um estado"),
  country: string().required("É obrigatório informar um país"),
  zipcode: string().required("É obrigatório informar um CEP"),
});

// Handle Next Step from summary
const handleTrigger = async () => {
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
  <UContainer v-ref="mainContainer" class="mb-[7rem]">
    <UForm
      :schema="addressSchema"
      :state="address"
      class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem] max-w-[800px]"
    >
      <div class="animate__animated animate__bounceIn">
        <div class="flex items-center justify-center flex-wrap">
          <div class="w-full text-center mb-10 mt-10">
            <UIcon
              name="streamline:subscription-cashflow"
              class="w-auto h-16"
            />
          </div>

          <div class="text-center">
            <p class="text-2xl">Endereço de Entrega</p>
            <p class="text-sm mb-10 text-gray-500 dark:text-gray-400">
              Agora, informe o endereço de entrega, é nessa etapa que cuidamos
              para que o seu produto chegue até você com toda segurança e
              agilidade.
            </p>
          </div>
        </div>
        <div>
          <UFormGroup label="CEP" name="zipcode" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:phone-add"
              v-model="address.zipcode"
              size="xl"
              maxlength="30"
              placeholder="Informe o CEP para carregar o endereço"
            />
          </UFormGroup>
          <UFormGroup label="Rua/Logradouro" name="street" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:phone-add"
              v-model="address.street"
              size="xl"
              maxlength="30"
            />
          </UFormGroup>
          <div class="flex flex-wrap justify-center w-full">
            <div class="w-full md:flex-1 md:mr-5">
              <UFormGroup label="Número" name="number" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:phone-add"
                  v-model="address.number"
                  size="xl"
                  maxlength="30"
                />
              </UFormGroup>
            </div>
            <div class="w-full md:flex-1 md:ml-5">
              <UFormGroup label="Bairro" name="neighborhood" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:phone-add"
                  v-model="address.neighborhood"
                  size="xl"
                  maxlength="30"
                />
              </UFormGroup>
            </div>
          </div>

          <div class="flex flex-wrap justify-center w-full">
            <div class="w-full md:flex-1 md:mr-5">
              <UFormGroup label="Cidade" name="city" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:phone-add"
                  v-model="address.city"
                  size="xl"
                  maxlength="30"
                />
              </UFormGroup>
            </div>
            <div class="w-full md:flex-1 md:ml-5 md:mr-5">
              <UFormGroup label="País" name="country" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:phone-add"
                  v-model="address.country"
                  size="xl"
                  maxlength="30"
                  value="Brasil"
                  disabled
                />
              </UFormGroup>
            </div>
            <div class="w-full md:flex-1 md:ml-5">
              <UFormGroup label="Estado" name="state" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:phone-add"
                  v-model="address.state"
                  size="xl"
                  maxlength="30"
                />
              </UFormGroup>
            </div>
          </div>

          <UFormGroup label="Complemento" name="complement" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:phone-add"
              v-model="address.complement"
              size="xl"
              maxlength="30"
            />
          </UFormGroup>
        </div>
      </div>
    </UForm>
  </UContainer>
</template>

<style></style>
