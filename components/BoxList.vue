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
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="editData"
        @blur="buttonInput"
      />
    </div>
    <div class="flex max-h-full w-72 flex-col rounded bg-white">
      <!-- daftar judul -->

      <!-- daftar box -->
      <div class="flex flex-col overflow-hidden pb-3">
        <div ref="listRef" class="flex-1 overflow-y-auto px-3"></div>
        <div class="px-3 mt-3">
          <CardNoteTim />
          <CardNoteTim class="mt-3" />
        </div>
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
    <FormNote :show="isOpen" @close="hide" />
  </div>
</template>

<script>
export default {
  props: {
    // inputData: {
    //   type: String,
    //   required: true,
    // },
    value: {
      type: String,
      required: true,
    },
    itemList: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
      showInput: false,
      buttonText: this.itemList.title,
    }
  },
  methods: {
    editData() {
        this.$emit('edit-data', this.title)
    },
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
  //   sendData() {
  //   const data = this.itemList.id
  //   this.$emit('itemList', data)
  // }
  },
}
</script>
