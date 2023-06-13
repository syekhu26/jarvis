<template>
  <div class="w-full">
    <div class="flex items-center justify-between px-8 mt-6">
      <h1 class="font-bold"> Daftar TIM</h1>
      <FormCreateGrup @add-data="addData" />
    </div>
    <hr />
    <!-- <p class="p-8">Belum ada tim yang dibuat</p> -->
    <div v-if="teams.length> 0">
      <CardGroup v-for="data in teams" :key="data" :item="data" class="" />
    </div>

    <div
          v-else
          class="px-8 text-slate-400 font-bold flex items-center justify-center h-44"
        >
          Belum Ada Undangan
        </div>

    <!-- <CardGroup v-for="item in grup" :key="item.id" :item="item" /> -->

    <!-- <p>{{ output }}</p> -->

    <!-- <div
      v-if="toggleModal"
      class="absolute z-40 insert-0 opacity-25 bg-black"
    ></div> -->
  </div>
</template>

<!-- <script>
export default {
  layout: 'home',
  data() {
    return {
      grup: [
        {
          id: 0,
          nama: '',
          email: [''],
        },
      ],
    }
  },
}
</script> -->
<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ store }) {
    await store.dispatch('profile/getdataUser', store.state.auth.user.id)
    await store.dispatch('team/fetchGroupList')
  },
  layout: 'home',
  name: 'Modal',
  // props: {
  //   inputData: {
  //     type: [String, Boolean, Number],
  //     required: true,
  //   },
  // },
  data() {
    return {
      // toggleModal: false,
      // email: '',
      items: [
        {
          id: 1,
          name: 'biru',
          path: './asset/biru.jpg',
        },
        {
          id: 2,
          name: 'biru',
          path: './asset/biru.jpg',
        },
      ],
      dataGrup: [],
      // grup: [
      //   {
      //     nama: '',
      //     email: [],
      //   },
      // ],
    }
  },
  computed: {
    ...mapState('team', ['teams']),
  },
  methods: {
    // pushNewData() {
    //   this.$emit("addNewData", this.nama, this.email);
    //   this.$refs.form.reset();
    //   this.nama = "";
    //   this.email = "";
    // },
    // confirmInput() {
    //   this.output = this.nama;
    // },
    // addNewData(){
    //   this.
    // }
    // addEmail() {
    //   if (!this.email) {
    //     return
    //   }
    //   this.grup.email.push(this.email)
    //   this.email = ''
    // },
    // remove(i) {
    //   this.items.splice(i, 1)
    // },
    // addGroup() {
    //   if (!this.grup) {
    //     return
    //   }
    //   this.dataGrup.push(this.grup)
    //   this.grup = [{ nama: '', email: '' }]
    // },
    // addGroup() {
    //   if (!this.grup) {
    //     return
    //   }
    //   this.dataGrup.push(this.grup)
    //   this.grup = [{ nama: '', email: '' }]
    // },
    addData(value) {
      this.dataGrup.push(value)
    },
  },
}
</script>

<style></style>
