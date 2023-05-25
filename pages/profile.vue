<template>
  <div class="flex justify-center mx-auto my-3">
    <div class="w-1/2">
      <form class="h-screen m-4">
        <center>
          <img
            :src="$store.state.profile.dataUser.photo"
            alt="photo"
            class="h-[100px] w-[100px] rounded-full"
          />
          <label
            for="myPhoto"
            class="cursor-pointer text-gray-500 inline-block text my-2"
            >Ubah Foto</label
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
            <a href="/editpassword" class="text-blue-500 my-auto">Ubah</a>
          </div>
          <div class="flex items-center justify-between relative">
            <input
              v-model="passKey"
              type="text"
              class="text-sm w-full text-black"
              disabled
            />
          </div>
        </div>
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
          // this.$route.go()
        })
        .catch(() => { alert('File size should be less than 1 MB') })
    },
    // handleFileChange(event) {
    //   const file = event.target.files[0]
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onload = (event) => {
    //     const img = new Image()
    //     img.src = event.target.result
    //     img.onload = () => {
    //       const canvas = document.createElement('canvas')
    //       const MAX_WIDTH = 100 // ubah sesuai dengan kebutuhan aplikasi Anda
    //       const MAX_HEIGHT = 100 // ubah sesuai dengan kebutuhan aplikasi Anda
    //       let width = img.width
    //       let height = img.height
    //       if (width > height) {
    //         if (width > MAX_WIDTH) {
    //           height *= MAX_WIDTH / width
    //           width = MAX_WIDTH
    //         }
    //       } else if (height > MAX_HEIGHT) {
    //         width *= MAX_HEIGHT / height
    //         height = MAX_HEIGHT
    //       }
    //       canvas.width = width
    //       canvas.height = height
    //       const ctx = canvas.getContext('2d')
    //       ctx.drawImage(img, 0, 0, width, height)
    //       canvas.toBlob((blob) => {
    //         this.$store
    //           .dispatch('profile/updateProfile', {
    //             id: this.$auth.user.id,
    //             photo: event.target.files[0],
    //           })
    //           .then((res) => {
    //             alert(res.message)
    //             this.$store.dispatch('profile/getdataUser', this.$auth.user.id)
    //             // this.$route.go()
    //           })
    //           .catch(() => alert('gagal'))
    //       }, file.type)
    //     }
    //   }
    // },
  },
}
</script>
