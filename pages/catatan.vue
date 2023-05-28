<template>
  <div class="w-full">
    <!-- <nuxt-link :to="{ path: '/catatan', query: { page: '1' } }">
    </nuxt-link> -->
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
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 cursor-pointer -mb-px active:text-sky-500 border-current"
          >
            Berjalan
          </h2>
        </button>
        <button @click="active = 'DetailNote'">
          <h2
            :class="isActive('DetailNote')"
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 cursor-pointer -mb-px active:text-sky-500 border-current"
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
      <div class="flex -mt-6">
        <Setting class="mx-3" />
        <Sorting />
      </div>
      <div v-if="notes.length > 0">
        <CardListNote
          v-for="note in notes"
          :key="note.id"
          :item="note"
          class="mx-3"
        />
      </div>
      <div
        v-else
        class="px-8 text-slate-400 font-bold flex items-center justify-center h-44"
      >
        Belum Ada Catatan
      </div>

      <!-- <DetailPersonal :showDetail="detail" @close="hideDetail" /> -->
      <!-- <DetailNoteCollab class="mx-8" /> -->
      <!-- <CardListNote
        v-for="data in dataNote"
        :key="data"
        :inputData="data.subject"
        class="mx-8"
      /> -->
      <DetailPersonal
        v-if="isShowDetail && detailNotes !== null"
        @close="hideDetail"
        :itemDetail="detailNotes"
      />
    </div>

    <div v-if="active === 'DetailNote'">
      <!-- <DetailNote class="mx-8" /> -->
      <DetailNoteCollab class="mx-8" />
    </div>
    <FormNote :show="isOpen" @close="hide" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
  },
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
    ...mapState({
      detailNotes: (state) => state.notes.detailNotes,
      isShowDetail: (state) => state.notes.showDetail,
    }),
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
