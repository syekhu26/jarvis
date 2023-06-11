<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Undangan</h1>
      </div>
      <div v-if="reqlist.data.length" class="min-w-full px-8 items-center mb-8">
        <CardRequest
          v-for="request in reqlist.data"
          :key="request.id"
          :request="request"
          class="mb-2"
        />
      </div>
      <div
        v-else
        class="px-8 text-slate-400 font-bold flex items-center justify-center h-44"
      >
        Belum Ada Undangan
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
  layout: 'home',
  computed: {
    reqlist() {
      return this.$store.state.notes.reqlist
    },
    notes() {
      return this.$store.state.notes.notes
    },
  },
  mounted() {
    this.$store.dispatch('notes/fetchNotes')
  },
}
</script>
