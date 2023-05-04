<template>
  <div class="w-full">
    <div class="flex items-center justify-between mt-6 px-8">
      <h1 class="text-2xl font-bold mb-3">Catatan</h1>
      <ButtonGlobal @click="show" />
    </div>
    <div class="flex-none min-w-full px-8 items-center mb-8">
      <ul
        class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200"
      >
        <li @click="active = 'CardListNote'">
          <h2
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 border-transparent cursor-pointer dark:hover:border-slate-700 -mb-px active:text-sky-500 border-current"
          >
            Berjalan
          </h2>
        </li>
        <li @click="active = 'DetailNote'">
          <h2
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black border-transparent hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer"
          >
            Berlalu
          </h2>
        </li>
      </ul>
    </div>
    <div v-if="active === 'CardListNote'">
      <!-- <CardGroup
      v-for="data in dataGrup"
      :key="data"
      :inputData="data.nama"
      class=""
    /> -->
      <CardListNote class="mx-8" />
      <CardListNote
        v-for="data in dataNote"
        :key="data"
        :inputData="data.subject"
        class="mx-8"
      />
    </div>

    <div v-if="active === 'DetailNote'">
      <DetailNote class="mx-8" />
    </div>
    <FormNote :show="isOpen" @close="hide" />
  </div>
</template>

<script>
export default {
  layout: 'home',
  // middleware: 'auth',
  data() {
    return {
      isOpen: false,
      active: 'DetailNote',
    }
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
  },
}
</script>
