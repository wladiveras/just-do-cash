<script lang="ts" setup>

</script>

<template>
  <div class="w-full flex flex-col gap-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2">

      <div class="space-y-4 flex flex-col justify-top p-[2rem]">
        <h2 class="text-lg font-semibold">
          <UIcon name="logos:paypal" class="ml-2" /> Pague com PayPal
        </h2>
        <p class="text-base pl-2">
          Ao clicar em "iniciar assinatura", você será redirecionado para o site do PayPal para concluir sua compra de
          forma segura.
        </p>
      </div>


      <div class="space-y-4 flex flex-col justify-center items-center">
        <UCard class="max-w-[20rem]">
          <NuxtLink to="https://paypal.com">
            <UIcon name="logos:paypal"
              class="text-[10rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
          </NuxtLink>

        </UCard>
      </div>
    </div>
  </div>
</template>

<style></style>