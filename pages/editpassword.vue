<template>
  <div class="flex justify-center mx-auto my-3">
    <div class="w-1/2">
      <form class="h-screen m-4" @submit.prevent="submit">
        <p class="text-xl font-bold mt-4">Ubah Kata Sandi</p>
        <div class="my-4">
          <p class="text-sm text-gray-600 my-2">Kata Sandi lama</p>
          <div class="flex items-center justify-between relative">
            <input
              v-model="oldPass"
              :type="inputTypeIcon"
              class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
              placeholder="Masukkan kata sandi lama"
              @input="passwordValidate"
            />
            <div
              @click.prevent="ToggleIcon"
              class="absolute inset-y-0 flex items-center right-2"
            >
              <i v-if="inputTypeIcon == 'password'"><iconEyeShow /></i>
              <i v-else><iconEyeHide /></i>
            </div>
          </div>
          <span v-if="oldPassError" class="text-red-500">{{
            oldPassError
          }}</span>
        </div>
        <div class="h-[1px] w-full bg-gray-300 my-2"></div>
        <div class="my-4">
          <p class="text-sm text-gray-600 my-2">Kata Sandi Baru</p>
          <div class="flex items-center justify-between relative">
            <input
              v-model="newPass"
              :type="inputTypeIconNew"
              class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
              placeholder="Masukkan kata sandi baru"
              @input="passNewValidate"
            />
            <div
              @click.prevent="ToggleNew"
              class="absolute inset-y-0 flex items-center right-2"
            >
              <i v-if="inputTypeIconNew == 'password'"><iconEyeShow /></i>
              <i v-else><iconEyeHide /></i>
            </div>
          </div>
          <p class="text-gray-500 text-sm">Kata sandi harus terdiri 8 kata, 1 huruf besar, 1 angka.</p>
          <span v-if="newPassError" class="text-red-500">{{
            newPassError
          }}</span>
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-600 my-2">Ulangi Kata Sandi Baru</p>
          <div class="flex items-center justify-between relative">
            <input
              v-model="repeatNewPass"
              :type="inputTypeIconRepeat"
              class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3 z-1"
              placeholder="Masukkan ulang kata sandi baru"
              @input="passRepeatValidate"
            />
            <div
              @click.prevent="ToggleRepeat"
              class="absolute inset-y-0 flex items-center right-2"
            >
              <i v-if="inputTypeIconRepeat == 'password'"><iconEyeShow /></i>
              <i v-else><iconEyeHide /></i>
            </div>
          </div>
          <span v-if="repeatError" class="text-red-500">{{ repeatError }}</span>
        </div>
        <div class="flex justify-end">
          <button
            class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md z-1"
          >
            Simpan
          </button>
        </div>
      </form>
      <p v-if="error">{{ error }}</p>
      <p v-if="status">{{ status }}</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'navbar',
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
  data() {
    return {
      error: {},
      errorMessage: null,

      inputTypeIcon: 'password',
      inputTypeIconNew: 'password',
      inputTypeIconRepeat: 'password',

      oldPass: '',
      oldPassError: '',

      newPass: '',
      newPassError: '',

      repeatNewPass: '',
      repeatError: '',
    }
  },
  methods: {
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    ToggleNew() {
      this.inputTypeIconNew =
        this.inputTypeIconNew === 'password' ? 'text' : 'password'
    },
    ToggleRepeat() {
      this.inputTypeIconRepeat =
        this.inputTypeIconRepeat === 'password' ? 'text' : 'password'
    },
    passwordValidate() {
      const regex = /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
      if (!regex.test(this.oldPass)) {
        this.oldPassError =
          ' Kata sandi harus terdiri 8 kata, 1 huruf besar, 1 angka. '
      } else {
        this.oldPassError = ''
      }
    },
    passNewValidate() {
      const regex = /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
      if (!regex.test(this.newPass)) {
        this.newPassError =
          ' Kata sandi tidak memenuhi syarat '
      } else {
        this.newPassError = ''
      }
    },
    passRepeatValidate() {
      if (this.newPass !== this.repeatNewPass) {
        this.repeatError = ' Kata sandi tidak sesuai '
      } else {
        this.repeatError = ''
      }
    },
    async submit() {
      try {
        await this.$axios
          .put('update_password', {
            current_password: this.oldPass,
            password: this.newPass,
            password_confirmation: this.repeatNewPass,
          })
          .then((response) => {
            console.log(response.data)
            alert(response.data.message)
            this.$router.push('/profile');
          })
      } catch (error) {
        this.error = error.response.data.data
        this.errorMessage = error.response.data.message
      }
    },
  },
}
</script>
