<template>
  <div class="flex justify-center items-center mt-24">
    <div class="w-full max-w-lg">
      <div
        class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4 w-[414px] h-[474px]"
      >
        <div class="item-center justify-center text-center mb-5">
          <div class="font-bold text-xl">Buat Kata Sandi Baru</div>
          <div class="text-black mt-3">
            Kata sandi anda harus berbeda dengan yang sebelumnya
          </div>
        </div>
        <!-- <h1 class="text-lg font-bold mb-6 mt-3">Masuk</h1> -->
        <div>
          <form action="">
            <div class="w-full my-3">
              <div class="my-2">
                <label for="password" class="text-sm font-medium"
                  >Kata Sandi</label
                >
                <div class="flex items-center justify-between relative">
                  <input
                    @input="passwordValidate"
                    v-model="password"
                    :type="inputTypeIcon"
                    class="w-full border text-black px-4 py-2 col-span-2 outline-none bg-transparent"
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
                <span>Minimal 8 karakter, 1 huruf besar dan 1 angka.</span>
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
                <label for="password konfirmasi" class="text-sm font-medium"
                  >Konfirmasi Kata Sandi</label
                >
                <div class="flex items-center justify-between relative">
                  <input
                    v-model="password_confirmation"
                    :type="inputType"
                    class="w-full border text-black px-4 py-2 col-span-2"
                    placeholder="Masukkan konfirmasi Kata Sandi"
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
                <span>Kedua kata sandi harus sama.</span>
                <span class="text-red-500" v-if="passwordMatch"
                  >Konfirmasi password tidak sesuai</span
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
              <!-- <NuxtLink to="/forgotpassword">
                <div class="text-sky-500 float-right cursor-pointer">
                  Lupa Kata Sandi
                </div>
              </NuxtLink> -->
            </div>
            <!-- <div class="mb-8 mt-1">
                Belum punya akun?
                <NuxtLink to="/register" class="text-blue-500"
                  >Silahkan daftar</NuxtLink
                >
              </div> -->
            <!-- <Message :message="error" v-if="error" /> -->
            <div class="mt-12 mb-9">
              <button
                type="submit"
                class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
              >
                Reset Kata Sandi
              </button>
            </div>
          </form>
        </div>
        <!-- <div class="mb-8 mt-8 justify-center items-center flex">
          Belum punya akun?
          <NuxtLink to="/register" class="text-blue-500 px-2">Daftar</NuxtLink>
        </div> -->
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  async asyncData({ params }) {
    const token = params.token
    const response = await fetch(
      `https://bantuin.fly.dev/api/reset_password/${token}`
    )
    return { user: response.data }
  },
  auth: false,
  data() {
    return {
      user: {},
      password: '',
      password_confirmation: '',
      inputTypeIcon: 'password',
      inputType: 'password',
      // token: 'this.$route.query.token',
    }
  },
  computed: {
    passwordMatch() {
      return this.password !== this.password_confirmation
    },
  },
  methods: {
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    Toggle() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
    },
    passwordValidate() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      if (!regex.test(this.password)) {
        this.passwordError =
          ' minimal 8 karakter terdiri atas huruf kapital, huruf kecil, symbol dan angka'
      } else {
        this.passwordError = ''
      }
    },
    // async resetPassword() {
    //   const data = { token: this.$route.params.token, password: this.password }
    //   const response = await this.$axios.$post(
    //     'https://bantuin.fly.dev/api/reset_password',
    //     data
    //   )
    //   return { user: response.data }
    // },
    // async resetPassword() {
    //   try {
    //     const response = await this.$axios.get(
    //       `https://bantuin.fly.dev/api/reset_password`,
    //       { token: this.$route.params.token, password: this.password }
    //     )
    //     this.message = response.data.message
    //     this.isSuccess = true
    //   } catch (error) {
    //     this.message = error.response.data.message
    //     this.isSuccess = false
    //   }
    // },
  },
}
</script>
