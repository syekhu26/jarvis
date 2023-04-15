<template>
  <!-- <datetime v-model="date" input-id="startDate">
    <label for="startDate" slot="before">Field Label</label>
    <span class="description" slot="after">The field description</span>
  </datetime> -->
  <div>
    <datetime
      type="datetime"
      v-model="datetime"
      class="w-10 h-10 border w-full"
    ></datetime>
    <div>
      <div
        v-for="deadline in deadlines"
        :key="deadline"
        class="bg-slate-200 rounded mb-2 px-2 flex items-center"
      >
        {{ deadline }}
        <div>
          <button
            v-if="deadline"
            class="ml-2 mt-2"
            type="button"
            @click="removeDeadlines"
            title="Remove"
          >
            <iconSilangIcon class="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
    <div
      @click="addRemainder"
      class="flex items-center mt-2 mb-3 text-blue-600 cursor-pointer"
    >
      <iconPlusIcon />
      <span class="px-1">Tambah email</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datetime: '',
      deadlines: [],
    }
  },
  methods: {
    addRemainder() {
      if (!this.datetime) {
        return
      }
      this.deadlines.push(
        this.$moment(this.datetime).format('MMM DD,YYYY hh:mm A')
      )

      this.input = ''
    },
    removeDeadlines(i) {
      this.deadlines.splice(i, 1)
    },
  },
}
// import { ref } from 'vue'
// export default {
//   setup() {
//     return {
//       date: ref('2019-02-01 12:44'),
//     }
//   },
// }
</script>
