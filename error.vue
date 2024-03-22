<script setup lang="ts">
import type { NuxtError } from "#app";

useSeoMeta({
  title: "Pagina não encontrada",
  description: "A pagina que você procura não foi encontrada",
});

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
});

useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
});
</script>

<template>
  <div>
    <UMain>
      <UContainer>
        <UPage>
          <UPageError
            :error="error"
            :ui="{
              default: {
                clearButton: {
                  label: 'Voltar',
                  color: 'primary',
                  size: 'lg',
                },
              },
            }"
          />
        </UPage>
      </UContainer>
    </UMain>

    <UNotifications />
  </div>
</template>
