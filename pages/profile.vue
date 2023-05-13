<template>
  <div class="flex justify-center mx-auto my-3">
    <div class="w-1/2">
      <form class="h-screen m-4">
        <center>
          <img
            :src="$store.state.profile.dataUser.photo"
            alt=""
            class="w-[100px] h-[100px] rounded-full"
          />
          <input type="file" @input="updatePhoto" />
          <!-- <a href="#" class="text-gray-500 ml-2">Edit Foto Profil</a> -->
        </center>
        <p class="text-xl font-bold mt-4">Informasi Personal</p>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Nama pengguna</p>
          <input
            v-model="userName"
            type="text"
            class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
            placeholder="Nama anda"
            disabled
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
            disabled
          />
        </div>
        <div class="my-2">
          <p class="text-sm mt-2 mb-2">Email</p>
          <input
            v-model="userEmail"
            type="email"
            class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
            placeholder="Email anda"
            disabled
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
            disabled
            @input="phoneValidate"
          />
          <span v-if="phoneError" class="text-red-500">{{ phoneError }}</span>
        </div>
        <div class="my-2">
          <div>
            <p class="text-sm mt-2 mb-2">Kata Sandi</p>
            <p></p>
          </div>
          <div class="flex items-center justify-between relative">
            <input
              v-model="passKey"
              :type="inputTypeIcon"
              class="border border-gray-300 bg-gray-200 text-sm w-full p-1 rounded-md px-2"
              placeholder="Buat kata sandi anda"
              @input="passValidate"
            />
            <div
              class="absolute inset-y-0 flex items-center right-2"
              @click.prevent="ToggleIcon"
            >
              <i v-if="inputTypeIcon == 'passKey'"><iconEyeShow /></i>
              <i v-else><iconEyeHide /></i>
            </div>
          </div>
          <span v-if="passError">{{ passError }}</span>
          <!-- <p v-if="passwordCorrect === false" class="text-sm text-red-500 mb-2">
            minimal 8 karakter terdiri atas huruf kapital, huruf kecil, dan
            angka
          </p>
          <p
            v-if="passwordCorrect === true"
            class="text-sm text-green-500 mb-2"
          >
            oke
          </p> -->
        </div>
        <div class="flex justify-end">
          <!-- <button class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md">
            ubah profil
          </button> -->
          <a
            href="/editprofile"
            class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md"
            >ubah profil</a
          >
          <!-- <NuxtLink to="/changePassword" class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md">
            ganti password
          </NuxtLink> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// import {mapState} from 'vuex'
export default {
  layout: 'navbar',
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
  data() {
    return {
      // userPhoto: this.$store.state.profile.dataUser.photo,
      photoUpdate: null,

      userName: this.$store.state.profile.dataUser.username,
      usernameError: '',

      userWork: this.$store.state.profile.dataUser.job,
      // regexWork: /^[a-zA-Z]{1,50}$/,

      userEmail: this.$store.state.profile.dataUser.email,
      emailError: '',

      userPhone: this.$store.state.profile.dataUser.phone,
      phoneError: '',

      inputTypeIcon: 'passKey',
      passKey: '',
      passError: '',
    }
  },
  computed: {
    // ...mapState('profile', ['dataUser']),
    // usernameCorrect() {
    //   return this.regexName.test(this.userName)
    // },
    // workCorrect() {
    //   return this.regexWork.test(this.userWork)
    // },
    // emailCorrect() {
    //   return this.regexEmail.test(this.userEmail)
    // },
    // phoneCorrect() {
    //   return this.regexPhone.test(this.userPhone)
    // },
    // passwordCorrect() {
    //   return this.regexPass.test(this.passKey)
    // },
  },
  methods: {
    ToggleIcon() {
      this.inputTypeIcon = this.inputTypeIcon === 'passKey' ? 'text' : 'passKey'
    },
    updatePhoto(event) {
      this.$store
        .dispatch('profile/updateProfile', {
          id: this.$auth.user.id,
          photo: event.target.files[0],
        })
        .then((res) => {
          alert(res.message)
          this.$store.dispatch('profile/getdataUser', this.$auth.user.id)
          // this.$route.go()
        })
        .catch(() => alert('gagal'))
    },
    // usernamelValidate() {
    //   const regexName = /^.{1,20}$/
    //   if (!this.userName.match(regexName)) {
    //     this.usernameError = 'Username anda terlalu panjang'
    //   } else {
    //     this.usernameError = ''
    //   }
    // },
    // emailValidate() {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //   if (!this.userEmail.match(emailRegex)) {
    //     this.emailError = 'Email yang anda masukkan tidak valid'
    //   } else {
    //     this.emailError = ''
    //   }
    // },
    // phoneValidate() {
    //   const regexPhone = /^(62|0)[0-9]{9,12}$/
    //   if (!this.userPhone.match(regexPhone)) {
    //     this.phoneError = 'number yang anda masukkan tidak valid'
    //   } else {
    //     this.phoneError = ''
    //   }
    // },
    // passValidate() {
    //   const passRegex =
    //     /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/
    //   if (!this.passKey.match(passRegex)) {
    //     this.passError = 'pass yang anda masukkan tidak valid'
    //   } else {
    //     this.passError = ''
    //   }
    // },
    // check(type, regex) {
    //   this.error = regex.test(type)
    // },
    // updateProfil() {},
  },
}
</script>
