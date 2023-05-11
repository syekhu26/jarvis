<template>
  <div class="w-1/3 border border-gray-300 shadow rounded-md p-3">
    <center>
      <p>Apakah Anda yakin ingin menghapus catatan ini?</p>
      <p class="text-sm text-gray-500 my-5">
        Anda tidak dapat mengembalikan pesan ini setelah dihapus.
      </p>
      <p>Pesan yang dilaporkan untuk orang yang dilibatkan</p>
    </center>
    <div class="flex justify-between my-2">
      <p>Pesan <strong class="text-red-600">*</strong></p>
      <p class="text-sm text-gray-500 items-end">0/100</p>
    </div>
    <textarea
      class="w-full border border-gray-500 p-3"
      placeholder="Tulis pesan"
    ></textarea>
    <div class="flex justify-between my-3">
      <button class="w-1/2 border border-gray-500 mr-1 p-2 rounded">
        Batal
      </button>
      <button
        @click="deleteNote(note.id)"
        class="w-1/2 bg-red-600 text-white ml-1 p-2 rounded"
      >
        Ya
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    deleteNote(noteId) {
      this.$store.dispatch('deleteNote', noteId)
    },
  },
}
</script>
