<template>
  <div>
    <CardListNote @detail="isOpen = !isOpen" />
    <div
      v-if="isOpen"
      class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden"
    >
      <div class="min-h-screen px-4 text-center">
        <!-- membuat bg gelap -->
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>

        <!-- popup form -->
        <div>
          <div
            class="my-5 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <div class="-mt-7">
              <div class="flex items-center justify-between">
                <div
                  @click="isOpen = false"
                  class="w-10 h-10 rounded-full flex absolute mt-7 top-5 right-5 cursor-pointer"
                >
                  <iconSilangIcon />
                </div>
              </div>
              <div class="flex items-center justify-between mt-24 mb-3">
                <h1 class="font-bold text-xl">Beli Tiket Pesawat</h1>
                <div class="flex items-center">
                  <a href="" class="p-2 text-blue-500">Edit</a>
                  <DeleteNote />
                  <!-- <a href="" class="text-red-500">Hapus</a> -->
                </div>
              </div>
              <p class="font-sans mb-3">
                Beli tiket pesawat untuk tgl 13 Maret 2023 dari Jogja ke
                Jakarta. Pulang tanggal 5 Maret. Segera untuk dipesan. Jangan
                sampai lupa
              </p>

              <div class="mb-4">
                <p>Tanggal Acara :</p>
                <p>Reminder :</p>
                <p>Ringtone :</p>
              </div>
              <div class="mb-4">
                <h5>Pembuat catatan :</h5>
                <div class="flex items-center">
                  <iconPotoIcon />
                  <p class="px-2">Masbro</p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="float-right inline-flex justify-center rounded border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
                >
                  Selesaikan Catatan
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- ok -->
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
