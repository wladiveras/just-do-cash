<script lang="ts" setup>
const page = reactive({
  faq: {
    title: "Perguntas Frequentes (FAQ)",
    description:
      "Curiosidades? Dúvidas? Estamos aqui para ajudar! Confira nossas respostas às perguntas mais comuns sobre nossos serviços e descubra como podemos tornar sua jornada de beleza ainda mais incrível. Deixe-nos guiá-lo pelo caminho da confiança e do bem-estar.",
    items: [
      {
        label: "O que é uma assinatura de beleza?",
        content:
          "Uma assinatura de beleza é um serviço que oferece uma seleção de produtos de beleza entregues regularmente, geralmente mensalmente, trimestralmente ou anualmente, diretamente na sua porta. Esses produtos podem incluir itens de skincare, maquiagem, cabelo, fragrâncias e muito mais.",
        defaultOpen: false,
      },
      {
        label: "Como funcionam as assinaturas de beleza?",
        content:
          "Ao se inscrever em uma assinatura de beleza, você seleciona um plano de assinatura e, em seguida, recebe uma caixa com uma variedade de produtos de beleza escolhidos com cuidado por especialistas. Algumas assinaturas permitem personalizar sua caixa, enquanto outras oferecem uma seleção padrão de produtos.",
        defaultOpen: false,
      },
      {
        label: "Quais são os benefícios de assinar uma caixa de beleza?",
        content:
          "Os benefícios incluem experimentar uma variedade de produtos de beleza de alta qualidade, descobrir novas marcas e tendências, economizar tempo e dinheiro, receber produtos exclusivos e brindes, além de desfrutar da conveniência de ter seus produtos favoritos entregues diretamente em sua casa.",
        defaultOpen: false,
      },
      {
        label: "Como posso personalizar minha assinatura de beleza?",
        content:
          "Alguns serviços de assinatura permitem que você personalize sua caixa de acordo com suas preferências individuais. Isso pode incluir escolher tipos específicos de produtos, como skincare, maquiagem ou cabelo, bem como selecionar marcas ou até mesmo indicar suas preferências de cores ou fragrâncias.",
        defaultOpen: false,
      },
      {
        label: "Posso cancelar minha assinatura a qualquer momento?",
        content:
          "Sim, a maioria das assinaturas de beleza oferece flexibilidade, permitindo que você cancele sua assinatura a qualquer momento, sem penalidades. Verifique os termos e condições específicos de cada serviço para obter detalhes sobre políticas de cancelamento e reembolso.",
        defaultOpen: false,
      },
      {
        label: "Quanto custa uma assinatura de beleza?",
        content:
          "O custo de uma assinatura de beleza pode variar dependendo do serviço e do plano escolhido. Planos mensais tendem a ter preços mais baixos por caixa do que planos trimestrais ou anuais. Além disso, algumas assinaturas oferecem opções de nível de preço para se adequar ao seu orçamento.",
        defaultOpen: false,
      },
      {
        label:
          "Como são selecionados os produtos incluídos em uma assinatura de beleza?",
        content:
          "Os produtos são cuidadosamente selecionados por especialistas em beleza com base em tendências, qualidade, eficácia e preferências do cliente. Muitas assinaturas também permitem que você forneça feedback sobre os produtos recebidos para ajudar a personalizar ainda mais suas futuras caixas.",
        defaultOpen: false,
      },
      {
        label:
          "As assinaturas de beleza são adequadas para todos os tipos de pele?",
        content:
          "Sim, as assinaturas de beleza geralmente oferecem uma variedade de produtos adequados para diferentes tipos de pele, desde pele oleosa até pele sensível. Ao personalizar sua assinatura, você pode selecionar produtos específicos para atender às necessidades da sua pele.",
        defaultOpen: false,
      },
      {
        label: "Posso presentear alguém com uma assinatura de beleza?",
        content:
          "Sim, muitas assinaturas de beleza oferecem a opção de presentear amigos e familiares com caixas de assinatura. Você pode selecionar o plano e personalizar a caixa para corresponder aos gostos e preferências do destinatário, tornando-o um presente perfeito para qualquer ocasião.",
        defaultOpen: false,
      },
      {
        label: "Como faço para começar minha assinatura de beleza?",
        content:
          "Para começar sua jornada de beleza com uma assinatura, basta escolher um serviço de assinatura confiável, selecionar o plano que melhor atenda às suas necessidades e preferências, e seguir as instruções para se inscrever. Em pouco tempo, você estará desfrutando de uma seleção exclusiva de produtos de beleza entregues diretamente na sua porta.",
        defaultOpen: false,
      },
    ],
  },
});
</script>

<template>
  <div>
    <ULandingSection
      id="faq"
      v-motion-slide-visible-bottom
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ multiple :items="page.faq.items" class="max-w-4xl mx-auto" />
    </ULandingSection>
  </div>
</template>

<style></style>
