<script lang="ts" setup></script>
<template>
  <div>
    <UContainer v-motion-roll-visible-top>
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-lg font-semibold">
                <UIcon name="material-symbols:order-approve-outline-sharp" />
                Resumo do Pedido
              </h1>
              <span class="text-sm text-gray-600">
                Veja os detalhes do seu pedido.
              </span>
            </div>
          </div>
        </template>
        <p>Um texto apresentavel do produto e todos os passos concluidos</p>

        <template #footer>
          <UButton
            v-motion-fade-visible
            class="m-auto mx-auto w-full text-center"
            color="primary"
            icon="line-md:confirm"
            variant="solid"
            to="purchase"
            label="finalizar compra"
            block
          />
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<style></style>
