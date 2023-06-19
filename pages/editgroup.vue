<template>
    <div class="flex justify-center mx-auto my-3">
      <div class="w-1/2">
        <form class="h-screen m-4">
          <center>
            <img
              :src="photoGroup"
              alt="photo"
              class="h-[100px] w-[100px] rounded-full object-contain bg-gray-200"
            />
            <label v-if="emailOwner"
              for="myPhoto"
              class="cursor-pointer text-gray-500 inline-block text my-2"
              >Edit Foto Tim</label
            >
            <a href="#">
              <input
                type="file"
                id="myPhoto"
                class="text-gray-500 bg-none"
                @change="updatePhotoGroup"
                hidden
              />
            </a>
            <p v-if="photoError" class="text-red-500">{{ photoError }}</p>
          </center>
          <div class="flex justify-between mt-4">
            <p class="text-xl font-bold">Informasi Tim</p>
            <nuxt-link
              :to="editDataGroup"
              v-if="emailOwner"
              class="text-blue-500 my-auto"
              >Ubah</nuxt-link
            >
          </div>
          <div class="my-4">
            <p class="text-sm text-gray-500 my-1">Nama tim</p>
            <input
              v-model="title"
              type="text"
              class="text-sm w-full px-2 py-1"
              disabled
            />
          </div>
          <div>
            <p class="text-sm text-gray-500 my-1">Foto Latar</p>
            <img
              src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="background"
              class="h-[200px] w-[100%] rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
    layout: 'navbar',
    async asyncData({ store }) {
      await store.dispatch('team/fetchGroupList')
    },
    data() {
      return {
        id: this.$route.query.id,
        title: '',
        email: '',
        owner: '',
        emailOwner: false,
        photo: '',
        photoError: '',
      }
    },
    computed: {
      coloms() {
        return this.$store.state.coloms.coloms
      },
      photoGroup() {
        return this.$route.query.photo || require('@/assets/img/Ellipse 1.png')
      },
      editDataGroup() {
        const query = {
          id: this.id,
          owner: this.$route.query.owner,
          photo: this.$route.query.photo,
          team: this.title,
        }
  
        return {
          path: '/editdatagroup',
          query,
        }
      },
    },
    mounted() {
      this.$store.dispatch('coloms/fetchColoms', this.$route.query.id)
      this.$store.dispatch('team/getDataGroup', this.$route.query.id)
  
      this.title = this.$route.query.team
      this.owner = this.$route.query.owner[0].email
      this.email = this.$store.state.auth.user.email
      this.photo = this.$route.query.photo
  
      this.cekEmail()
  
      console.log('team:', this.title)
    },
    methods: {
      cekEmail() {
        if (this.owner === this.email) {
          this.emailOwner = true
        } else {
          this.emailOwner = false
        }
      },
      updatePhotoGroup(event) {
        const updatedQuery = { ...this.$route.query }
        this.photo = event.target.files[0]
        updatedQuery.photo = this.photo
        if (JSON.stringify(updatedQuery) !== JSON.stringify(this.$route.query)) {
        this.$store
          .dispatch('team/updateGroup', {
            id: this.id,
            photo: updatedQuery.photo,
          })
          .then((res) => {
            this.$router.replace({ query: updatedQuery })
            alert(res.message)
            // this.$store.dispatch('team/getDataGroup', this.id)
            console.log(res.data)
            // this.$router.go()
          })
          .catch(() => {
            this.photoError =
              'Maaf, terjadi kesalahan dalam mengunggah foto profil. Pastikan foto dalam bentuk jpg, jpeg, png dan ukuran kurang dari 1Mb.'
          })
        }
      },
    },
  }
  </script>
  