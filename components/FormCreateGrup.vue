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
          <div class="flex items-center justify-between">
            <div class="font-bold mb-6 mt-2">Buat Tim</div>
            <div
              class="w-10 h-10 rounded-full flex mt-3 top-5 right-5 cursor-pointer"
              @click="toggleModal = !toggleModal"
            >
              <iconSilangIcon />
            </div>
          </div>

          <!-- <p>{{ tim }}</p> -->
          <form @submit.prevent="addData">
            <div>
              <div>
                <label for="nama" class="mb-2 block text-sm"> Nama Tim</label>
                <input
                  v-model="title"
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama Tim"
                  required
                  class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                  @input="titleValidate"
                />
                <span v-if="titleError" class="text-red-500">{{
                  titleError
                }}</span>
                <span v-if="err.title" class="text-red-500"
                  >username {{ err.title[0] }}</span
                >
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
                  v-model="email"
                  type="email"
                  name="email"
                  class="py-2 border text-black pl-10 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Email"
                  required
                  @input="emailValidate"
                />
              </div>
              <span v-if="emailError" class="text-red-500">{{
                emailError
              }}</span>
              <div>
                <div
                  v-for="value in items"
                  :key="value"
                  class="bg-slate-200 rounded mb-2 px-2 flex items-center"
                >
                  {{ value }}
                  <div>
                    <button
                      v-if="item"
                      class="ml-2 mt-2"
                      type="button"
                      title="Remove"
                      @click="remove(index)"
                    >
                      <iconSilangIcon class="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center mt-2 mb-3 text-blue-600 cursor-pointer"
                @click="addEmail"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah email</span>
              </div>
            </div>
            <div class="mt-11 float-right px-5">
              <button
                type="submit"
                value="submit"
                class="mt-5 mb-6 bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white font-bold w-full rounded-lg float-right"
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
  // name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      toggleModal: false,
      // email: '',
      // tim: [
      //   {
      //     nama: " ",
      //     email: " ",
      //   },
      // ],
      items: [],
      err: {},
      errMessage: null,
      // grup: [
      //   {
      //     nama: '',
      //     email: [],
      //   },
      // ],

      title: this.item.title,
      titleError: '',
      email: this.item.items ?? '',
      emailError: '',
      photo: null,
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
    // addEmail() {
    //   if (!this.email) {
    //     return
    //   }
    //   this.grup.email.push(this.email)
    //   this.email = ''
    // },
    // remove(i) {
    //   this.items.splice(i, 1)
    // },
    // addGroup() {
    //   if (!this.grup) {
    //     return
    //   }
    //   this.dataGrup.push(this.grup)
    //   this.grup = [{ nama: '', email: '' }]
    // },
    // addData() {
    //   this.$emit('add-data', this.grup)
    // },
    addEmail() {
      if (!this.email) {
        return
      }
      this.items.push(this.email)
      this.email = ''
    },
    remove(index) {
      this.items.splice(index, 1)
    },
    titleValidate() {
      if (!this.title) {
        this.titleError = 'Anda belum mengisi nama tim'
      } else {
        this.titleError = ''
      }
    },
    emailValidate() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email.match(emailRegex)) {
        this.emailError = 'Email yang anda masukkan kurang sesuai'
      } else if (!this.email) {
        this.emailError = 'Anda belum memasukkan email anggota'
      } else {
        this.emailError = ''
      }
    },
    async addData() {
      try {
        await this.$store.dispatch('team/addGroup', {
          title: this.title,
          email: this.items,
          photo: this.photo
        })
      } catch (err) {
        // this.err = err.response.data
        // this.errMessage = err.response.data.message
        alert('ggl')
        // console.log(err)
      }
    },
    // addData() {
    //   this.$store.dispatch('team/addGroup', {
    //     title: this.title,
    //     email: this.items,
    //     photo: this.photo,
    //   }).then((res) => alert(res.errMessage)).catch(() => alert('gagal'))
    // }
  },
}
</script>

<!-- v-model="grup.nama" -->
