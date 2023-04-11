<template>
  <div class="flex justify-center items-center mt-32">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex item-center justify-center">
          <img
            src="../assets/img/logoipsum-245 1.png"
            alt="logo"
            class="rounded-full w-[52px] h-[41px] mx-3 my-auto"
          />
          <h1 class="text-2xl text-[#0F62FE] font-[IBM Plex Sans]">Bantu.in</h1>
        </div>
        <h1 class="text-lg font-bold mb-6 mt-3">Masuk</h1>
        <div>
          <form action="">
            <div class="grid grid-cols-2 gap-3">
              <label for="username" class="text-sm font-medium dark:text-white"
                >Username</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Username"
                required
              />
              <label for="password" class="text-sm font-medium dark:text-white"
                >Password</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Password"
                required
              />
            </div>

            <div class="mb-8 mt-1">
              Belum punya akun?
              <NuxtLink to="/register" class="text-blue-500"
                >Silahkan daftar</NuxtLink
              >
            </div>
            <button
              class="text-base bg-slate-500 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
