<template>
  <div>
    <div
      class="flex items-center justify-between px-3 py-2 bg-gray-200 rounded"
    >
      <h3 class="text-sm font-semibold text-gray-700">
        {{ inputData }}
      </h3>
      <!-- <button class="grid h-8 w-8 place-content-center rounded-md hover:bg-gray-300" @click="removeList(list.id)">
				<XIcon class="h-5 w-5 text-gray-400" />
			</button> -->
    </div>
    <div class="flex max-h-full w-72 flex-col rounded bg-white">
      <!-- daftar judul -->

      <!-- daftar box -->
      <div class="flex flex-col overflow-hidden pb-3">
        <div ref="listRef" class="flex-1 overflow-y-auto px-3"></div>
        <!-- <div class="px-3">
        <CardNoteTim />
        <CardNoteTim class="mt-3" />
      </div> -->
        <div class="mt-3 px-3">
          <button
            type="button"
            class="flex w-full items-center rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-800"
          >
            Tambah Catatan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputData: {
      type: String,
      required: true,
    },
  },
}
</script>
