<template>
  <div
    class="flex items-center justify-center mt-2 mb-3 cursor-pointer bg-gray-200 w-44 mt-6"
  >
    <iconTambahIcon />
    <div @click="buttonInput">
      {{ buttonText }}
    </div>
    <input
      class="border-b-2 border-slate-500 outline-none"
      placeholder="Nama list"
      v-if="showInput"
      v-model="title"
      @keyup.enter="addData"
      @blur="buttonInput"
    />
  </div>
</template>
<script>
export default {
  async asyncData({ store, $axios, params, query }) {
    const groupId = query.page // Mengambil ID dari query parameter "page"
    await store.dispatch('team/getDataGroup', groupId) // Mengambil data grup berdasarkan ID
  },
  // props: {
  //   judul: {
  //     type: String,
  //     required: true,
  //   },
  // },
  props: ['value'],
  // props: ['title'],
  data() {
    return {
      title: '',
      dataList: [],
      showInput: false,
      buttonText: 'Tambah list',
      coba: this.$route.query.id
    }
  },
  methods: {
    // addData() {
    //   this.$emit('add-data', this.newData)
    // },

    // addData() {
    //     this.$emit('add-data', this.title)
    // },
    async addData() {
      try {
        await this.$store.dispatch('coloms/addColom', {
          title: this.title,
          team: this.$route.query.team,
          team_id: this.$route.query.id,
        })
      } catch (error) {
        console.log(error)
      }

      this.$router.go()
    },
    buttonInput() {
      this.showInput = !this.showInput
      if (this.showInput) {
        this.buttonText = ''
      } else {
        this.buttonText = 'Tambah list'
      }
    },
  },
}
</script>
