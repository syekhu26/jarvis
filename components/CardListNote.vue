<template>
  <!-- <div>
    <div class="mx-2 my-3" @click="showDetail">
      <div
        @click="$emit('click')"
        class="border border-1 h-[124px] w-[547px] flex flex-row items-center p-3 rounded-md cursor-pointer"
      >
        <div class="border-right w-[37px] m-2 flex flex-col">
          <p class="text-3xl font-semibold place-self-center">2</p>
          <p class="text-xl place-self-center">Bulan</p>
        </div>
        <div class="h-[80px] w-[1px] bg-gray-300 mx-2"></div>

        <div class="flex justify-between p-3">
          <div>
            <p class="text-xl font-bold">{{ item.subject }}</p>
            <p class="text-lg">
              {{ item.description }}
            </p>
            <div class="flex my-1">
              <iconUserIcon class="h-5 w-5 mx-1 opacity-50" />
              <p class="text-sky-500 mx-1 text-sm">{{ item.note_type }}</p>
              <img
                class="rounded-full w-5 h-5 mx-1"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
              <p class="text-gray-500 mx-1 text-sm">{{ item.member }}</p>
            </div>
          </div>
          <div class="bg-green-400 rounded-full text-[12px] h-6 px-3">
            {{ item.status }}
          </div>
        </div>
      </div>
    </div>
    <DetailPersonal v-if="detail" @close="hideDetail" :itemDetail="item" />
  </div> -->

  <div class="">
    <div
      @click="showDetail(item)"
      class="flex w-auto h-auto bg-white border border-slate-300 mt-5 max-w-xl mx-5 rounded"
    >
      <div class="border-r-2 border-slate-300 px-3 h-24 mt-auto mb-auto">
        <!-- icon -->
        <iconUserIcon v-if="item.note_type === 'personal'" class="mt-7" />
        <iconGroupIcon v-else class="mt-7" />
      </div>
      <div class="px-3 w-full mt-3">
        <!-- keterangan -->
        <div class="flex items-center justify-between w-full">
          <div>
            <p class="font-bold">{{ item.subject }}</p>
          </div>
          <div
            v-for="persen in item.status"
            :key="persen"
            class="bg-red-400 rounded-full text-[12px] h-6 px-3"
          >
            {{ persen }}
          </div>
        </div>
        <div class="mt-2 max-w-xl break-all">
          {{ item.description }}
        </div>
        <div class="flex items-center justify-between mt-5">
          <div class="flex">
            <img
              class="rounded-full w-5 h-5"
              :src="$store.state.profile.dataUser.photo"
              alt=""
            />
            <p class="text-gray-500 mx-1 text-sm">
              {{ item.owner[0].username }}
            </p>
          </div>
          <div>{{ formatDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: 'iconUserIcon',
      // personal: this.item.note_type,
      // personal: this.item.note_type,
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    hideDetail() {
      this.$store.commit('notes/setShowDetail', false)
      this.$store.commit('notes/detailNotes', null)
    },
    showDetail(item) {
      this.$store.commit('notes/detailNotes', item)
      this.$store.commit('notes/setShowDetail', true)
    },

    // handleDetail() {
    //   this.detail = !this.detail
    // },
    // isActive(section) {
    //   return {
    //     personal: this.active === section,
    //     kolaboration: this.active !== section,
    //   }
    // },
  },
  computed: {
    ...mapState({
      isShowDetail: (state) => state.notes.showDetail,
    }),
    formatDate() {
      return this.$moment(this.item.event_date).format('DD MMMM YYYY')
    },
  },
}
</script>

<!-- column:null description:"kijyht" event_date:"2023-05-24T20:15:14.930+07:00"
id:52 member:Array[1] note_type:"personal"
reminder:"2023-05-23T20:15:20.379+07:00" ringtone:"Alarm" status:"in_progress"
subject:"hgfdsa" -->
