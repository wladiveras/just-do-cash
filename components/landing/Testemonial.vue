<script lang="ts" setup>
const page = reactive({
  testimonials: {
    headline: "Depoimentos",
    title: "O Que Nossos Clientes Dizem",
    description:
      "Veja o que nossos clientes têm a dizer sobre nós. Suas palavras refletem nossa dedicação em fornecer serviços excepcionais e resultados impressionantes. Confira abaixo e descubra por que somos a escolha confiável para suas necessidades de beleza e bem-estar.",
    items: [
      {
        quote:
          "Estou extremamente satisfeita com os serviços da empresa. A equipe foi incrivelmente profissional e atenciosa em cada etapa do processo. Recomendo sem hesitação!",
        author: {
          name: "Ana Silva",
          description: "Empresária",
          avatar: {
            src: "https://i.pravatar.cc/120?img=1",
            loading: "lazy",
          },
        },
      },
      {
        quote:
          "Minha experiência com a empresa foi excepcional. Eles superaram todas as minhas expectativas, e os resultados foram simplesmente incríveis. Definitivamente voltarei!",
        author: {
          name: "Pedro Santos",
          description: "Estudante Universitário",
          avatar: {
            src: "https://i.pravatar.cc/120?img=59",
            loading: "lazy",
          },
        },
      },
      {
        quote:
          "A empresa me proporcionou uma experiência única e transformadora. Sua abordagem personalizada realmente fez a diferença para mim. Estou muito grato por sua dedicação e comprometimento.",
        author: {
          name: "Ricardo Costa",
          description: "Músico Profissional",
          avatar: {
            src: "https://i.pravatar.cc/120?img=55",
            loading: "lazy",
          },
        },
      },
      {
        quote:
          "Recebi tratamento da empresa recentemente e estou muito impressionada com os resultados. A equipe foi gentil, profissional e eficiente em todos os aspectos. Recomendo totalmente!",
        author: {
          name: "Sandra Lima",
          description: "Professora",
          avatar: {
            src: "https://i.pravatar.cc/120?img=49",
            loading: "lazy",
          },
        },
      },
    ],
  },
});
</script>

<template>
  <div>
    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns
        id="testimonials"
        class="duration-1000 xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          v-motion-roll-visible-left
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>
  </div>
</template>

<style></style>
