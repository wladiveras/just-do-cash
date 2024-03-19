<script lang="ts" setup>
import { object, string, type InferType, ValidationError } from "yup";

definePageMeta({
  scrollToTop: true,
});

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

const fetchData = async (zipcode: any) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
    const data = await response.json();
    updateAddress(data);
  } catch (error) {
    console.error("Error fetching data from viacep.com.br", error);
  }
};

// Update address values in pinia
const updateAddress = (data: any) => {
  address.street = data.logradouro;
  address.neighborhood = data.bairro;
  address.city = data.localidade;
  address.state = data.uf;
  address.country = "Brasil";
  address.zipcode = data.cep;
};

watch(
  () => address.zipcode,
  (zipcode) => {
    if (zipcode.length >= 9) fetchData(zipcode);
  },
);

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
  <UContainer class="mb-[7rem]">
    <UForm
      :schema="addressSchema"
      :state="address"
      class="space-y-4 space-y-4 flex flex-col justify-top p-[2rem] max-w-[800px]"
    >
      <div class="animate__animated animate__backInRight">
        <OrderDetails
          title="Endereço de Entrega"
          description="Agora, informe o endereço de entrega, é nessa etapa que cuidamos
                para que o seu produto chegue até você com toda segurança e
                agilidade."
        />
        <div>
          <UFormGroup label="CEP" name="zipcode" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:map-marker-multiple-alt-filled"
              v-model="address.zipcode"
              size="xl"
              v-maska
              data-maska="['#####-###']"
              placeholder="Informe o CEP para carregar o endereço"
            />
          </UFormGroup>
          <UFormGroup label="Rua/Logradouro" name="street" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:home-simple"
              v-model="address.street"
              size="xl"
              maxlength="30"
              placeholder="Ex: Rua São Paulo"
            />
          </UFormGroup>
          <div class="flex flex-wrap justify-center w-full">
            <div class="w-full md:flex-1 md:mr-5">
              <UFormGroup label="Número" name="number" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:map-marker-alt"
                  v-model="address.number"
                  size="xl"
                  maxlength="30"
                  placeholder="Ex: 1234"
                />
              </UFormGroup>
            </div>
            <div class="w-full md:flex-1 md:ml-5">
              <UFormGroup label="Bairro" name="neighborhood" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:home-simple"
                  v-model="address.neighborhood"
                  size="xl"
                  maxlength="30"
                  placeholder="Ex: Centro"
                />
              </UFormGroup>
            </div>
          </div>

          <div class="flex flex-wrap justify-center w-full">
            <div class="w-full md:flex-1 md:mr-5">
              <UFormGroup label="Cidade" name="city" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:map-marker-alt"
                  v-model="address.city"
                  size="xl"
                  maxlength="30"
                  placeholder="Ex: São Paulo"
                />
              </UFormGroup>
            </div>
            <div class="w-full md:flex-1 md:ml-5 md:mr-5">
              <UFormGroup label="Estado" name="state" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:map-marker-alt-filled"
                  v-model="address.state"
                  size="xl"
                  maxlength="30"
                  placeholder="Ex: SP"
                />
              </UFormGroup>
            </div>
            <div class="w-full md:flex-1 md:ml-5">
              <UFormGroup label="País" name="country" class="mb-5">
                <UInput
                  variant="outline"
                  icon="line-md:map-marker-alt-filled"
                  v-model="address.country"
                  size="xl"
                  maxlength="30"
                  value="Brasil"
                  disabled
                />
              </UFormGroup>
            </div>
          </div>

          <UFormGroup label="Complemento" name="complement" class="mb-5">
            <UInput
              variant="outline"
              icon="line-md:map-marker-alt"
              v-model="address.complement"
              size="xl"
              maxlength="30"
              placeholder="Ex: Apto 123"
            />
          </UFormGroup>
        </div>
      </div>
    </UForm>
  </UContainer>
</template>

<style></style>
