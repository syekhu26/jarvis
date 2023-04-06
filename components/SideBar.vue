<template>
  <aside class="flex flex-col w-[332px] h-screen border border-gray-300">
    <div class="hover:bg-[#EDF5FF]">
      <NuxtLink to="#" class="flex my-4 ml-9 p-2 text-xl">
        <iconHomeIcon />
        <p class="mx-4 text-[#697077]">Beranda</p>
      </NuxtLink>
    </div>
    <div class="hover:bg-[#EDF5FF]">
      <NuxtLink to="/personal" class="flex my-4 ml-9 p-2 text-xl">
        <iconNoteIcon />
        <p class="mx-4 text-[#697077]">Catatanku</p>
      </NuxtLink>
    </div>
    <div class="hover:bg-[#EDF5FF]">
      <NuxtLink to="/tim" class="flex my-4 ml-9 p-2 text-xl">
        <iconTeamIcon />
        <p class="mx-4 text-[#697077]">Tim</p>
      </NuxtLink>
    </div>
    <div class="hover:bg-[#EDF5FF]">
      <NuxtLink to="#" class="flex my-4 ml-9 p-2 text-xl">
        <iconRequestIcon />
        <p class="mx-4 text-[#697077]">Request</p>
      </NuxtLink>
    </div>
  </aside>
</template>
