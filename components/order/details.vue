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
    <div class="flex items-center justify-center flex-wrap mb-[3rem]">
      <div class="w-full text-center mb-10 pb-10 border-b dark:border-gray-800">
        <div>
          <div>
            <UAvatar
              size="3xl"
              src="https://hotmart.s3.amazonaws.com/product_pictures/4ffaecd8-bc79-4d65-8716-872f90fcfb79/CpiadePostsestoryprontoseeditveisnocanva10801080px5.png"
              alt="Product"
              class="w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              :ui="{ rounded: 'rounded ' }"
            />
          </div>
          <div>
            <h1 class="text-2xl font-bold mt-5">
              Canva Pack Marketing Digital
              <UBadge
                label="Assinatura"
                variant="subtle"
                class="relative bottom-1"
              />
            </h1>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              criado por Wladi Granger
            </p>
            <p class="text-3xl font-bold text-primary">RS$ 37,99</p>
            <p class="text-sm text-primary">ou em 4 x de R$ 9,93 * no cartão</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Promoção EXCLUSIVA
            </p>
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
