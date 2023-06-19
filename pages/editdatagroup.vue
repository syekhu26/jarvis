<template>
    <div class="flex justify-center mx-auto my-3">
      <div class="w-1/2">
        <form class="h-screen m-4" @submit.prevent="updateTeam">
          <div class="flex justify-between mt-4">
            <p class="text-xl font-bold">Ubah Informasi Tim</p>
          </div>
          <div class="my-4">
            <p class="text-sm text-gray-500 my-1">Nama tim</p>
            <input
              v-model="title"
              type="text"
              class="border border-gray-300 bg-gray-100 text-sm w-full p-1 rounded-md px-3"
              @input="titleValidate"
            />
            <span v-if="titleError" class="text-red-500">{{ titleError }}</span>
          </div>
          <div>
            <p class="text-sm text-gray-500 my-1">Foto Latar (default)</p>
            <!-- <button @click="showImg" class="h-[100px] w-[100%] rounded-md"> -->
              <img
                :src="photoGroup"
                alt=""
                class="h-[200px] w-[100%] rounded-md"
              />
            <!-- </button> -->
            <div class="absolute w-[25%]">
              <ImageWall :showImg="imgOpen" @close="hide" />
            </div>
          </div>
          <div class="flex justify-end">
            <button
              class="absolute w-1/4 bg-blue-500 text-white my-4 ml-14 p-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  import ImageWall from '~/components/ImageWall.vue'
  export default {
    layout: 'navbar',
    data() {
      return {
        titleError: '',
        imgOpen: false,
        id: this.$route.query.id,
        photo: this.$route.query.photo,
        title: '',
        email: '',
        owner: '',
        body: 'nama tim telah diubah owner',
        selectedImage: null,
      }
    },
    computed: {
      photoGroup() {
        return (
          this.selectedImage ||
          'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        )
      },
    },
    methods: {
      showImg() {
        this.imgOpen = true
      },
      hide() {
        this.imgOpen = false
      },
      titleValidate() {
        const regextitle = /^[a-zA-Z0-9\s]{1,50}$/
        if (!this.title.match(regextitle)) {
          this.titleError = 'Nama tim terlalu panjang'
        } else {
          this.titleError = ''
        }
      },
      updateTeam() {
        const updatedQuery = { ...this.$route.query }
        updatedQuery.team = this.title
        if (JSON.stringify(updatedQuery) !== JSON.stringify(this.$route.query)) {
          this.$store
            .dispatch('team/updateGroup', {
              id: this.id,
              title: this.title,
            })
            .then((res) => {
              this.$router.replace({ query: updatedQuery })
              alert(res.message)
              this.$router.push('/tim')
            })
            .catch((err) => {
              console.log(this.id)
              console.log(this.title)
              alert(err.message)
            })
        }
        console.log(this.title)
      },
      setImage(image) {
        this.selectedImage = image
      },
    },
    mounted() {
      const query = this.$route.query
      this.title = query.team || ''
      this.owner = this.$route.query.owner[0].email
      this.email = this.$store.state.auth.user.email
    },
    components: { ImageWall },
  }
  </script>
  <style scoped>
  .thumbnail {
    width: 50px;
    height: 50px;
  }
  </style>