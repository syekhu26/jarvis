<template>
  <div class="flex justify-center items-center mt-12">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-6 mt-3 text-center">Daftar akun</h1>
        <div>
          <form action="" @submit.prevent="register">
            <div class="w-full my-3">
              <div class="my-2">
                <label for="username" class="text-sm">Username</label>
                <input
                  v-model="username"
                  @input="usernameValidate"
                  type="text"
                  class="w-full border text-black px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Masukan Username"
                  required
                />
                <span v-if="error.username" class="text-red-500"
                  >username {{ error.username[0] }}</span
                >
                <span v-if="usernameError" class="text-red-500">
                  {{ usernameError }}</span
                >

                <!-- <span></span> -->
                <!-- <p
                  v-if="usernameCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  Nama pengguna harus diisi
                </p>
                <p
                  v-if="usernameCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
              <div class="my-2">
                <label for="email" class="text-sm">Email</label>
                <input
                  v-model="email"
                  @input="emailValidate"
                  type="email"
                  class="w-full border text-black px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Masukan Email"
                  required
                />
                <span v-if="error.email" class="text-red-500"
                  >Email {{ error.email[0] }}</span
                >
                <span v-if="emailError" class="text-red-500">
                  {{ emailError }}</span
                >
                <!-- <p
                  v-if="emailCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  Masukkan email anda untuk melakukan verifikasi
                </p>
                <p
                  v-if="emailCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
              <div class="my-2">
                <label for="no hp" class="text-sm">Nomor HP</label>
                <input
                  @input="numberValidate"
                  v-model="phone"
                  type="text"
                  class="w-full border text-black px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Masukan nomor HP"
                  required
                />
                <span v-if="error.phone" class="text-red-500"
                  >Nomor Hp {{ error.phone[0] }}</span
                >
                <span v-if="numberError" class="text-red-500">
                  {{ numberError }}</span
                >
                <!-- <p
                  v-if="phoneCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  Masukkan nomor telepon anda
                </p>
                <p
                  v-if="phoneCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
              <div class="my-2">
                <label for="job" class="text-sm">Pekerjaan</label>
                <input
                  v-model="job"
                  @input="jobValidate"
                  type="text"
                  class="w-full border text-black px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Masukan Pekerjaan"
                  required
                />
                <span v-if="jobError" class="text-red-500">{{ jobError }}</span>
                <!-- <p
                  v-if="usernameCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  Nama pengguna harus diisi
                </p>
                <p
                  v-if="usernameCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>

              <div class="my-2">
                <label for="password" class="text-sm">Kata sandi</label>
                <div class="flex items-center justify-between relative">
                  <input
                    @input="passwordValidate"
                    v-model="password"
                    :type="inputTypeIcon"
                    class="w-full border text-black px-4 py-2 focus:outline-none focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Masukan kata sandi"
                    required
                  />
                  <div
                    @click.prevent="ToggleIcon"
                    class="absolute inset-y-0 flex items-center right-2"
                  >
                    <i v-if="inputTypeIcon == 'password'"><iconEyeShow /></i>
                    <i v-else><iconEyeHide /></i>
                  </div>
                </div>
                <div class="text-[#697077]">
                  Minimal terdiri 8 karakter, 1 huruf besar, dan 1 angka.
                </div>
                <span v-if="passwordError" class="text-red-500">{{
                  passwordError
                }}</span>
                <!-- <p
                  v-if="passwordCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  minimal 8 karakter terdiri atas huruf kapital, huruf kecil,
                  dan angka
                </p>
                <p
                  v-if="passwordCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
              <div class="my-2">
                <label for="password konfirmasi" class="text-sm"
                  >Ulangi kata sandi</label
                >
                <div class="flex items-center justify-between relative">
                  <input
                    v-model="password_confirmation"
                    :type="inputType"
                    class="w-full border text-black px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Masukan kata sandi lagi"
                    required
                  />
                  <div
                    @click.prevent="Toggle"
                    class="absolute inset-y-0 flex items-center right-2"
                  >
                    <i v-if="inputType == 'password'"><iconEyeShow /></i>
                    <i v-else><iconEyeHide /></i>
                  </div>
                </div>
                <span class="text-red-500" v-if="passwordMatch"
                  >Ulangi kata sandi tidak sesuai</span
                >
                <!-- <p
                  v-if="repeatpassCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  kata sandi anda tidak sesuai
                </p>
                <p
                  v-if="repeatpassCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
            </div>
            <!-- <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p> -->
            <!-- <div class="mb-8 mt-1">
              Sudah punya akun?
              <NuxtLink to="/login" class="text-blue-500"
                >Silahkan login</NuxtLink
              >
            </div> -->
            <button
              class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  data() {
    return {
      error: {},
      errorMessage: null,
      inputTypeIcon: 'password',
      inputType: 'password',
      // succes: false,
      username: '',
      usernameError: '',

      // regexName: /^.{1,20}$/,

      email: '',
      emailError: '',
      // regexEmail:
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      phone: '',
      numberError: '',
      validPhone: null,
      // regexPhone: /^(62|0)[0-9]{9,12}$/,

      password: '',
      passwordError: '',
      job: '',
      jobError: '',
      // regexPass: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,

      password_confirmation: '',
      // regexRepeatpass: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
    }
  },
  computed: {
    passwordMatch() {
      return this.password !== this.password_confirmation
    },
    // matchConfirmValidate() {
    //   return this.confirmPasswordValidate()
    // },
    // usernameCorrect() {
    //   return this.regexName.test(this.userName)
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
    // repeatpassCorrect() {
    //   return this.regexRepeatpass.test(this.repeatPass)
    // },
  },
  methods: {
    // const username = /^[a-zA-Z]+$/
    //   if (!this.username.match(username)) {
    //     this.usernameError = 'Maaf, username belum sesuai'
    //   }
    usernameValidate() {
      if (!this.username) {
        this.usernameError = 'Maaf, anda belum memasukan username anda.'
      } else {
        this.usernameError = ''
      }
    },
    emailValidate() {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email.match(emailRegex)) {
        this.emailError = 'Email yang anda masukkan tidak valid'
      } else if (this.error.email) {
        this.error.email = null
      } else {
        this.emailError = ''
      }
    },
    numberValidate() {
      const validationRegex = /^\d{10,13}$/
      // this.validPhone = phoneRegex.test(this.phone)
      if (!validationRegex.test(this.phone)) {
        this.numberError = 'No hp yang anda masukkan tidak valid'
      } else if (this.error.phone) {
        this.error.phone = null
      } else {
        this.numberError = ''
      }
    },
    jobValidate() {
      if (!this.job) {
        this.jobError = 'Anda wajib mengisi pekerjaan.'
      } else {
        this.jobError = ''
      }
    },
    passwordValidate() {
      // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      // if (!regex.test(this.password)) {
      //   this.passwordError =
      //     ' minimal 8 karakter terdiri atas huruf kapital, huruf kecil, dan angka'
      // } else {
      //   this.passwordError = ''
      // }
      if (!this.password) {
        this.passwordError = 'Maaf, anda belum memasukan kata sandi anda.'
      } else {
        this.passwordError = ''
      }
    },
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    Toggle() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
    },
    async register() {
      try {
        await this.$axios
          .post('register', {
            username: this.username,
            email: this.email,
            phone: this.phone,
            job: this.job,
            password: this.password,
            password_confirmation: this.password_confirmation,
          })
          .then((response) => {
            console.log(response.data)

            alert(
              'Selamat Anda berhasil melakukan pendaftaran, silahkan cek email'
            )
            this.$router.push('/login')
          })
        // return {
        //   success: true,
        //   message: 'Registrasi berhasil!',
        // }
        // await this.$auth.loginWith('local', {
        //   data: {
        //     email: this.email,
        //     password: this.password,
        //   },
        // })
      } catch (error) {
        // if (error.response.status === 422) {
        //   this.usernameError = 'Username Telah Terpakai'
        //   this.emailError = 'Email Telah Terpakai'
        //   this.numberError = 'No hp Telah Terpakai'
        // }
        // this.error = error.response.data.message.email
        // // this.error = e
        alert('Maaf anda gagal melakukan pendaftaran')
        this.error = error.response.data.data
        this.errorMessage = error.response.data.message
        // console.log(error)
      }
    },
  },
}
</script>
