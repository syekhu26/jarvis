<template>
  <div
    v-if="showModal"
    class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden"
  >
    <div class="min-h-screen px-4 text-center">
      <div>
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div>
        <div
          class="my-5 inline-block w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all border border-slate-300"
        >
          <p class="text-lg font-semibold text-center">
            Selamat 🎉, anda telah menyelesaikan catatan ini
          </p>
          <p class="text-sm text-center opacity-50 mt-5">
            Anda dan orang yang anda libatkan mendapatkan point sebesar 600 tiap
            oranganya.
          </p>
          <div class="flex justify-center">
            <button
              @click="$emit('close')"
              class="bg-sky-600 border rounded w-[200px] py-2 mx-2 w-full mt-5"
            >
              Terima
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
