<template>
  <div>
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="bg-red-600 text-white rounded w-[200px] py-2 mx-2"
    >
      Hapus
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden"
    >
      <div class="min-h-screen px-2 text-center">
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div>
          <div
            class="my-5 inline-block w-full max-w-xl h-full transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <p class="text-base font-semibold text-center">
              Silahkan tulis pesan pada orang yang dilibatkan
            </p>
            <div class="place-items-center my-2 mx-1">
              <p class="text-sm">Pesan</p>
              <input
                class="w-full p-1 border"
                type="text"
                placeholder="Tulis pesan"
              />
            </div>
            <button
              class="bg-blue-500 rounded w-[200px] text-center text-white text-sm py-1 float-right"
            >
              Kirim
            </button>
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
