<!-- <template>
  <div
    class="w-1/3 border border-gray-400 bg-white p-2 rounded-md"
  >
    <p class="text-center">
      Apakah anda yakin <b>tidak menyimpan</b> perubahan catatan ini?
    </p>
    <div class="flex justify-center my-2">
      <div @click="$emit('close')">
        <button
          class="w-1/3 border border-gray-600 hover:bg-gray-300 rounded mx-2"
        >
          Kembali
        </button>
      </div>
      <div @click="$emit('delete')">
        <button
          class="w-1/3 border border-red-700 bg-red-500 hover:bg-red-300 text-white hover:text-black rounded mx-2"
        >
          Buang
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
//   props: {
//     showCancel: {
//       type: Boolean,
//       default: false,
//     },
//   },
}
</script> -->

<template>
  <div class="">
    <div
      class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
    >
      <div class="mt-10 my-10">
        <div class="bg-white max-w-sm w-full rounded p-6 mx-auto shadow-lg">
          <p class="text-center mb-4">
            Apakah anda yakin ingin membuang perubahan pada catatan ini?
          </p>
          <div class="flex justify-center my-2">
            <button
              @click="$emit('delete')"
              class="bg-white border rounded w-[200px] py-2 mx-2"
            >
              Buang
            </button>
            <button
              @click="$emit('close')"
              class="w-1/2 bg-red-600 text-white ml-1 p-2 rounded"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
