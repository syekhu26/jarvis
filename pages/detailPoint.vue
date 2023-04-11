<template>
  <div>
    <div
      class="relative w-full border-b border-gray-300 bg-slate-500 p-12 shadow"
    >
      <div>
        <p class="font-bold text-white text-center">Foto Random</p>
      </div>
    </div>
    <div>
      <div class="p-5 m-8">
        <h1 class="text-black text-4xl font-bold">Berkah Ramadhan</h1>
        <p class="mt-2">10 Catatan</p>
      </div>
      <div class="max-w-2xl rounded-xl m-8 p-5 font-sans">
        <div class="font-bold">
          <h1>Syarat & Ketentuan</h1>
        </div>
        <p class="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          doloremque culpa architecto. Velit, excepturi! Earum, quaerat.
          Asperiores magni repellat eum? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Esse maiores nihil quos, perferendis impedit fugit
          veniam repellendus. Amet maiores numquam sit minima maxime. Eos
          distinctio dolores illum molestiae vitae ratione!
        </p>
      </div>
      <div class="flex justify-between items-center p-5 m-8">
        <h1 class="font-semibold text-xl">Point : 2000</h1>
        <button
          @click="redeem"
          class="text-base bg-slate-500 text-white font-semibold py-3 px-8 rounded hover:shadow-lg hover:bg-slate-700"
        >
          Redeem
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  data() {
    return {}
  },
  methods: {
    redeem() {
      alert('Berhasil redeem anda mendapatkan 10 point')
    },
  },
}
</script>
