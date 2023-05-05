<template>
  <div class="flex justify-center items-center mt-24">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex item-center justify-center mb-5">
          <img
            src="../assets/img/logoipsum-245 1.png"
            alt="logo"
            class="rounded-full w-[52px] h-[41px] mx-3 my-auto"
          />
          <h1 class="text-2xl text-[#0F62FE] font-[IBM Plex Sans]">Bantu.in</h1>
        </div>
        <!-- <h1 class="text-lg font-bold mb-6 mt-3">Masuk</h1> -->
        <div>
          <form action="" @submit.prevent="login">
            <div class="w-full my-3">
              <div class="my-2">
                <p for="email" class="text-sm font-medium dark:text-white">
                  Email
                </p>
                <input
                  v-model="email"
                  type="text"
                  class="w-full border text-black px-4 py-2 col-span-2"
                  placeholder="Masukkan Email"
                  required
                />
                <p
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
                </p>
              </div>
              <div class="my-2">
                <p for="password" class="text-sm font-medium dark:text-white">
                  Password
                </p>
                <input
                  :type="inputTypeIcon"
                  v-model="password"
                  class="w-full border text-black px-4 py-2 col-span-2"
                  placeholder="Masukkan Password"
                  required
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-[470px] -top-9"
                  @click.prevent="ToggleIcon"
                >
                  <i v-if="inputTypeIcon == 'password'"><iconEyeShow /></i>
                  <i v-else><iconEyeHide /></i>
                </div>
                <p
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
                </p>
              </div>
              <NuxtLink to="/resetpassword">
                <div class="text-sky-500 float-right cursor-pointer">
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
          <NuxtLink to="/register" class="text-blue-500">Daftar</NuxtLink>
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
      inputTypeIcon: 'password',
      userName: '',
      email: '',
      regexName: /^.{1,20}$/,

      password: '',
      regexPass: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
    }
  },
  methods: {
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
      } catch (e) {
        this.error = e
      }
    },
  },
  computed: {
    usernameLoginCorrect() {
      return this.regexName.test(this.userName)
    },
    passwordLoginCorrect() {
      return this.regexPass.test(this.password)
    },
  },
}
</script>
<!-- methods: {
  
} -->
