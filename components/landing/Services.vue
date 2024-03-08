<script lang="ts" setup>
const { t } = useI18n()

const page = reactive({
  features: {
    title: 'Por Que Escolher Nossos Serviços?',
    description: `Opte pela excelência. oferecemos serviços de qualidade superior, com uma equipe experiente e uma abordagem personalizada. Confie em nós para cuidar de você da melhor maneira possível.`,
    headline: 'Serviços',
    items: [
      {
        title: 'Consultoria de Skincare Personalizada',
        description: 'Obtenha uma pele radiante com nossa consultoria de skincare personalizada. Nossos especialistas analisam seu tipo de pele, preocupações específicas e estilo de vida para criar um plano único com recomendações de produtos e rotinas ideais.',
        icon: 'line-md:confirm',
        to: '/order'
      },
      {
        title: 'Maquiagem Profissional para Eventos Especiais',
        description: 'Destaque-se em seu próximo evento com nossa maquiagem profissional. Nossos artistas de maquiagem colaboram com você para criar um visual perfeito que realça sua beleza natural e combina com seu estilo pessoal.',
        icon: 'line-md:confirm',
        to: '/order'
      },
      {
        title: 'Tratamento Capilar de Luxo',
        description: 'Mime seus cabelos com nosso tratamento capilar de luxo. Usando produtos premium e técnicas avançadas, restauramos a saúde e a vitalidade dos seus fios, deixando-os macios, brilhantes e irresistíveis.',
        icon: 'line-md:confirm',
        to: '/order'
      },
      {
        title: 'Massagem Relaxante e Terapêutica',
        description: 'Relaxe completamente com nossa massagem relaxante e terapêutica. Nossos terapeutas especializados aliviam a tensão muscular, reduzem o estresse e promovem o bem-estar físico e mental.',
        icon: 'line-md:confirm',
        to: '/order'
      },
      {
        title: 'Tratamento Facial Anti-idade Avançado',
        description: 'Desafie os sinais do envelhecimento com nosso tratamento facial anti-idade. Utilizamos tecnologias inovadoras e ingredientes potentes para rejuvenescer e revitalizar sua pele, proporcionando uma aparência mais jovem e firme.',
        icon: 'line-md:confirm',
        to: '/order'
      },
      {
        title: 'Manicure Deluxe - Unhas Perfeitas e Deslumbrantes',
        description: 'Experimente o luxo da nossa manicure de alta qualidade. Deixe nossos especialistas cuidarem das suas unhas, proporcionando-lhes um tratamento especial desde a modelagem até a aplicação do esmalte. Saia com unhas impecáveis e elegantes, prontas para impressionar em qualquer ocasião.',
        icon: 'line-md:confirm',
        to: '/order'
      },
    ]
  }
})

</script>

<template>
  <div>
    <ULandingSection :title="page.features.title" :description="page.features.description"
      :headline="page.features.headline">
      <UPageGrid id="features" class="duration-1000 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <ULandingCard v-motion-pop-visible v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>

<style></style>