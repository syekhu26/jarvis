<template>
  <div class="px-8 mt-5">
    <CardPoint class="mb-40" />
    <div class="mt-8">
      <h3 class="font-semibold">Tawaran Tersedia</h3>
      <div class="flex-1 overflow-x-auto mt-6">
        <div class="inline-flex h-full items-start space-x-4 pb-4">
          <CardTawaran
            v-for="tawaran in product.data"
            :key="tawaran.id"
            :itemTawaran="tawaran"
            class="mb-2"
          />
          <!-- <CardTawaran />
          <CardTawaran />
          <CardTawaran /> -->
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="font-semibold">Tawaran Tersedia</h3>
      <div class="flex-1 overflow-x-auto mt-6">
        <div class="inline-flex h-full items-start space-x-4 pb-4">
          <CardTawaran />
          <CardTawaran />
          <CardTawaran />
          <CardTawaran />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  data() {
    return {
      point: this.$route.query.point,
    }
  },
  computed: {
    product() {
      return this.$store.state.product.product
    },
    notes() {
      return this.$store.state.notes.notes
    },
  },
  mounted() {
    this.$store.dispatch('product/product')
  },
}
</script>

<style></style>
