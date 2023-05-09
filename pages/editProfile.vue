<template>
  <form class="flex h-screen m-4" @submit.prevent="updateProfile">
    <div class="w-full flex justify-center mx-auto my-3">
      <div>
        <center>
          <img
            :src="userPhoto"
            alt=""
            class="w-[100px] h-[100px] rounded-full"
          />
          <a href="#" class="text-gray-500 ml-2">Ubah foto</a>
        </center>
        <p class="text-xl font-bold mt-4">Informasi Personal</p>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Nama pengguna</p>
          <input
            v-model="userName"
            type="text"
            class="border border-gray-300 text-sm w-full p-1 rounded-md"
            placeholder="Nama anda"
            disabled
          />
          <!-- <p v-if="usernameCorrect === false" class="text-sm text-red-500 mb-2">
            Nama pengguna harus diisi
          </p>
          <p v-if="usernameCorrect === true" class="text-sm text-green-500 mb-2">
            oke
          </p> -->
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Pekerjaan</p>
          <input
            v-model="userWork"
            type="text"
            class="border border-gray-300 text-sm w-full p-1 rounded-md"
            placeholder="Pekerjaan anda"
            disabled
          />
          <!-- <p v-if="workCorrect === false" class="text-sm text-red-500 mb-2">
            Masukkan pekerjan anda
          </p>
          <p v-if="workCorrect === true" class="text-sm text-green-500 mb-2">
            oke
          </p> -->
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Email</p>
          <input
            v-model="userEmail"
            type="email"
            class="border border-gray-300 text-sm w-full p-1 rounded-md"
            placeholder="Email anda"
          />
          <p v-if="emailCorrect === false" class="text-sm text-red-500 mb-2">
            Masukkan email anda untuk melakukan verifikasi
          </p>
          <p v-if="emailCorrect === true" class="text-sm text-green-500 mb-2">
            oke
          </p>
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Nomor telepon</p>
          <input
            v-model="userPhone"
            type="number"
            class="border border-gray-300 text-sm w-full p-1 rounded-md"
            placeholder="Nama anda"
            disabled
          />
          <!-- <p v-if="phoneCorrect === false" class="text-sm text-red-500 mb-2">
            Masukkan nomor telepon anda
          </p>
          <p v-if="phoneCorrect === true" class="text-sm text-green-500 mb-2">
            oke
          </p> -->
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Kata Sandi</p>
          <input
            v-model="passKey"
            type="password"
            class="border border-gray-300 text-sm w-full p-1 rounded-md"
            placeholder="Buat kata sandi anda"
          />
          <p v-if="passwordCorrect === false" class="text-sm text-red-500 mb-2">
            minimal 8 karakter terdiri atas huruf kapital, huruf kecil, dan angka
          </p>
          <p v-if="passwordCorrect === true" class="text-sm text-green-500 mb-2">
            oke
          </p>
        </div>
        <div class="flex justify-end">
          <button
            class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
// import {mapState} from 'vuex'
export default {
  data() {
    return {
      userPhoto: this.$store.state.profile.dataUser.photo,

      userName : this.$store.state.profile.dataUser.username,
      regexName : /^.{1,20}$/ ,

      userWork : this.$store.state.profile.dataUser.job,
      regexWork : /^[a-zA-Z]{1,50}$/ ,

      userEmail : this.$store.state.profile.dataUser.email,
      regexEmail : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,

      userPhone : this.$store.state.profile.dataUser.phone,
      regexPhone : /^(62|0)[0-9]{9,12}$/ ,

      passKey : '',
      regexPass : /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/ ,

    }
  },
  async asyncData({store}){
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
  layout: 'navbar',
  computed: {
    // ...mapState('profile', ['dataUser']),
    usernameCorrect() {
      return this.regexName.test(this.userName)
    },
    workCorrect() {
      return this.regexWork.test(this.userWork)
    },
    emailCorrect() {
      return this.regexEmail.test(this.userEmail)
    },
    phoneCorrect() {
      return this.regexPhone.test(this.userPhone)
    },
    passwordCorrect() {
      return this.regexPass.test(this.passKey)
    },
  },
  methods: {
    check(type,regex){
      this.error = regex.test(type)
    },
    updateProfil(){
      
    }
  },
}
</script>
