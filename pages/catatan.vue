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
        <!-- <Setting @filter-changed="getFilteredData" class="mx-3" /> -->
        <div class="mx-7 border border-slate-400">
          <select v-model="selectedFilter" @change="filterNotes">
            <option
              v-for="item in pilihanFilter"
              :value="item.value"
              :key="item.value"
            >
              {{ item.label }}
            </option>
          </select>
        </div>
        <!-- <Setting />
        <Sorting /> -->
        <div class="px-2 border border-slate-400">
          <select v-model="filter" @change="filters">
            <option value="upcoming=yes&up=yes&sort=asc">Terdekat</option>
            <option value="upcoming=yes&up=yes&sort=dsc">Terjauh</option>
          </select>
        </div>
      </div>
      <!-- <Setting />
      <Sorting /> -->
      <div v-if="notes.length > 0">
        <CardListNote
          v-for="note in notes"
          :key="note.id"
          :item="note"
          class="mx-3"
        />
        <!-- <div v-for="item in filteredData" :key="item.id">{{ item.name }}</div> -->
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
      <!-- <DetailNoteCollab class="mx-8" /> -->
    </div>
    <FormNote :show="isOpen" @close="hide" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

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
      // filteredData: [],
      selectedFilter: 'upcoming=yes',
      filter: 'upcoming=yes&up=yes&sort=asc',
      pilihanFilter: [
        // data dropdown
        { label: 'Semua', value: 'upcoming=yes' },
        { label: 'Belum Upload', value: 'upcoming=yes&notup=yes' },
        { label: 'Sudah Upload', value: 'upcoming=yes&up=yes' },
        { label: 'Pemilik', value: 'upcoming=yes&owner=yes' },
      ],
    }
  },
  computed: {
    ...mapGetters('notes', ['getNotes']),
    // notes() {
    //   const selectedParam = this.$store.state.selectedParam
    //   if (selectedParam === 'all') {
    //     return this.$store.state.notes.notes
    //   } else {
    //     return this.$store.state.notes.notes.filter(
    //       (note) => note.param === selectedParam
    //     )
    //   }
    // },
    notes() {
      return this.$store.state.notes.notes
    },
    // filterParam: {
    //   get() {
    //     return this.$store.state.notes.filterParam
    //   },
    //   set(value) {
    //     this.$store.commit('notes/setFilter', value)
    //   },
    // },
    ...mapState({
      detailNotes: (state) => state.notes.detailNotes,
      isShowDetail: (state) => state.notes.showDetail,
    }),
  },
  mounted() {
    // this.$store.dispatch('notes/fetchNotes')
    this.fetchNotes()
  },
  methods: {
    ...mapActions('notes', ['fetchNotes']),
    filterNotes(event) {
      console.log(event.target.value)
      // const params = {  this.selectedFilter }
      this.fetchNotes(this.selectedFilter)
    },
    filters() {
      // const params = {  this.selectedFilter }
      this.fetchNotes(this.filter)
    },
    // fetchFilteredNotes() {
    //   this.$store.dispatch('notes/fetchNotes')
    // },
    // getFilteredData(filter) {
    //   this.$axios
    //     .get(`/notes?${filter}`)
    //     .then((response) => {
    //       this.filteredData = response.data
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // },
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
