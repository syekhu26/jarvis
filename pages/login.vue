<template>
  <div class="container flex justify-center items-center mt-24">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex item-center justify-center mb-5">
          <img
            src="../assets/img/logoipsum-245 1.png"
            alt="logo"
            class="rounded-full w-[52px] h-[41px] mx-3 my-auto"
          />
          <h1 class="text-2xl text-[#0F62FE] font-bold">Bantu.in</h1>
        </div>
        <!-- <h1 class="text-lg font-bold mb-6 mt-3">Masuk</h1> -->
        <div>
          <form action="" @submit.prevent="login">
            <div class="w-full my-3">
              <div class="my-2">
                <label for="email" class="text-sm"> Email </label>
                <input
                  @input="emailValidate"
                  v-model="email"
                  type="email"
                  class="w-full border text-black px-4 py-2 col-span-2"
                  placeholder="Masukkan Email"
                  required
                />
                <span v-if="emailError" class="text-red-500">{{
                  emailError
                }}</span>
                <!-- <p
                  v-if="usernameLoginCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  Nama pengguna harus diisi
                </p>
                <p
                  v-if="usernameLoginCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
              <div class="my-2">
                <label for="password" class="text-sm">
                  Kata Sandi
                </label>
                <div class="flex items-center justify-between relative">
                  <input
                    :type="inputTypeIcon"
                    @input="passwordValidate"
                    v-model="password"
                    class="w-full bg-transparent text-black px-4 outline-none border py-2"
                    placeholder="Masukkan Kata Sandi"
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
                <span v-if="passwordError" class="text-red-500">{{
                  passwordError
                }}</span>

                <!-- <p
                  v-if="passwordLoginCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  minimal 8 karakter terdiri atas huruf kapital, huruf kecil,
                  dan angka
                </p>
                <p
                  v-if="passwordLoginCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p> -->
              </div>
              <NuxtLink to="/forgotpassword">
                <div class="text-blue-600 float-right cursor-pointer">
                  Lupa Kata Sandi
                </div>
              </NuxtLink>
            </div>
            <!-- <div class="mb-8 mt-1">
              Belum punya akun?
              <NuxtLink to="/register" class="text-blue-500"
                >Silahkan daftar</NuxtLink
              >
            </div> -->
            <p class="text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
            <!-- <Message :message="error" v-if="error" /> -->
            <div class="mt-20">
              <button
                type="submit"
                class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
        <div class="mb-8 mt-8 justify-center items-center flex">
          Belum punya akun?
          <NuxtLink to="/register" class="text-blue-500 px-2 font-bold"
            >Daftar</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      error: null,
      errorMessage: '',
      inputTypeIcon: 'password',
      // userName: '',
      email: '',
      // regexName: /^.{1,20}$/,
      emailError: '',

      password: '',
      passwordError: '',
      // regexPass: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
    }
  },
  methods: {
    emailValidate() {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email.match(emailRegex)) {
        this.emailError = 'Email yang anda masukkan tidak valid'
      } else {
        this.emailError = ''
      }
    },
    passwordValidate() {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      if (!regex.test(this.password)) {
        this.passwordError =
          ' minimal 8 karakter terdiri atas huruf kapital, huruf kecil, dan angka'
      } else {
        this.passwordError = ''
      }
    },
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    async login() {
      try {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then((response) => {
            console.log(response.data)

            alert('Selamat Login Anda Berhasil')
          })
      } catch (error) {
        console.error(error)
        // this.error = error
        alert('Maaf, anda gagal login')
        this.errorMessage = 'Maaf, email atau kata sandi anda salah.'

        // const errorMessage =
        //   'Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.'
        // console.error(error) // Tampilkan kesalahan lengkap pada konsol
        // this.showError(errorMessage)
      }
    },
    // showError(errorMessage) {
    //   // Tampilkan pesan error ke pengguna, misalnya dengan menggunakan notifikasi atau komponen modal
    //   this.$toast.error(errorMessage) // Contoh menggunakan paket notifikasi "vue-toastification"

    //   // Atau, dapat memperbarui status di komponen untuk menampilkan pesan error di antarmuka pengguna
    //   this.error = errorMessage
    // },
  },
  computed: {
    // usernameLoginCorrect() {
    //   return this.regexName.test(this.userName)
    // },
    // passwordLoginCorrect() {
    //   return this.regexPass.test(this.password)
    // },
  },
}
</script>
<!-- methods: {
  
} -->
