<template>
  <!-- <div
    v-if="showModal"
    class="w-1/3 border border-gray-400 bg-white p-2 rounded-md"
  >
    <p class="text-lg text-center">
      Selamat 🎉, anda telah menyelesaikan catatan ini
    </p>
    <p class="opacity-50 text-sm text-center my-2">
      Anda dan orang yang anda libatkan mendapatkan point sebesar 600 tiap
      oranganya.
    </p>
    <div class="flex justify-center">
      <button
        @click="$emit('close')"
        class="w-full bg-blue-600 text-white hover:bg-blue-400 hover:text-black p-2 mt-2 rounded"
      >
        Terima
      </button>
    </div>
  </div> -->
  <!-- <div>
    <div
      v-if="showModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
    >
      <div>
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative mx-auto w-full max-w-sm">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col px-8">
          <div class="flex items-center justify-center mt-5">
            <div class="font-bold mb-6 mt-2 text-center">
              Selamat 🎉, anda telah menyelesaikan catatan ini
            </div>
          </div>
          <div class="text-center mb-6 text-slate-400 w-full">
            Anda dan orang yang anda libatkan mendapatkan point sebesar 600 tiap
            oranganya.
          </div>
          <button
            @click="$emit('close')"
            class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700 mb-6"
          >
            Terima
          </button>
        </div>
      </div>
    </div>
  </div> -->
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
