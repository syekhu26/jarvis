<template>
  <aside class="flex flex-col w-[332px] min-h-screen border border-gray-300">
      <nuxt-link to="/" class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]" exact-active-class="active">
        <iconHomeIcon />
        <p class="mx-4 text-[#697077]">Beranda</p>
      </nuxt-link>
      <nuxt-link to="/catatan" class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]" exact-active-class="active">
        <iconNoteIcon />
        <p class="mx-4 text-[#697077]">Catatan</p>
      </nuxt-link>
      <nuxt-link to="/tim" class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]" exact-active-class="active">
        <iconTeamIcon />
        <p class="mx-4 text-[#697077]">Tim</p>
      </nuxt-link>
      <NuxtLink to="/request" class="flex px-12 py-5 text-xl hover:bg-[#EDF5FF]" exact-active-class="active">
        <iconRequestIcon />
        <p class="mx-4 text-[#697077]">Permintaan</p>
      </NuxtLink>
  </aside>
</template>
<style scoped>
  .active{
    background-color: #cfe4fd;
    /* color: blue !important; */
  }
</style>