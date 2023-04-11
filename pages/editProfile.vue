<template>
  <div class="w-full h-screen mx-9 m-2">
    <div class="my-4">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        class="w-[100px] h-[100px] rounded-full"
      />
      <a href="#" class="text-gray-500 ml-2">Ubah foto</a>
    </div>
    <div class="my-2">
        <p>Nama pengguna</p>
        <input
          type="text"
          class="border border-gray-300 w-2/3 p-1 mb-2 rounded-md"
          placeholder="Nama anda"
        />
    </div>
    <div class="my-2">
        <p>Pekerjaan</p>
        <input
          type="text"
          class="border border-gray-300 w-2/3 p-1 mb-2 rounded-md"
          placeholder="Pekerjaan anda"
        />
    </div>
    <div class="my-2">
        <p>Email</p>
        <input
          type="email"
          class="border border-gray-300 w-2/3 p-1 mb-2 rounded-md"
          placeholder="Email anda"
        />
    </div>
    <div class="my-2">
        <p>Nomor telepon</p>
        <input
          type="number"
          class="border border-gray-300 w-2/3 p-1 mb-2 rounded-md"
          placeholder="Nama anda"
        />
    </div>
    <div class="my-2">
        <p>Kata Sandi</p>
        <input
          type="password"
          class="border border-gray-300 w-2/3 p-1 mb-2 rounded-md"
          placeholder="Buat kata sandi anda"
        />
    </div>
    <div class="my-2">
        <p>Ulangi kata sandi</p>
        <input
          type="password"
          class="border border-gray-300 w-2/3 p-1 mb-2 rounded-md"
          placeholder="Ulangi kata sandi anda"
        />
    </div>
    <div class="w-full my-3">
        <button class="absolute w-1/4 bg-blue-500 text-white right-12 my-4 mx-4 p-2 rounded-md">
          Simpan
        </button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'home',
}
</script>
