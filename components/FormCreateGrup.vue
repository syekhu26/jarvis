<template>
  <div>
    <ButtonCreateGrup @click="toggleModal = !toggleModal" />
    <div
      v-if="toggleModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
    >
      <div>
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative mx-auto w-full max-w-2xl">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col px-8">
          <div class="font-bold mb-6 mt-2">Buat Tim</div>
          <!-- <p>{{ tim }}</p> -->
          <form>
            <div class="grid grid-cols-2 gap-5">
              <label for="nama" class="text-sm font-medium dark:text-black"
                >Nama tim</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="masukkan nama tim"
                required
              />
              <label for="email" class="text-sm font-medium dark:text-black"
                >Pilih bagian Yang terlibat</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan email anggota"
                required
              />
              <div class="mb-3 text-blue-600">
                <a href="">Tambah email</a>
              </div>
            </div>
            <div class="mt-11 float-right px-5">
              <button
                type="submit"
                value="Submit"
                class="mt-5 mb-6 bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white font-bold w-full rounded-lg float-right"
                @click="toggleModal = false"
              >
                Buat Grup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return {
      toggleModal: false,
      // tim: [
      //   {
      //     nama: " ",
      //     email: " ",
      //   },
      // ],
      tim: {
        nama: '',
        email: '',
      },
    }
  },
  methods: {
    // pushNewData() {
    //   this.$emit("addNewData", this.nama, this.email);
    //   this.$refs.form.reset();
    //   this.nama = "";
    //   this.email = "";
    // },
    // confirmInput() {
    //   this.output = this.nama;
    // },
    // addNewData(){
    //   this.
    // }
    addGroup() {
      console.warn(this.tim)
    },
    test() {
      console.log('click')
    },
  },
}
</script>
