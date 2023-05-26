<template>
  <div>
    <input
      type="text"
      v-model="inputValue"
      @input="handleInput"
      class="border flex items-center mx-auto mt-5 w-full h-10"
    />
    <p v-if="isInputTooLong" style="color: red">
      Input melebihi batas karakter.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      isInputTooLong: false,
    }
  },
  methods: {
    handleInput() {
      if (this.inputValue.length > 100) {
        this.isInputTooLong = true
        // Menghapus karakter ke-101 dan seterusnya
        this.inputValue = this.inputValue.slice(0, 100)
      } else {
        this.isInputTooLong = false
      }
    },
  },
}
</script>
