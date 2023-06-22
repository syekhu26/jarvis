<template>
  <div>
    <!-- <button type="button" @click="isOpen = !isOpen">
        <span class="text-red-600">Hapus</span>
      </button> -->
    <div
      v-if="showDelete"
      class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden"
    >
      <div class="min-h-screen px-4 text-center">
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div>
          <div
            class="my-5 inline-block w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <p class="text-lg font-semibold text-center mb-4">
              Apakah anda yakin menghapus catatan ini?
            </p>
          
            <div class="flex my-4">
              <button
                @click="deleteNote(id)"
                class="bg-white border rounded w-[200px] py-2 mx-2 disabled:bg-slate-300"
              >
                Hapus
              </button>
              <button
                @click="$emit('close')"
                class="w-1/2 bg-red-600 text-white ml-1 p-2 rounded"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showDelete: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      required: true,
      // type: Object,
      // default: () => ({}),
    },
    pesan: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['afterDelete'],
  data() {
    return {
      isOpen: false,
      description: '',
      descriptionError: '',
    }
  },
  // mounted() {
  //   this.$store.dispatch('notes/fetchNotes')
  // },
  computed: {
    tambahAngka() {
      return this.description.length
    },
  },
  methods: {
    deleteNote(noteId) {
      this.$store.dispatch('notesTeam/deleteNote', noteId)
      this.$router.go()
    },

    descriptionValidate() {
      if (!this.description) {
        this.descriptionError = 'Anda belum mengisi deskripsi.'
      } else if (this.description.length > 250) {
        this.description = this.description.slice(0, 250)
      } else {
        this.descriptionError = ''
      }
    },
  },
}
</script>
