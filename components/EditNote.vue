<template>
  <div class="">
    <div
      class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
    >
      <div class="mt-10 my-10">
        <div class="bg-white max-w-sm w-full rounded p-6 mx-auto shadow-lg">
          <center>
            <p>Apakah Anda yakin ingin mengubah catatan ini?</p>
            <p class="text-sm text-gray-500 my-5">
              Anda dapat mengubah lagi sewaktu-waktu anda membutuhkan perubahan.
            </p>
            <p>Pesan yang dilaporkan untuk orang yang dilibatkan</p>
          </center>
          <div class="flex justify-between my-2">
            <p>Pesan <strong class="text-red-600">*</strong></p>
            <p class="text-sm text-gray-500 items-end">{{ tambahAngka }}/250</p>
          </div>
          <textarea
            v-model="body"
            @input="bodyValidate"
            class="w-full border border-gray-500 p-3"
            placeholder="Tulis pesan"
          ></textarea>
          <div class="flex justify-between my-3">
            <button
              @click="$emit('close')"
              class="w-1/2 border border-gray-500 mr-1 p-2 rounded"
            >
              Batal
            </button>
            <!-- @click="form" -->
            <button
              @click="editCollab"
              :disabled="!body"
              class="w-1/2 bg-blue-600 text-white ml-1 p-2 rounded disabled:bg-slate-400"
            >
              Ubah
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
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      // isOpen: false,
      body: '',
      bodyError: '',
    }
  },
  computed: {
    tambahAngka() {
      return this.body.length
    },
  },
  methods: {
    editCollab() {
      this.$emit('edit')
      this.$router.go()
    },
    bodyValidate() {
      if (!this.body) {
        this.bodyError = 'Anda belum mengisi deskripsi.'
      } else if (this.body.length > 250) {
        this.body = this.body.slice(0, 250)
      } else {
        this.bodyError = ''
      }
    },
  },
}
</script>
