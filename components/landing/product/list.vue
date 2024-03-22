<script lang="ts" setup>
const isOpen = ref(false);
const props = defineProps({
  total: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <LandingProductModal v-model="isOpen" @close-modal="isOpen = false" />
  <UBlogList orientation="horizontal">
    <UBlogPost
      @click="isOpen = true"
      orientation="horizontal"
      class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <template #title> Box Premium </template>
      <template #description>
        <div class="m-auto">
          <h1
            class="text-2xl font-bold text-center md:text-left mt-1 md:mt-0"
          ></h1>

          <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
          <p class="text-xs text-primary">ou em 4 x de R$ 30,25 * no cartão</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Valido por tempo limitado
          </p>
        </div>
      </template>
      <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template>
      <template #image>
        <img
          src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
          class="w-full h-full object-cover rounded-lg"
        />
      </template>
    </UBlogPost>

    <!-- test -->
    <UBlogPost
      @click="isOpen = true"
      orientation="horizontal"
      class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <template #title> Box Premium </template>
      <template #description>
        <div class="m-auto">
          <h1
            class="text-2xl font-bold text-center md:text-left mt-1 md:mt-0"
          ></h1>

          <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
          <p class="text-xs text-primary">ou em 4 x de R$ 30,25 * no cartão</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Valido por tempo limitado
          </p>
        </div>
      </template>
      <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template>
      <template #image>
        <img
          src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
          class="w-full h-full object-cover rounded-lg"
        />
      </template> </UBlogPost
    ><UBlogPost
      @click="isOpen = true"
      orientation="horizontal"
      class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <template #title> Box Premium </template>
      <template #description>
        <div class="m-auto">
          <h1
            class="text-2xl font-bold text-center md:text-left mt-1 md:mt-0"
          ></h1>

          <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
          <p class="text-xs text-primary">ou em 4 x de R$ 30,25 * no cartão</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Valido por tempo limitado
          </p>
        </div>
      </template>
      <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template>
      <template #image>
        <img
          src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
          class="w-full h-full object-cover rounded-lg"
        />
      </template>
    </UBlogPost>

    <UBlogPost
      v-if="props.total === true"
      @click="isOpen = true"
      orientation="horizontal"
      class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <template #title> Box Premium </template>
      <template #description>
        <div class="m-auto">
          <h1
            class="text-2xl font-bold text-center md:text-left mt-1 md:mt-0"
          ></h1>

          <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
          <p class="text-xs text-primary">ou em 4 x de R$ 30,25 * no cartão</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Valido por tempo limitado
          </p>
        </div>
      </template>
      <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template>
      <template #image>
        <img
          src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
          class="w-full h-full object-cover rounded-lg"
        />
      </template>
    </UBlogPost>
    <UBlogPost
      v-if="props.total === true"
      @click="isOpen = true"
      orientation="horizontal"
      class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <template #title> Box Premium </template>
      <template #description>
        <div class="m-auto">
          <h1
            class="text-2xl font-bold text-center md:text-left mt-1 md:mt-0"
          ></h1>

          <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
          <p class="text-xs text-primary">ou em 4 x de R$ 30,25 * no cartão</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Valido por tempo limitado
          </p>
        </div>
      </template>
      <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template>
      <template #image>
        <img
          src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
          class="w-full h-full object-cover rounded-lg"
        />
      </template>
    </UBlogPost>
    <UBlogPost
      v-if="props.total === true"
      @click="isOpen = true"
      orientation="horizontal"
      class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <template #title> Box Premium </template>
      <template #description>
        <div class="m-auto">
          <h1
            class="text-2xl font-bold text-center md:text-left mt-1 md:mt-0"
          ></h1>

          <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
          <p class="text-xs text-primary">ou em 4 x de R$ 30,25 * no cartão</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Valido por tempo limitado
          </p>
        </div>
      </template>
      <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template>
      <template #image>
        <img
          src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
          class="w-full h-full object-cover rounded-lg"
        />
      </template>
    </UBlogPost>

    <!-- test -->
  </UBlogList>
</template>
