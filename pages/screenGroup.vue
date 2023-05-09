<template>
  <div :style="image" class="h-screen">
    <!-- navbar top -->

    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col">
        <!-- nama grup -->
        <div
          class="flex shrink-0 items-center absolute justify-between p-4 bg-slate-200 w-full bg-transparent bg-opacity-50"
        >
          <h1 class="text-2xl font-bold text-black">Tim 4 qatros</h1>
          <div @click="show" class="flex items-center">
            <iconMemberIcon />
            <div class="flex my-1 relative">
              <img
                class="rounded-full w-5 h-5 mx-1 top-0 left-0"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
              <img
                src=" https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Gambar 1"
                class="rounded-full w-5 h-5 mx-1 top-0 left-0 -ml-3"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Gambar 2"
                class="rounded-full w-5 h-5 mx-1 -ml-3"
              />
            </div>
          </div>
        </div>
        <!-- <CardGroup class="w-full w-72 h-72" /> -->
        <div class="flex-1 overflow-x-auto mt-[80px]">
          <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
            <BoxList
              v-for="(data, index) in dataList"
              :key="index"
              :inputData="data"
              class="mt-5 px-5"
            />
            <ButtonAddList @add-data="addData" />
          </div>
        </div>
        <PopupAllMember :show="isOpen" @close="hide" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  // props: {
  //   inputData: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      image: {
        backgroundImage:
          'url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
      },

      dataList: [],
      isOpen: false,
    }
  },
  methods: {
    addData(value) {
      // if (this.newData) {
      //   this.dataList.push(this.newData)
      //   this.newData = ''
      // }
      this.dataList.push(value)
    },
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
  },
}
</script>

<style></style>
