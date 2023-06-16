<!-- <template>
  <timeline>
    <timeline-item>item1</timeline-item>
    <timeline-item :hollow="false">item2</timeline-item>
    <timeline-item :hollow="false">item3</timeline-item>
  </timeline>
</template>

<script>
import { Timeline, TimelineItem } from 'vue-cute-timeline'
import 'vue-cute-timeline/dist/index.css'

export default {
  components: {
    Timeline,
    TimelineItem,
  },
}
</script> -->

<template>
  <div>
    <!-- <ButtonGlobal @click="isOpen = !isOpen" /> -->
    <div>
      <div class="">
        <div
          v-if="showStory"
          class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center z-20"
        >
          <div class="mt-10 my-10">
            <div class="bg-white max-w-md w-full rounded p-6 mx-auto shadow-lg">
              <div class="mt-2 float-right">
                <button>
                  <div @click="$emit('close')">
                    <p class="text-blue-500">Kembali</p>
                  </div>
                </button>
              </div>
              <div class="mt-7">
                <div>
                  <h2 class="font-semibold text-black">Progress Catatan</h2>
                </div>
                <div class="">
                  <timeline>
                    <timeline-item
                      ><div>
                        {{ formatDate }}
                      </div>
                      <div>
                        {{ history.data.owner.username }} telah membuat catatan
                      </div>
                    </timeline-item>
                    <timeline-item
                      v-for="(item, index) in history.data.histories"
                      :key="index"
                    >
                      {{ $moment(item.date).format('DD/MM/YYYY') }}
                      <div>{{ item.user }} sudah menyelesaikan tugas</div>
                      <!-- <div>
                        {{ idNoteToHistory.member.username }}
                        sudah menyelesaikan tugas.
                      </div> -->
                    </timeline-item>
                  </timeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Timeline, TimelineItem } from 'vue-cute-timeline'
import 'vue-cute-timeline/dist/index.css'
export default {
  components: {
    Timeline,
    TimelineItem,
  },
  props: {
    showStory: {
      type: Boolean,
      default: false,
    },
    idNoteToHistory: {
      // type: Number,
      // default: null,
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      timelineItem: [],
      note_id: this.idNoteToHistory.id,
      date: [],
    }
  },

  computed: {
    formatDate() {
      return this.$moment(this.history.data.note_created_at).format(
        'DD/MM/YYYY'
      )
    },
    ...mapState('notes', ['history']),
  },
  mounted() {
    this.$store.dispatch('notes/history', this.idNoteToHistory.id)
  },
  method: {
    // format() {
    //   return this.$moment(this.item.date).format('DD/MM/YYYY')
    // },
    ...mapActions('notes', ['history']),
  },
}
</script>

<style></style>

<!-- {status: 200, data: {,…}} data : {,…} histories : [{id: 718, note: "saya
collab", user: "syekhuna",…}] 0 : {id: 718, note: "saya collab", user:
"syekhuna",…} note_created_at : "2023-05-29T17:44:28.515+07:00" note_done_at :
"2023-05-29T17:44:28.563+07:00" note_status : "in_progress" owner : {id: 31,
username: "syekhu", email: "stevennorman101@gmail.com", phone: "0895641564",
job: "gabut",…} email : "stevennorman101@gmail.com" id : 31 job : "gabut"
notes_count : 14 phone : "0895641564" photo :
"https://res-5.cloudinary.com/dis2k0keq/image/upload/v1683939492/public/profile_picture/fdeb4fb13b.png"
point : 200 username : "syekhu" status : 200 -->
