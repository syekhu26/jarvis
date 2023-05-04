<template>
  <div class="flex justify-center items-center mt-12">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-6 mt-3">Daftar Akun</h1>
        <div>
          <form action="">
            <div class="w-full my-3">
              <div class="my-2">
              <p for="username" class="text-sm font-medium dark:text-white"
                >Username</p
              >
              <input
                v-model="userName"
                type="text"
                class="w-full border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Username"
                required
              />
              <p
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
              </p>
            </div>
            <div class="my-2">
              <p for="email" class="text-sm font-medium dark:text-white"
                >Email</p
              >
              <input
                v-model="userEmail"
                type="email"
                class="w-full border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Email"
                required
              />
              <p
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
              </p>
            </div>
            <div class="my-2">
              <p for="no hp" class="text-sm font-medium dark:text-white"
                >No HP</p
              >
              <input
                v-model="userPhone"
                type="number"
                class="w-full border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan No HP"
                required
              />
              <p
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
              </p>
            </div>
            <div class="my-2">
              <p for="password" class="text-sm font-medium dark:text-white"
              >Password</p
              >
                <input
                  v-model="passKey"
                  type="password"
                  class="w-full border text-black px-4 py-2 col-span-2"
                  placeholder="Masukkan Password"
                  required
                />
                <p
                  v-if="passwordCorrect === false"
                  class="text-sm text-red-500 mb-2"
                >
                  minimal 8 karakter terdiri atas huruf kapital, huruf kecil, dan
                  angka
                </p>
                <p
                  v-if="passwordCorrect === true"
                  class="text-sm text-green-500 mb-2"
                >
                  oke
                </p>
            </div>
            <div class="my-2">
              <p
                for="password konfirmasi"
                class="text-sm font-medium dark:text-white"
                >Ulangi Password</p
              >
              <input
                v-model="repeatPass"
                type="password"
                class="w-full border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Password Ulang"
                required
              />
              <p
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
              </p>  
            </div>
            </div>
            <div class="mb-8 mt-1">
              Sudah punya akun?
              <NuxtLink to="/login" class="text-blue-500"
                >Silahkan login</NuxtLink
              >
            </div>
            <button
              class="text-base bg-slate-500 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
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
      userName: '',
      regexName: /^.{1,20}$/,

      userEmail: '',
      regexEmail:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      userPhone: '',
      regexPhone: /^(62|0)[0-9]{9,12}$/,

      passKey: '',
      regexPass: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,

      repeatPass: '',
      regexRepeatpass: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
    }
  },
  computed: {
    usernameCorrect() {
      return this.regexName.test(this.userName)
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
    repeatpassCorrect() {
      return this.regexRepeatpass.test(this.repeatPass)
    },
  },
}
</script>
