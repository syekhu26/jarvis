<template>
  <!-- BELUM LOGIN -->
  <!-- <div class="w-[280px] h-[280px] border border-gray-300 rounded-md justify-center">
        <div class="flex">
            <img class="rounded-full h-9 w-9 m-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
            <div class="m-2">
                <p class="text-lg font-bold">Nama User</p>
                <p class="text-sm opacity-50">Anda belum log in</p>
            </div>
        </div>
        <div class="w-[260px] h-px bg-gray-300 mx-2"></div>
        <div class="border bg-white w-[260px] mx-2 my-3 p-2">
            <div class="flex">
                <div>
                    <div class="flex">
                        <img class="h-5 w-5 mx-2" src="../assets/img/logoipsum-245 1.png" alt="">
                        <p class="text-sm text-blue-600">Bisa.in point :</p>
                    </div>
                    <p class="text-sm font-bold mx-3">-</p>
                </div>
                <div class="w-px h-9 bg-gray-300 mx-2"></div>
                <div>
                    <div class="flex">
                        <p class="text-sm">Kuota cacatan :</p>
                    </div>
                    <p class="text-sm font-bold mx-1">-</p>
                </div>
            </div>
        </div>
        <p class="text-sm m-3">Anda belum mendaftar. Silahkan daftar terlebih dahulu. Untuk menampilkan point anda.</p>
        <button class="w-[260px] bg-blue-500 text-white text-sm justify-center p-2 mx-2 rounded">Daftar</button>
    </div> -->

  <!-- SUDAH LOGIN -->
  <div
    class="w-[280px] h-[280px] border border-gray-300 bg-white rounded-md justify-center z-[99px]"
  >
    <div class="flex">
      <img
        class="rounded-full h-9 w-9 m-3 object-contain bg-gray-200"
        :src="avatar"
        alt=""
      />
      <div class="m-2">
        <p class="text-lg font-bold">
          {{ $auth.state.user.data.username }}
        </p>
      </div>
    </div>
    <div class="w-[260px] h-px bg-gray-300 mx-2"></div>
    <div class="border bg-white w-[260px] mx-2 my-3 p-2">
      <div class="flex">
        <NuxtLink :to="{ path: '/point', query: { point: point } }">
          <div>
            <div class="flex">
              <img
                class="h-5 w-5 mx-2"
                src="../assets/img/logoipsum-245 1.png"
                alt=""
              />
              <p class="text-sm text-blue-600">Bisa.in point :</p>
            </div>
            <p class="text-sm font-bold mx-3">{{ point }}</p>
          </div>
        </NuxtLink>
        <div class="w-px h-9 bg-gray-300 mx-2"></div>
        <div>
          <div class="flex">
            <p class="text-sm">Kuota catatan :</p>
          </div>
          <p class="text-sm font-bold mx-1">{{ notes_count }}</p>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <NuxtLink to="/profile">
        <button
          class="w-[260px] bg-blue-500 text-white text-sm justify-center p-2 mx-2 my-2 rounded"
        >
          Lihat profil
        </button>
      </NuxtLink>
      <button
        class="w-[260px] border border-red-500 text-red-500 text-sm justify-center p-2 mx-2 my-2 rounded"
        @click="logout"
      >
        Keluar
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store }) {
    await store.dispatch('profile/user')
  },
  data() {
    return {
      photo: this.$auth.state.user.data.photo,
      point: this.$auth.state.user.data.point,
      notes_count: this.$auth.user.data.notes_count,
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        // redirect to the login page or another page
      } catch (err) {
        console.log(err)
      }
    },
  },
  mounted() {
    this.$store.dispatch('profile/fetchUser')
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    avatar() {
      return this.photo || require('@/assets/img/profile-user-svgrepo-com.png')
    },
  },
}
</script>
