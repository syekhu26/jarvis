<template>
  <div
    class="flex items-center justify-center mt-2 mb-3 cursor-pointer bg-gray-200 w-44 mt-6"
  >
    <iconTambahIcon />
    <div @click="buttonInput">
      {{ buttonText }}
    </div>
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
      isOpen: false,
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

<style></style>
