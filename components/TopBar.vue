<template>
  <ul class="flex justify-between block h-[99px] shadow">
    <li class="flex place-items-center">
      <NuxtLink to="/index" class="flex block py-2 px-4">
        <img
          src="../assets/img/logoipsum-245 1.png"
          alt="logo"
          class="rounded-full w-[52px] h-[41px] mx-3 my-auto"
        />
        <h1 class="text-2xl text-[#0F62FE] font-[IBM Plex Sans]">Bantu.in</h1>
      </NuxtLink>
    </li>
    <div class="float-right flex place-items-center">
      <li>
        <NuxtLink
          to="#"
          class="mx-2 hover:bg-gray-400 hover:text-black block py-3 px-4"
        >
          <img
            class="w-[20.31px] h-[22.66px]"
            src="https://cdn-icons-png.flaticon.com/512/3239/3239952.png"
            alt="notif"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="#"
          class="mx-2 hover:bg-gray-400 hover:text-black block py-3 px-4"
        >
          <img
            class="w-[43px] h-[43px] bg-gray-600 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
            alt=""
          />
        </NuxtLink>
      </li>
    </div>
  </ul>
</template>
