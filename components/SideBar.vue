<template>
  <div
    class="lg-1/4 flex flex-col w-[332px] min-h-screen border border-gray-300"
  >
  <div>
      <nuxt-link
        to="/"
        class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]"
        exact-active-class="active"
      >
        <iconHomeIcon />
        <p class="mx-4 text-[#697077]">Beranda</p>
      </nuxt-link>
      <nuxt-link
        to="/catatan"
        class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]"
        exact-active-class="active"
      >
        <iconNoteIcon />
        <p class="mx-4 text-[#697077]">Catatan</p>
      </nuxt-link>
      <nuxt-link
        to="/tim"
        class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]"
        exact-active-class="active"
      >
        <iconTeamIcon />
        <p class="mx-4 text-[#697077]">Tim</p>
      </nuxt-link>
      <NuxtLink
        to="/request"
        class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]"
        exact-active-class="active"
      >
        <iconRequestIcon />
        <p class="mx-4 text-[#697077]">Undangan</p>
      </NuxtLink>
    </div>
    <div class="lg:hidden fixed inset-x-0 bottom-0 z-10 bg-gray-200">
      <!-- Konten Navbar Bottom -->
    </div>
  </div>
</template>
<style scoped>
.active {
  background-color: #cfe4fd;
  /* color: blue !important; */
}
</style>
