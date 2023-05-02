<template>
  <div class="flex justify-center items-center mt-12">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-6 mt-3 text-center">Daftar Akun</h1>
        <div>
          <form action="">
            <div class="">
              <label for="username" class="text-sm font-medium dark:text-white"
                >Username</label
              >
              <div class="mb-3">
                <input
                  type="text"
                  name="username"
                  v-model="username"
                  @input="usernameValidate"
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Username"
                  required
                />
                <div v-if="usernameError" class="text-red-500">
                  {{ usernameError }}
                </div>
              </div>
              <label
                for="email"
                class="mt-10 text-sm font-medium dark:text-white"
                >Email</label
              >
              <div class="mb-3">
                <input
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Email"
                  required
                />
              </div>
              <label for="no hp" class="text-sm font-medium dark:text-white"
                >Pekerjaan</label
              >
              <div class="mb-3">
                <input
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Pekerjaan"
                  required
                />
              </div>
              <label for="password" class="text-sm font-medium dark:text-white"
                >Kata Sandi</label
              >
              <div class="mb-3">
                <input
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Kata Sandi"
                  required
                />
              </div>
              <label
                for="password konfirmasi"
                class="text-sm font-medium dark:text-white"
                >Ulangi Kata Sandi</label
              >
              <div class="mb-3">
                <input
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Kata Sandi Lagi"
                  required
                />
              </div>
            </div>
            <div class="mb-8 mt-1">
              Sudah punya akun?
              <NuxtLink to="/login" class="text-blue-500"
                >Silahkan login</NuxtLink
              >
            </div>
            <button
              class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
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
  data() {
    return {
      username: '',
      usernameError: '',
    }
  },
  methods: {
    usernameValidate() {
      if (!this.username) {
        this.usernameError = 'Maaf,anda belum memasukkan username anda.'
      } else {
        this.usernameError = ''
      }
    },
  },
}
</script>
