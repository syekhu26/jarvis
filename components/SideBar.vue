<template>
    <aside class="flex flex-col w-[332px] h-screen border border-gray-300">
      <div class="hover:bg-[#EDF5FF]">
        <NuxtLink to="#" class="flex my-4 ml-9 p-2 text-xl">
          <!-- <img
            class="w-7 h-7 opacity-50"
            src="./icon/Home.svg"
            alt=""
          /> -->
          <HomeIcon />
          <p class="mx-4 text-[#697077]">Beranda</p>
        </NuxtLink>
      </div>
      <div class="hover:bg-[#EDF5FF]">
        <NuxtLink to="#" class="flex my-4 ml-9 p-2 text-xl">
          <img
            class="w-7 h-7 opacity-50"
            src="https://cdn-icons-png.flaticon.com/512/1950/1950715.png"
            alt=""
          />
          <p class="mx-4 text-[#697077]">Catatanku</p>
        </NuxtLink>
      </div>
      <div class="hover:bg-[#EDF5FF]">
        <NuxtLink to="#" class="flex my-4 ml-9 p-2 text-xl">
          <img class="w-7 h-7" src="../assets/img/Team.png" alt="" />
          <p class="mx-4 text-[#697077]">Tim</p>
        </NuxtLink>
      </div>
    </aside>
  </template>
  