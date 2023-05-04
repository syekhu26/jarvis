<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-[10000000] bg-secondary flex items-center justify-center"
  >
    <img src="/logo.svg" class="animate-bounce w-24 h-24" alt="logo" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
