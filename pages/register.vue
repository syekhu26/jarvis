<template>
  <div class="flex justify-center items-center mt-12">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-6 mt-3">Daftar Akun</h1>
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
              <label for="email" class="text-sm font-medium dark:text-white"
                >Email</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Email"
                required
              />
              <label for="no hp" class="text-sm font-medium dark:text-white"
                >No HP</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan No HP"
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
              <label
                for="password konfirmasi"
                class="text-sm font-medium dark:text-white"
                >Ulangi Password</label
              >
              <input
                class="border text-black px-4 py-2 col-span-2"
                placeholder="Masukkan Password Ulang"
                required
              />
            </div>
            <div class="mb-8 mt-1">
              Sudah punya akun?
              <NuxtLink to="/login" class="text-blue-500"
                >Silahkan login</NuxtLink
              >
            </div>
            <button
              class="text-base bg-slate-500 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
