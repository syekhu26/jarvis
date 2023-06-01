<template>
  <div class="top-0 w-full z-[1000] bg-white">
    <ul class="flex justify-between h-[99px] shadow">
      <li class="flex place-items-center">
        <NuxtLink to="/" class="flex py-2 px-4">
          <img
            src="../assets/img/logoipsum-245 1.png"
            alt="logo"
            class="rounded-full w-[52px] h-[41px] mx-3 my-auto object-contain bg-gray-200"
          />
          <h1 class="text-2xl text-[#0F62FE] font-[IBM Plex Sans]">Bantu.in</h1>
        </NuxtLink>
      </li>
      <div class="float-right flex place-items-center">
        <li>
          <NuxtLink to="#" class="mx-2 hover:text-gray-600 block py-3 px-4">
            <img
              class="w-[20.31px] h-[22.66px]"
              src="https://cdn-icons-png.flaticon.com/512/3239/3239952.png"
              alt="notif"
              @click="notifOpen = !notifOpen"
            />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="mx-2 hover:text-black block py-3 px-4">
            <img
              class="w-[43px] h-[43px] rounded-full object-contain bg-gray-200"
              :src="avatar"
              alt=""
              @click="profileOpen = !profileOpen"
            />
          </NuxtLink>
        </li>
      </div>
    </ul>
    <div v-if="profileOpen" class="absolute right-[2%] z-10">
      <PopupProfile />
    </div>
    <div v-if="notifOpen" class="absolute right-[2%] z-10">
      <PopupNotif />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
  data() {
    return {
      profileOpen: false,
      notifOpen: false,
    }
  },
  computed: {
    avatar(){
      return this.$store.state.profile.dataUser.photo || require('@/assets/img/profile-user-svgrepo-com.png')
    }
  }
}
</script>
