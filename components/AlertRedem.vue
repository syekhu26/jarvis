<!-- <template>
  <div v-if="errorMessage" class="">
    <div class="bg-white max-w-sm w-full rounded p-6 border border-slate-300">
      <div class="message text-center">{{ errorMessage }}</div>
      <button @click="closePopup">OK</button>
    </div>
  </div>
</template> -->

<template>
  <div
    v-if="errorMessage"
    @click="closePopup"
    class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
  >
    <div class="mt-10 my-10">
      <div class="bg-white max-w-md w-full rounded p-6 mx-auto shadow-lg">
        <div class="message text-center">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.error-alert {
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
