<template>
  <div class="flex justify-center mx-auto my-3">
    <div class="w-1/2">
      <form class="h-screen m-4" @submit.prevent="updateProfile">
        <p class="text-xl font-bold mt-4">Ubah Data Diri</p>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Nama pengguna</p>
          <input
            v-model="userName"
            type="text"
            class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
            placeholder="Nama anda"
            @input="usernameValidate"
          />
          <span v-if="usernameError" class="text-red-500">{{
            usernameError
          }}</span>
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Pekerjaan</p>
          <input
            v-model="userWork"
            type="text"
            class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
            placeholder="Pekerjaan anda"
          />
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Email</p>
          <input
            v-model="userEmail"
            type="email"
            class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
            placeholder="Email anda"
            @input="emailValidate"
          />
          <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Nomor telepon</p>
          <input
            v-model="userPhone"
            type="number"
            class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
            placeholder="Nama anda"
            @input="phoneValidate"
          />
          <span v-if="phoneError" class="text-red-500">{{ phoneError }}</span>
        </div>
        <div class="flex justify-end">
          <!-- <button class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md">
              ubah profil
            </button> -->
          <button
            class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md"
          >
            simpan
          </button>
          <!-- <NuxtLink to="/changePassword" class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md">
              ganti password
            </NuxtLink> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'navbar',
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
//   async asyncData({ store }) {
//     await store.dispatch('profile/updateProfile', store.state.auth.user.id)
//   },
  data() {
    return {
      userName: this.$store.state.profile.dataUser.username,
      usernameError: '',

      userWork: this.$store.state.profile.dataUser.job,
      workError: '',

      userEmail: this.$store.state.profile.dataUser.email,
      emailError: '',

      userPhone: this.$store.state.profile.dataUser.phone,
      phoneError: '',

    }
  },
  methods: {
    usernameValidate() {
      const regexName = /^.{1,20}$/
      if (!this.userName.match(regexName)) {
        this.usernameError = 'Username anda terlalu panjang'
      } else {
        this.usernameError = ''
      }
    },
    workValidate() {
      const regexWork = /^[a-zA-Z]{1,50}$/
      if (!this.userWork.match(regexWork)) {
        this.workError = 'Nama pekerjaan yang anda masukkan tidak valid'
      } else {
        this.workError = ''
      }
    },
    emailValidate() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.userEmail.match(emailRegex)) {
        this.emailError = 'Email yang anda masukkan tidak valid'
      } else {
        this.emailError = ''
      }
    },
    phoneValidate() {
      const regexPhone = /^(62|0)[0-9]{9,12}$/
      if (!this.userPhone.match(regexPhone)) {
        this.phoneError = 'number yang anda masukkan tidak valid'
      } else {
        this.phoneError = ''
      }
    },
    updateProfile(){
        this.$store.dispatch('profile/updateProfile', {
            id: this.$auth.user.id,
            username: this.userName,
            email: this.userEmail,
            phone: this.userPhone,
            job: this.userWork,
        }).then((res) => alert(res.message)).catch(() => alert('gagal'))
    },
  },
}
</script>
