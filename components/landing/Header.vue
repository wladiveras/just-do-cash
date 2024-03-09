<script lang="ts" setup>
const { t } = useI18n();

const page = reactive({
  title: "Descubra a Beleza em Cada Caixa Assinaturas Personalizadas para Você",
  description:
    "Transforme Sua Rotina de Beleza com Nossas Caixas de Assinatura Exclusivas.",
  hero: {
    title:
      "Transforme Sua Rotina de Beleza com Nossas Caixas de Assinatura Exclusivas",
    description:
      "Você está pronto para elevar sua rotina de beleza a um novo patamar? oferecemos uma experiência única e personalizada que vai revolucionar sua maneira de cuidar de si mesmo.",

    links: [
      {
        label: "Entrar",
        icon: "i-heroicons-arrow-right-20-solid",
        trailing: true,
        to: "/login",
        size: "xl",
      },
    ],
  },
  logos: {
    title: "Parceiros de confiança",
    icons: [
      "tabler:brand-disney",
      "tabler:brand-visa",
      "i-simple-icons-netlify",
      "tabler:brand-bluesky",
      "tabler:brand-airbnb",
    ],
  },
});
</script>
<template>
  <ULandingHero>
    <template #title>
      <span class="max-w-1.5">{{ page.title }}</span>
    </template>

    <template #description>
      <span>{{ page.hero.description }}</span>
    </template>

    <template #headline>
      <!-- todo: add a new feature can be show above title-->
    </template>
    <div class="relative">
      <div class="bg-background border-gradient rounded-xl p-4">
        <div
          class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-950/10 dark:border-white/10"
        >
          <iframe
            class="absolute"
            src="https://www.youtube.com/embed/hf1iUqZc4lc?si=Ft1nA9pjI710pjGX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <ULandingLogos
      v-motion-slide-visible-right
      :title="page.logos.title"
      align="center"
    >
      <UIcon
        v-for="icon in page.logos.icons"
        :key="icon"
        :name="icon"
        class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
      />
    </ULandingLogos>
  </ULandingHero>
</template>

<style></style>
