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
            class="my-5 inline-block w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <p class="text-lg font-semibold text-center">
              Apakah anda yakin menghapus catatan ini?
            </p>
            <p class="text-sm text-center opacity-50">
              Anda tidak dapat mengembalikan pesan ini setelah dihapus
            </p>
            <p
              v-if="pesan.note_type === 'collaboration'"
              class="text-sm text-center opacity-50"
            >
              Pesan yang dilaporkan untuk orang yang dilibatkan
            </p>
            <div v-if="pesan.note_type === 'collaboration'" class="px-3">
              <div class="flex justify-between my-2">
                <p>Pesan <strong class="text-red-600">*</strong></p>
                <p class="text-sm text-gray-500 items-end">
                  {{ tambahAngka }}/100
                </p>
              </div>
              <textarea
                v-model="description"
                @input="descriptionValidate"
                class="w-full border border-gray-500 p-3"
                placeholder="Tulis pesan"
              ></textarea>
              <span v-if="descriptionError" class="text-red-500">{{
                descriptionError
              }}</span>
            </div>
            <div class="flex justify-center my-4">
              <button
                @click="$emit('close')"
                class="bg-white border rounded w-[200px] py-2 mx-2"
              >
                Batal
              </button>
              <button
                @click="deleteNote(id)"
                class="w-1/2 bg-red-600 text-white ml-1 p-2 rounded"
              >
                Ya
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
      // type: [Number, String],
      // required: true,
      type: Object,
      default: () => ({}),
    },
    pesan: {
      type: Object,
      default: () => ({}),
    },
  },
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
      this.$store.dispatch('notes/deleteNote', noteId)
    },
    descriptionValidate() {
      if (!this.description) {
        this.descriptionError = 'Anda belum mengisi deskripsi.'
      } else {
        this.descriptionError = ''
      }
    },
  },
}
</script>
