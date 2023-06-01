<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Permintaan</h1>
      </div>
      <div class="min-w-full px-8 items-center mb-8">
        <CardRequest v-for="note in notes" :key="note.id" :reqlist="note" />
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
  computed:{
    notes() {
      return this.$store.state.notes.notes
    },
  },
  mounted() {
    this.$store.dispatch('notes/fetchNotes')
  },
}
</script>
