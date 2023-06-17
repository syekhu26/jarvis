<template>
  <div class="flex justify-center mx-auto my-3">
    <div class="w-1/2">
      <form class="h-screen m-4" @submit.prevent="updateProfile">
        <p class="text-xl font-bold mt-4">Informasi Personal</p>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-2">Nama pengguna</p>
          <input
            v-model="userName"
            type="text"
            class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
            placeholder="Nama anda"
            @input="usernameValidate"
          />
          <span v-if="usernameError" class="text-red-500">{{
            usernameError
          }}</span>
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-2">Pekerjaan</p>
          <input
            v-model="userWork"
            type="text"
            class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
            placeholder="Pekerjaan anda"
            @input="workValidate"
          />
          <span v-if="workError" class="text-red-500">{{ workError }}</span>
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-2">Email</p>
          <input
            v-model="userEmail"
            type="email"
            class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
            placeholder="Email anda"
            disabled
            @input="emailValidate"
          />
          <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
        </div>
        <div class="my-2">
          <p class="text-sm text-gray-500 my-2">Nomor telepon</p>
          <input
            v-model="userPhone"
            type="text"
            class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
            placeholder="Nama anda"
            @input="phoneValidate"
          />
          <span v-if="phoneError" class="text-red-500">{{ phoneError }}</span>
        </div>
        <div class="flex justify-end">
          <button
            class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md"
          >
            Simpan
          </button>
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
  data() {
    return {
      userName: this.$auth.state.user.data.username,
      usernameError: '',

      userWork: this.$auth.state.user.data.job,
      workError: '',

      userEmail: this.$auth.state.user.data.email,
      emailError: '',

      userPhone: this.$auth.state.user.data.phone,
      phoneError: '',
    }
  },
  methods: {
    usernameValidate() {
      const regexName = /^[a-zA-Z\s]{1,50}$/
      if (!this.userName.match(regexName)) {
        this.usernameError = 'Nama pengguna yang anda masukkan tidak valid'
      } else {
        this.usernameError = ''
      }
    },
    workValidate() {
      const regexWork = /^[a-zA-Z\s]{1,50}$/
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
        this.phoneError = 'nomor yang anda masukkan tidak valid'
      } else {
        this.phoneError = ''
      }
    },
    updateProfile() {
      this.$store
        .dispatch('profile/updateProfile', {
          id: this.$auth.state.user.data.id,
          username: this.userName,
          // email: this.userEmail,
          phone: this.userPhone,
          job: this.userWork,
        })
        .then((res) => {
            alert(res.message)
            this.$router.push('/profile')
        })
        .catch(() => {
          alert('profile updated unsuccessfully')
        })
    },
  },
}
</script>
