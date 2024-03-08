<script lang="ts" setup>
const { t } = useI18n()

</script>

<template>
  <div>
    <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">

      <ULandingCTA v-motion-pop-visible align="center" title="Box Premium"
        description="Descubra o ápice do luxo com nosso Box Premium por R$ 120/mês. Receba de 4 a 5 produtos de beleza de marcas renomadas, junto com 3 itens de bem-estar selecionados para relaxamento. Além disso, incluímos acessórios exclusivos para aprimorar sua experiência. Com entrega prioritária, você desfrutará de indulgência mensal garantida."
        :card="false" :links="[
          { label: 'Assine agora mesmo', to: '#pricing', color: 'primary', size: 'xl', click: () => { }, trailingIcon: 'i-heroicons-arrow-up-20-solid' }
        ]">
        <img v-motion-roll-visible-top
          src="https://locaria.com/wp-content/uploads/2019/05/AdobeStock_249865970-1024x683.jpeg"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>

<style></style>