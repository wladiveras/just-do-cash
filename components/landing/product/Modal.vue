<script lang="ts" setup>
const emit = defineEmits(["close-modal"]);
const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
  emit("close-modal", false);
};
</script>
<template>
  <UModal v-model="isOpen" fullscreen>
    <UCard
      :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow md:items-center md:justify-center md:flex',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white flex"
          >
            <div>Box Premium</div>
            <div class="flex justify-center m-auto mb-5 hidden md:block">
              <UBadge
                label="Assinatura"
                variant="subtle"
                class="relative ml-1"
              />
            </div>
          </h3>
          <div class="text-center relative pr-[5rem]">
            <p class="text-2xl font-bold text-primary">RS$ 120,99</p>
            <p class="text-xs text-primary">
              ou em 4 x de R$ 30,25 * no cartão
            </p>
          </div>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="closeModal"
          />
        </div>
      </template>

      <UContainer>
        <UBlogPost
          @click="isOpen = true"
          orientation="vertical"
          class="cursor-pointer"
        >
          <template #description>
            <div class="gap-10">
              <UCard
                :ui="{
                  body: {
                    base: 'flex flex-wrap space-between items-center',
                    sm: 'flex-col',
                  },
                }"
              >
                <div class="flex items-center flex-wrap justify-center h-full">
                  <div class="flex justify-center m-auto mb-5 md:hidden">
                    <UBadge
                      label="Assinatura"
                      variant="subtle"
                      class="relative ml-2"
                    />
                  </div>
                  <div
                    class="space-y-2 flex flex-col justify-center mt-5 md:mt-0 w-full md:flex-1"
                  >
                    <img
                      src="https://blog.hubhomebox.com.br/wp-content/uploads/2020/09/clubes-de-assinatura-de-produtos-de-beleza-clubes-de-beleza-clubes-de-produtos-de-beleza-assinatura-produtos-de-beleza-1-1280x640.jpg"
                      class="rounded-md max-w-[44rem] w-full h-full object-cover"
                    />
                  </div>

                  <div
                    class="space-y-2 flex flex-col justify-center mt-5 md:mt-0 md:flex-1"
                  >
                    <p
                      class="text-sm font-medium text-gray-900 dark:text-white max-w-md ml-10"
                    >
                      Descubra a caixa de beleza perfeita para você! Nossa Box
                      Premium contém uma seleção exclusiva de produtos de beleza
                      de alta qualidade, cuidadosamente escolhidos para atender
                      às suas necessidades. Combinando produtos para o rosto,
                      corpo e cabelo, nossa Box Premium oferece uma experiência
                      completa de cuidados pessoais. Aproveite os benefícios de
                      uma pele radiante e saudável com nossos produtos de
                      esfoliantes suaves. Mime-se com momentos de relaxamento e
                      renovação, enquanto desfruta dos aromas deliciosos e de
                      produtos de beleza a cada mês, permitindo que você
                      experimente novidades e descubra seus favoritos. Aproveite
                      a comodidade de receber tudo em uma única caixa, entregue
                      diretamente na sua porta. Não perca a oportunidade de
                      elevar sua rotina de beleza
                    </p>
                  </div>
                </div>
              </UCard>

              <UContainer>
                <UCard
                  class="max-w-[24rem] w-full m-auto animate__animated animate__backInUp fixed bottom-10 left-0 right-0"
                >
                  <div class="flex justify-center items-center">
                    <div class="w-full">
                      <UButtonGroup
                        size="sm"
                        orientation="horizontal"
                        class="w-full"
                      >
                        <UButton
                          class="text-center"
                          color="primary"
                          variant="solid"
                          label="Assinar Agora"
                          size="md"
                          to="/order/checkout"
                          block
                        >
                          <template #trailing>
                            <UIcon
                              name="material-symbols:shopping-cart-checkout"
                              size="1.3rem"
                            />
                          </template>
                        </UButton>
                      </UButtonGroup>
                    </div>
                  </div>
                </UCard>
              </UContainer>
            </div>
          </template>
        </UBlogPost>
      </UContainer>
    </UCard>
  </UModal>
</template>

<style></style>
