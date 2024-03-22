<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <div
      class="flex items-center justify-center flex-wrap mb-[3rem] border-b dark:border-gray-800 pb-10"
    >
      <div
        class="w-full text-center md:text-left mb-10 pb-10 border-b dark:border-gray-800"
      >
        <div class="flex justify-center space-between">
          <div class="flex flex-wrap space-between">
            <div class="w-full md:mr-5 md:w-[350px]">
              <img
                class="m-auto md:w-auto bg-auto rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
              />
            </div>
            <div class="m-auto">
              <h1
                class="text-2xl font-bold text-center md:text-left mt-5 md:mt-0"
              >
                Box Premium
                <UBadge
                  label="Assinatura"
                  variant="subtle"
                  class="relative bottom-1"
                />
              </h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Produzido por Wladi Granger
              </p>
              <p class="text-3xl font-bold text-primary">RS$ 120,99</p>
              <p class="text-sm text-primary">
                ou em 4 x de R$ 30,25 * no cartão
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Promoção EXCLUSIVA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <UPopover mode="hover" :popper="{ arrow: true }">
          <div class="flex items-center">
            <UIcon
              name="line-md:alert-circle-loop"
              size="1.5rem"
              class="mr-2"
            />
            <p class="text-2xl font-semibold">{{ props.title }}</p>
          </div>

          <template #panel>
            <div class="p-4">
              {{ props.description }}
            </div>
          </template>
        </UPopover>
      </div>
    </div>
  </div>
</template>

<style></style>
