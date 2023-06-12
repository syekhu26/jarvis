<template>
  <div>
    <div
      class="flex items-center justify-between px-3 py-2 bg-gray-200 rounded text-sm font-semibold text-gray-700 cursor-pointer"
    >
      <div @click="buttonInput">
        {{ buttonText }}
      </div>
      <input
        class="w-full outline-none"
        placeholder="Nama list"
        v-if="showInput"
        v-model="title"
        @keyup.enter="editData"
        @blur="buttonInput"
      />
    </div>
    <div class="flex max-h-full w-72 flex-col rounded bg-white">
      <!-- daftar judul -->

      <!-- daftar box -->
      <div class="flex flex-col overflow-hidden pb-3">
        <div ref="listRef" class="flex-1 overflow-y-auto px-3"></div>
        <draggable
          class="px-3 mt-3"
          v-model="note"
          :options="{group: 'BoxList'}"
          @end="drop"
          @change="log"
        >
          <CardNoteTim
            v-for="team in itemList.note"
            :key="team.id"
            :itemTeam="team"
            class="mb-2"
            ref="items"
          />
        </draggable>
        <!-- <draggable
          class="px-3 mt-3"
          v-model="note"
          :itemList="itemList.note"
          @change="log"
        >
        </draggable> -->
        <!-- <DetailNoteTeam
          v-if="isShowDetail && detailNotes !== null"
          @close="hideDetail"
          :itemDetail="detailNotes"
        /> -->
        <div class="mt-3 px-3">
          <div @click="show" class="flex justify-center items-center mx-12">
            <iconPlusIcon />
            <button
              type="button"
              class="flex w-full items-center rounded-md p-2 text-sm font-medium text-sky-500 cursor-pointer"
            >
              Tambah Catatan
            </button>
          </div>
        </div>
      </div>
    </div>
    <FormNoteTeam :colomn="itemList" :show="isOpen" @close="hide" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  props: {
    // inputData: {
    //   type: String,
    //   required: true,
    // },
    itemList: {
      type: Object,
      default: () => ({}),
    },
    // note: {
    //   type: Array,
    //   required: true,
    // },
  },
  // asyncData(context) {
  //   const queryData = context.query
  //   console.log(queryData)
  //   // Gunakan data query halaman sesuai kebutuhan
  // },
  data() {
    return {
      isOpen: false,
      showInput: false,
      buttonText: this.itemList.title,
      id: this.$route.query.id,
      // note: this.itemList.note
      data:null

      // note: this.itemList.note,
      // items: this.note
    }
  },
  mounted() {
    this.$store.dispatch('notesTeam/NotesTeam', this.$route.query.id)
    // for (let i = 0; i < 10; i++) {
    //   this.note.push(`team ${i}`)
    // }
    // this.loop()
    // console.log(this.note)
  },
  computed: {
    notesTeam() {
      return this.$store.state.notesTeam.NotesTeam
    },
    ...mapState({
      detailNotes: (state) => state.coloms.detailNotes,
      isShowDetail: (state) => state.coloms.showDetail,
    }),
    loop(data) {
      return this.itemList.note[data].id;
    },
  },
  methods: {
    // loop(data) {
    //   // this.itemList.note[data].id;
    //   // const items = this.$refs.itemsRef
    // },
    async editData() {
      try {
        await this.$store.dispatch('coloms/updateColom', {
          idColoms: this.itemList.id,
          team_id: this.$route.query.id,
          data: {
            title: this.title,
          },
        })
      } catch (error) {
        console.log(error)
      }

      this.$router.go()
    },
    // editData() {
    //   this.$emit('edit-data', this.title)
    // },
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
    buttonInput() {
      this.showInput = !this.showInput
      if (this.showInput) {
        this.buttonText = ''
      } else {
        this.buttonText = this.itemList.title
      }
    },
    async drop() {
      try {
        await this.$store.dispatch('coloms/updateColom', {
          idColoms: this.itemList.id,
          team_id: this.$route.query.id,
          data: {
            note: this.itemList.note,
          },
        });
        // this.note = [...id]
        // this.list
      } catch (error) {
        console.error(error);
      }
    },

    //   sendData() {
    //   const data = this.itemList.id
    //   this.$emit('itemList', data)
    // }
  },
}
</script>
