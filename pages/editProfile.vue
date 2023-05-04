<template>
  <form class="flex w-full h-screen mx-9 m-2" @v-on:submit="submitEditprofil">
    <div class="w-[20%] my-4 mx-2">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        class="w-[100px] h-[100px] rounded-full"
      />
      <a href="#" class="text-gray-500 ml-2">Ubah foto</a>
    </div>
    <div class="w-full mx-2 my-3">
      <div class="my-2">
        <p>Nama pengguna</p>
        <input
          v-model="userName"
          type="text"
          class="border border-gray-300 w-2/3 p-1 rounded-md"
          placeholder="Nama anda"
        />
        <p v-if="usernameCorrect === false" class="text-sm text-red-500 mb-2">
          Nama pengguna harus diisi
        </p>
        <p v-if="usernameCorrect === true" class="text-sm text-green-500 mb-2">
          oke
        </p>
      </div>
      <div class="my-2">
        <p>Pekerjaan</p>
        <input
          v-model="userWork"
          type="text"
          class="border border-gray-300 w-2/3 p-1 rounded-md"
          placeholder="Pekerjaan anda"
        />
        <p v-if="workCorrect === false" class="text-sm text-red-500 mb-2">
          Masukkan pekerjan anda
        </p>
        <p v-if="workCorrect === true" class="text-sm text-green-500 mb-2">
          oke
        </p>
      </div>
      <div class="my-2">
        <p>Email</p>
        <input
          v-model="userEmail"
          type="email"
          class="border border-gray-300 w-2/3 p-1 rounded-md"
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
        <p>Nomor telepon</p>
        <input
          v-model="userPhone"
          type="number"
          class="border border-gray-300 w-2/3 p-1 rounded-md"
          placeholder="Nama anda"
        />
        <p v-if="phoneCorrect === false" class="text-sm text-red-500 mb-2">
          Masukkan nomor telepon anda
        </p>
        <p v-if="phoneCorrect === true" class="text-sm text-green-500 mb-2">
          oke
        </p>
      </div>
      <div class="my-2">
        <p>Kata Sandi</p>
        <input
          v-model="passKey"
          type="password"
          class="border border-gray-300 w-2/3 p-1 rounded-md"
          placeholder="Buat kata sandi anda"
        />
        <p v-if="passwordCorrect === false" class="text-sm text-red-500 mb-2">
          minimal 8 karakter terdiri atas huruf kapital, huruf kecil, dan angka
        </p>
        <p v-if="passwordCorrect === true" class="text-sm text-green-500 mb-2">
          oke
        </p>
      </div>
      <div class="my-2">
        <p>Ulangi kata sandi</p>
        <input
          v-model="repeatPass"
          type="password"
          class="border border-gray-300 w-2/3 p-1 rounded-md"
          placeholder="Ulangi kata sandi anda"
        />
        <p v-if="repeatpassCorrect === false" class="text-sm text-red-500 mb-2">
          kata sandi anda tidak sesuai
        </p>
        <p v-if="repeatpassCorrect === true" class="text-sm text-green-500 mb-2">
          oke
        </p>
      </div>
      <div class="w-full my-3">
        <button
          class="absolute w-1/4 bg-blue-500 text-white right-12 my-4 mx-4 p-2 rounded-md"
        >
          Simpan
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      userName : '',
      regexName : /^.{1,20}$/ ,

      userWork : '',
      regexWork : /^[a-zA-Z]{1,50}$/ ,

      userEmail : '',
      regexEmail : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,

      userPhone : '',
      regexPhone : /^(62|0)[0-9]{9,12}$/ ,

      passKey : '',
      regexPass : /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/ ,

      repeatPass : '',
      regexRepeatpass : /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/ ,
    }
  },
  layout: 'home',
  computed: {
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
    repeatpassCorrect() {
      return this.regexRepeatpass.test(this.repeatPass)
    },
  },
  methods : {
    submitEditprofil(){
      if( this.passKey === this.repeatPass ) {
        console.log('oke')
      }
    }
  }
}
</script>
