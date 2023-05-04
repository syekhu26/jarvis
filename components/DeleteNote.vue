<template>
  <div>
    <button type="button" @click="isOpen = !isOpen">
      <span class="text-red-600">Hapus</span>
    </button>
    <div
      v-if="isOpen"
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
            <div class="flex justify-center my-4">
              <button @click="isOpen = false" class="bg-white border rounded w-[200px] py-2 mx-2">
                Batal
              </button>
              <DeletewithMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
