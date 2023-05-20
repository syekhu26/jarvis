<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Permintaan masuk</h1>
        <ButtonGlobal @click="show" />
      </div>
      <div class="min-w-full px-8 items-center mb-8">
        <p class="text-lg mb-4">Belum catatan masuk atau undangan grub</p>
        <CardRequest />
        <div class="flex items-center mt-3">
          <div>3 permintaan lagi.</div>
          <NuxtLink to="/request" class="font-bold text-blue-600 px-1"
            >Lihat Semua</NuxtLink
          >
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Daftar catatan</h1>
      </div>

      <!-- <div v-if="notes">Belum ada catatan</div> -->
      <div v-if="notes.length > 0" class="min-w-full px-4 items-center mb-8">
        <!-- <CardListNote/> -->
        <!-- <DetailPersonal /> -->
        <CardListNote
          v-for="note in notes"
          :key="note.id"
          :item="note"
          class=""
        />
      </div>
      <div v-else>Belum Ada Catatan</div>
    </div>
    <FormNote :show="isOpen" @close="hide" />
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      isOpen: false,
      note: false,
    }
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes
    },
    chek() {
      return Boolean(this.note)
    },
  },
  mounted() {
    this.$store.dispatch('notes/fetchNotes')
  },
}
</script>
