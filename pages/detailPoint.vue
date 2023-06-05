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
        <h1 class="text-black text-4xl font-bold">
          <!-- Berkah ramadan 10 Notes hanya 2300 points. -->
          {{ name }}
        </h1>
      </div>
      <div class="max-w-2xl rounded-xl m-8 p-5 font-sans">
        <div class="font-bold">
          <h1>{{ terms }}</h1>
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
      <div class="p-10">
        <!-- <h1 class="font-semibold text-xl">Point : 2000</h1> -->
        <!-- <button
          @click="redeem"
          class="text-base bg-slate-500 text-white font-semibold py-3 px-8 rounded hover:shadow-lg hover:bg-slate-700"
        >
          Redeem
        </button> -->
        <button
          @click="show"
          class="my-4 right-3 w-[150px] h-9 text-[14px] text-white bg-blue-500 rounded md:w-[328px]"
        >
          Tukarkan Sekarang
        </button>
      </div>
    </div>
    <PopupRedeem :show="isOpen" @close="hide" />
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  data() {
    return {
      isOpen: false,
      id: this.$route.query.id,
      name: this.$route.query.name,
      notes_quantity: this.$route.query.notes_quantity,
      photo_product: this.$route.query.photo_product,
      price: this.$route.query.price,
      reward: this.$route.query.reward,
      status: this.$route.query.status,
      terms: this.$route.query.terms,
    }
  },
  methods: {
    redeem() {
      alert('Berhasil redeem anda mendapatkan 10 point')
    },
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
  },
}
</script>
