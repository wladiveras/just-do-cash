<script lang="ts" setup>
const { t } = useI18n();

const page = reactive({
  plans: [
    {
      title: "Box Essencial",
      description:
        "Um plano cuidadosamente elaborado para atender às suas necessidades de beleza com carinho e atenção.",
      price: "$RS 70.99",
      align: "bottom",
      highlight: false,
      scale: false,
      button: {
        label: "Assinar",
        color: "gray",
        to: "/order",
      },
      features: [
        "2 produtos de beleza surpresa",
        "1 item de bem-estar",
        "Entrega mensal",
      ],
    },
    {
      title: "Box Plus",
      description:
        "O favorito de nossos clientes.Um plano para aqueles que desejam algo a mais, com excelente custo- benefício.",
      price: "$RS 90.99",
      align: "top",
      highlight: true,
      scale: true,
      button: {
        label: "Assinar",
        color: "primary",
        to: "/order",
      },
      features: [
        "3 produtos de beleza de marcas premium",
        "2 itens de bem-estar exclusivos",
        "Acessórios surpresa",
        "Entrega mensal com rastreamento",
      ],
    },
    {
      title: "Box Premium",
      description:
        "Um plano para os amantes de cuidados pessoais, com produtos de alta qualidade.",
      price: "$RS 120,99",
      align: "bottom",
      highlight: false,
      scale: false,
      button: {
        label: "Assinar",
        color: "gray",
        to: "/order",
      },
      features: [
        "4 a 5 produtos de beleza de luxo",
        "3 itens de bem-estar de alta qualidade da sua escola",
        "Acessórios de edição limitada",
        "Brinde especial mensal",
        "Entrega prioritária com seguro",
      ],
    },
  ],
});

const isYearly = ref(false);
</script>

<template>
  <div>
    <ULandingSection
      title="Box Surpresa Mensal"
      description="Descubra uma jornada mensal de surpresas e encantos com nossa Box Mensal exclusiva. Receba uma seleção cuidadosamente escolhida de produtos de beleza e bem-estar diretamente em sua porta, oferecendo uma experiência de autocuidado excepcional a cada entrega. Mime-se ou presenteie alguém especial com uma assinatura hoje e embarque em uma jornada de descoberta e autocompaixão."
      headline="Planos"
    >
      <UPricingToggle
        v-model="isYearly"
        v-motion-slide-visible-bottom
        :left="t('plans.month')"
        :right="t('plans.year')"
        class="m-auto md:w-[30rem] w-full"
      />

      <UPricingGrid
        id="pricing"
        v-motion-pop-visible
        compact
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <UPricingCard
          v-for="(plan, index) in page.plans"
          :key="index"
          align="top"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :highlight="plan.highlight"
          :scale="plan.scale"
          :features="plan.features"
          :button="plan.button"
        />
      </UPricingGrid>
    </ULandingSection>
  </div>
</template>

<style></style>
