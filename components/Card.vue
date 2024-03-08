<script lang="ts" setup>

const props = defineProps({
  cardholder: {
    type: String,
    required: true
  },
  cardnumber: {
    type: String,
    required: true
  },
  expire_month: {
    type: String,
    required: true
  },
  expire_year: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  }
})

</script>
<template>
  <div
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative mx-auto h-[200px] w-full max-w-[315px] rounded-xl border p-6 ">
    <div class="flex h-full flex-col gap-3">
      <div class="flex items-center gap-2">
        <div class="bg-muted-200 dark:bg-muted-700 size-2 rounded-full"></div><span
          class="text-muted-400 font-sans text-sm"> Mastercard </span>
      </div>
      <div class="mt-auto space-y-1"><img class="mb-3 w-11" src="~~/assets/images/card-ship.svg" alt="Card chip"
          width="44" height="31">
        <div>
          <h5 class="font-heading text-muted-500 text-sm" x-text="cardholder">
            {{ props.cardnumber || '**** **** **** **** ' }}
          </h5>
        </div>
        <div>
          <p class="font-heading text-muted-400 text-xs"><span v-auto-animate>{{ props.cardholder || 'Seu nome'
              }}</span></p>
        </div>
        <div class="font-heading text-muted-400 flex w-full items-center gap-2 text-xs">
          <div class="flex items-center gap-2"><span>EXP</span><span>

              {{ props.expire_month && props.expire_year ? `${props.expire_month}/${props.expire_year}` : '••/••' }}
            </span></div>
          <div class="flex items-center gap-2"><span>CVC</span><span>

              {{ props.cvv || ' •••' }}
            </span></div>
        </div>
      </div>
    </div>
    <div class="absolute end-5 top-4 flex">
      <div class="-me-2 size-9 rounded-full bg-rose-500/60"></div>
      <div class="relative z-10 -ms-2 size-9 rounded-full bg-yellow-500/60"></div>
    </div>
    <div class="absolute bottom-7 end-5 flex">
      <UIcon name="material-symbols:logo-dev" size="2rem" />
    </div>
  </div>
</template>

<style></style>