<template>
  <div>
    <div
      v-if="show"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
    >
      <div>
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative mx-auto w-full max-w-sm">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col px-8">
          <div class="flex items-center justify-center mt-5">
            <div class="font-bold mb-6 mt-2 text-center">
              Yeay 🎉, anda berhasil menukarkan point dengan 10 notes!
            </div>
          </div>
          <div class="text-center mb-6 text-slate-400 w-full">
            Anda mendapatkan 10 notes untuk pekerjaan anda sehari-hari. Selamat
            menggunakan.
          </div>
          <button
            @click="$emit('close')"
            class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700 mb-6"
          >
            Kembali Ke Tawaran
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
