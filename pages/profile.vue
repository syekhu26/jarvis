<template>
  <div class="flex justify-center mx-auto my-3">
    <div class="w-1/2">
      <form class="h-screen m-4">
        <center>
          <img
            :src="avatar"
            alt="photo"
            class="h-[100px] w-[100px] rounded-full object-contain bg-gray-200"
          />
          <label
            for="myPhoto"
            class="cursor-pointer text-gray-500 inline-block text my-2"
            >Edit Foto Profil</label
          >
          <a href="#">
            <input
              type="file"
              name="myPhoto"
              id="myPhoto"
              class="text-gray-500 bg-none"
              @change="updatePhoto"
              hidden
            />
          </a>
        </center>
        <div class="flex justify-between mt-4">
          <p class="text-xl font-bold">Informasi Personal</p>
          <a href="/editprofile" class="text-blue-500 my-auto">Ubah</a>
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-1">Nama pengguna</p>
          <input
            v-model="userName"
            type="text"
            class="text-sm w-full"
            disabled
          />
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-1">Pekerjaan</p>
          <input
            v-model="userWork"
            type="text"
            class="text-sm w-full"
            disabled
          />
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-1">Email</p>
          <input
            v-model="userEmail"
            type="email"
            class="text-sm w-full"
            disabled
          />
        </div>
        <div class="my-4">
          <p class="text-sm text-gray-500 my-1">Nomor telepon</p>
          <input
            v-model="userPhone"
            type="text"
            class="text-sm w-full"
            disabled
          />
        </div>
        <div class="h-[1px] w-full bg-gray-300 my-2"></div>
        <div class="my-4">
          <div class="flex justify-between my-1">
            <p class="text-sm text-gray-500">Kata Sandi</p>
            <a href="/editpassword">
              <IconVectorRight />
            </a>
          </div>
        </div>
        <button
          @click="hapus"
          class="my-4 w-full h-12 text-[20px] bg-white rounded border border-red-500"
        >
          Hapus Account
        </button>
      </form>
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
      photoUpdate: null,

      userName: this.$store.state.profile.dataUser.username,

      userWork: this.$store.state.profile.dataUser.job,

      userEmail: this.$store.state.profile.dataUser.email,

      userPhone: this.$store.state.profile.dataUser.phone,

      inputTypeIcon: 'passKey',
      passKey: '***',
    }
  },
  computed: {
    avatar() {
      return (
        this.$store.state.profile.dataUser.photo ||
        require('@/assets/img/profile-user-svgrepo-com.png')
      )
    },
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
        })
        .catch(() => {
          alert('File size should be less than 1 MB')
        })
    },
    // async hapus() {
    //   try {
    //     await this.$axios.post('https://bantuin.fly.dev/api/users',)
    //     alert('Permintaan reset password berhasil dikirimkan ke email Anda.')
    //   } catch (error) {
    //     alert('Terjadi error saat mengirimkan permintaan reset password.')
    //   }
    // },
    hapus() {
      this.$store.dispatch('profile/deleteUser', this.$auth.user.id)
      // this.$router.go()
      alert('account anda berhasil terhapus')
    },
  },
}
</script>
