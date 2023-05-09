<template>
  <div>
    <ButtonCreateGrup @click="toggleModal = !toggleModal" />
    <!-- <CardGroup
      v-for="data in dataGrup"
      :key="data"
      :inputData="data.nama"
      class=""
    /> -->
    <div
      v-if="toggleModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-10"
    >
      <div>
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative mx-auto w-full max-w-2xl">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col px-8">
          <div class="font-bold mb-6 mt-2">Buat Tim</div>
          <!-- <p>{{ tim }}</p> -->
          <form @submit.prevent="addData">
            <div>
              <!-- <label for="nama" class="text-sm font-medium dark:text-black"
                >Nama tim</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="masukkan nama tim"
                required
              /> -->
              <div>
                <label for="nama" class="mb-2 block text-sm"> Nama Tim</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama Tim"
                  required
                  class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm">
                  Pilih Bagian Yang Terlibat</label
                >
              </div>
              <div class="relative text-gray-600 border">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <iconInviteIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  v-model="input"
                  class="py-2 border text-black pl-10 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Email"
                  required
                />
              </div>
              <div>
                <div>
                  <div
                    v-for="item in items"
                    :key="item"
                    class="bg-slate-200 rounded mb-2 px-2 flex items-center"
                  >
                    {{ item }}
                    <div>
                      <button
                        v-if="item"
                        class="ml-2 mt-2"
                        type="button"
                        @click="remove"
                        title="Remove"
                      >
                        <iconSilangIcon class="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                @click="addEmail"
                class="flex items-center mt-2 mb-3 text-blue-600 cursor-pointer"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah email</span>
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
      input: '',
      items: [''],
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
    addEmail() {
      if (!this.input) {
        return
      }
      this.items.push(this.input)
      this.input = ''
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    addGroup() {
      console.warn(this.tim)
    },
    test() {
      console.log('click')
    },
    addData() {
      this.$emit('add-data', this.grup)
    },
    addData() {
      this.$emit('add-data', this.grup)
    },
  },
}
</script>
