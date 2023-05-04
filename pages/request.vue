<template>
  <div class="w-full mt-[99px]">
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Permintaan</h1>
      </div>
      <div class="min-w-full px-8 items-center mb-8">
        <CardRequest />
      </div>
    </div>
  </div>
</template>

<script>
import CardRequest from '~/components/CardRequest.vue'

export default {
  layout: 'home',
  components: {
    CardRequest,
  },
}
</script>
