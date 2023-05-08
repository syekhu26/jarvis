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
        <button @click="active = 'CardListNote'">
          <h2
            :class="isActive('CardListNote')"
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 cursor-pointer dark:hover:border-slate-700 -mb-px active:text-sky-500 border-current"
          >
            Berjalan
          </h2>
        </button>
        <button @click="active = 'DetailNote'">
          <h2
            :class="isActive('DetailNote')"
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 cursor-pointer dark:hover:border-slate-700 -mb-px active:text-sky-500 border-current"
          >
            Berlalu
          </h2>
        </button>
      </ul>
    </div>
    <div v-if="active === 'CardListNote'">
      <!-- <CardGroup
      v-for="data in dataGrup"
      :key="data"
      :inputData="data.nama"
      class=""
    /> -->
      <CardListNote
        v-for="note in notes"
        :key="note.id"
        :item="note"
        class="mx-8"
      />

      <!-- <DetailPersonal :showDetail="detail" @close="hideDetail" /> -->
      <!-- <DetailNoteCollab class="mx-8" /> -->
      <!-- <CardListNote
        v-for="data in dataNote"
        :key="data"
        :inputData="data.subject"
        class="mx-8"
      /> -->
    </div>

    <div v-if="active === 'DetailNote'">
      <!-- <DetailNote class="mx-8" /> -->
      <DetailNoteCollab class="mx-8" />
    </div>
    <FormNote :show="isOpen" @close="hide" />
  </div>
</template>

<script>
export default {
  // import { mapState } from 'vuex';
  layout: 'home',
  // middleware: 'auth',
  data() {
    return {
      isOpen: false,
      detail: false,
      active: 'CardListNote',
    }
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes
    },
  },
  mounted() {
    this.$store.dispatch('notes/fetchNotes')
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
    showDetail() {
      this.detail = true
    },
    hideDetail() {
      this.detail = false
    },
    isActive(section) {
      return {
        'border-b-blue': this.active === section,
        'border-b-transparent': this.active !== section,
      }
    },
  },
}
</script>
