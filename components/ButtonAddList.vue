<template>
  <div
    class="flex items-center justify-center mt-2 mb-3 cursor-pointer bg-gray-200 w-44 mt-6"
  >
    <iconTambahIcon />
    <div @click="buttonInput">
      {{ buttonText }}
    </div>
    <input
      class="border-b-2 border-slate-500"
      placeholder="Nama list"
      v-if="showInput"
      v-model="newData"
      @keyup.enter="addData"
      @blur="buttonInput"
    />
  </div>
</template>
<script>
export default {
  // props: {
  //   inputData: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      newData: '',
      dataList: [],
      showInput: false,
      buttonText: 'Tambah list',
    }
  },
  methods: {
    addData() {
      this.$emit('add-data', this.newData)
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
