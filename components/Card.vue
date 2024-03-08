<script lang="ts" setup>

</script>
<template>
  <div
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative mx-auto h-[200px] w-full max-w-[315px] rounded-xl border bg-white p-6 shadow-xl">
    <div class="flex h-full flex-col gap-3">
      <div class="flex items-center gap-2">
        <div class="bg-muted-200 dark:bg-muted-700 size-2 rounded-full"></div><span
          class="text-muted-400 font-sans text-sm"> Mastercard </span>
      </div>
      <div class="mt-auto space-y-1"><img class="mb-3 w-11" src="~~/assets/images/card-ship.svg" alt="Card chip"
          width="44" height="31">
        <div>
          <h5 class="font-heading text-muted-500 text-sm" x-text="cardholder">asdasd</h5>
        </div>
        <div>
          <p class="font-heading text-muted-400 text-xs"><span>asdasd</span></p>
        </div>
        <div class="font-heading text-muted-400 flex w-full items-center gap-2 text-xs">
          <div class="flex items-center gap-2"><span>EXP</span><span>••/••</span></div>
          <div class="flex items-center gap-2"><span>CVC</span><span>•••</span></div>
        </div>
      </div>
    </div>
    <div class="absolute end-5 top-4 flex">
      <div class="-me-2 size-9 rounded-full bg-rose-500/60"></div>
      <div class="relative z-10 -ms-2 size-9 rounded-full bg-yellow-500/60"></div>
    </div>
    <div class="absolute bottom-7 end-5 flex"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xml:space="preserve"
        class="shrink-0 text-primary-500 size-10">
        <g>
          <g>
            <defs>
              <path id="LOGOSVGID_1_" d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
    c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
    c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
    c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"></path>
            </defs>
            <use xlink:href="#LOGOSVGID_1_" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor"
              class="overflow-visible"></use>
            <clipPath id="LOGOSVGID_2_">
              <use xlink:href="#LOGOSVGID_1_" class="overflow-visible"></use>
            </clipPath>
            <rect x="17.4" y="78" clip-path="url(#LOGOSVGID_2_)" width="422" height="422" fill="currentColor"></rect>
          </g>
          <g>
            <defs>
              <path id="LOGOSVGID_3_" d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
    C351,29.5,380.5,0,416.8,0"></path>
            </defs>
            <use xlink:href="#LOGOSVGID_3_" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor"
              class="overflow-visible"></use>
            <clipPath id="LOGOSVGID_4_">
              <use xlink:href="#LOGOSVGID_3_" class="overflow-visible"></use>
            </clipPath>
            <rect x="351" y="0" clip-path="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor">
            </rect>
          </g>
        </g>
      </svg></div>
  </div>
</template>

<style></style>