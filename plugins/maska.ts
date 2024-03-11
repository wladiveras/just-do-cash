import { vMaska } from "maska";

export default defineNuxtPlugin((nuxtApp) => {
  //@ts-ignore
  nuxtApp.vueApp.directive("maska", vMaska);
});
