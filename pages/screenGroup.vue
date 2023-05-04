<template>
  <div :style="image" class="h-screen">
    <!-- navbar top -->

    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col">
        <!-- nama grup -->
        <div
          class="flex shrink-0 items-center justify-between p-4 bg-slate-200 w-full"
        >
          <h1 class="text-2xl font-bold text-black">Tim 4 qatros</h1>
        </div>
        <div class="flex-1 overflow-x-auto mt-6">
          <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
            <BoxList
              v-for="(data, index) in dataList"
              :key="index"
              :inputData="data"
              class="mt-5 px-5"
            />

            <div
              class="flex items-center justify-center mt-2 mb-3 cursor-pointer bg-gray-200 w-44 mt-6"
            >
              <iconTambahIcon />
              <div @click="buttonInput">
                {{ buttonText }}
              </div>
              <input
                class="border-b-2 border-slate-500"
                placeholder="Nama list"
                v-if="showInput"
                v-model="newData"
                @keyup.enter="addData"
                @blur="buttonInput"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  props: {
    inputData: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: {
        backgroundImage:
          'url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
      },
      newData: '',
      dataList: [],
      isOpen: false,
      showInput: false,
      buttonText: 'Tambah list',
      inputValue: '',
    }
  },
  methods: {
    addData() {
      if (this.newData) {
        this.dataList.push(this.newData)
        this.newData = ''
      }
    },
    buttonInput() {
      this.showInput = !this.showInput
      if (this.showInput) {
        this.buttonText = ''
      } else {
        this.buttonText = 'Tambah list'
      }
    },
  },
}
</script>

<style></style>
