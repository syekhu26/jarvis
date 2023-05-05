<template>
  <div class="w-full">
    <div class="flex items-center justify-between mt-6 px-8">
      <h1 class="text-2xl font-bold mb-3">Catatan</h1>
      <ButtonGlobal @click="isOpen = !isOpen" />
    </div>
    <div class="flex-none min-w-full px-8 items-center mb-8">
      <ul
        class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200"
      >
        <li @click="active = 'DetailNote'">
          <h2 class="">
            <a
              href=""
              class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px active:text-sky-500 border-current"
              >Berjalan</a
            >
          </h2>
        </li>
        <li @click="active = 'CardListNote'">
          <h2
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black border-transparent hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer"
          >
            Berlalu
          </h2>
        </li>
      </ul>
    </div>
    <div v-if="active === 'DetailNote'">
      <CardListNote class="mx-8" />
    </div>

    <div v-if="active === 'CardListNote'">
      <DetailNote class="mx-8" />
    </div>
    <FormNote v-if="isOpen" />
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      isOpen: false,
      active: 'DetailNote',
    }
  },
}
</script>
