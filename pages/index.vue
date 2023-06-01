<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Permintaan masuk</h1>
        <ButtonGlobal @click="show" />
      </div>
      <div class="min-w-full px-8 items-center mb-8">
        <p class="text-lg mb-4">Daftar catatan dan undangan grub masuk</p>
        <div>
          <CardRequest
            v-for="request in reqlist.data"
            :key="request.id"
            :request="request"
          />

          <div class="flex items-center mt-3">
            <div>3 permintaan lagi.</div>
            <NuxtLink to="/request" class="font-bold text-blue-600 px-1"
              >Lihat Semua</NuxtLink
            >
          </div>
        </div>

        <!-- <div
          v-else
          class="px-8 text-slate-400 font-bold flex items-center justify-center h-44"
        >
          Belum Ada Undangan
        </div> -->
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Daftar catatan</h1>
      </div>

      <div v-if="notes.length > 0" class="px-8">Mendekati Tanggal Acara</div>
      <div v-if="notes.length > 0" class="px-4 items-center mb-8">
        <!-- <CardListNote/> -->
        <!-- <DetailPersonal /> -->
        <CardListNote
          v-for="note in notes"
          :key="note.id"
          :item="note"
          class=""
        />
      </div>
      <div
        v-else
        class="px-8 text-slate-400 font-bold flex items-center justify-center h-44"
      >
        Belum Ada Catatan
      </div>
      <DetailPersonal
        v-if="isShowDetail && detailNotes !== null"
        @close="hideDetail"
        :itemDetail="detailNotes"
      />
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
  layout: 'home',
  data() {
    return {
      isOpen: false,
      note: false,
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
  computed: {
    reqlist() {
      return this.$store.state.notes.reqlist
    },
    notes() {
      return this.$store.state.notes.notes
    },
    ...mapState({
      detailNotes: (state) => state.notes.detailNotes,
      isShowDetail: (state) => state.notes.showDetail,
    }),
    chek() {
      return Boolean(this.note)
    },
  },
  mounted() {
    this.$store.dispatch('notes/fetchNotes')
    this.$store.dispatch('notes/reqlist')
  },
}
</script>
