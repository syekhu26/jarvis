<template>
  <div class="flex justify-center items-center mt-24">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <div class="mt-8 text-center font-sans mb-9">
          <h1 class="text-xl font-bold mb-6 mt-3">Lupa Kata Sandi</h1>
          <p>Masukan email anda dibawah untuk mereset kata sandi anda.</p>
        </div>
        <div>
          <form action="">
            <div class="">
              <label
                for="email"
                class="mt-10 text-sm font-medium dark:text-white"
                >Email</label
              >
              <div class="mb-9">
                <input
                  v-model="email"
                  @input="emailValidate"
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Email"
                  required
                />
                <span v-if="emailError" class="text-red-500">{{
                  emailError
                }}</span>
              </div>
            </div>
            <button
              class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700 mb-6"
            >
              Selanjutnya
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
      email: '',
      emailError: '',
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
  },
}
</script>
