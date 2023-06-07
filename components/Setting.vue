<template>
  <!-- <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      type="button"
      class="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none focus:border-blue-500"
    >
      {{ selectedOption }}
    </button>
    <ul
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
    >
      <div class="py-1" role="none">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-spacing-x-3"
          role="menuitem"
        >
          <a @click="selectOption(option)">{{ option.label }}</a>
        </li>
      </div>
    </ul>
  </div> -->
  <!-- <div>
    <select v-model="selectedFilter" @change="updateFilter">
      <option
        v-for="filter in filters"
        :key="filter.value"
        :value="filter.value"
      >
        {{ filter.label }}
      </option>
    </select>
  </div> -->

  <div>
    <button @click="toggleDropdown">{{ selectedOption }}</button>
    <ul v-if="isOpen">
      <li v-for="option in options" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: 'Semua',
      options: [
        { label: 'Semua', Value: 'upcoming=yes' },
        { label: 'Belum Upload', Value: 'upcoming=yes&notup=yes' },
        { label: 'Sudah Upload', Value: 'upcoming=yes&up=yes' },
        { label: 'Pemilik', Value: 'passed=yes&owner=yes' },
      ],
    }
  },

  computed: {
    // selectedFilter: {
    //   get() {
    //     return this.$store.getters['notes/selectedFilter']
    //   },
    //   set(value) {
    //     this.$store.dispatch('notes/setSelectedFilter', value)
    //   },
    // },
    // filters() {
    //   // Menyimpan daftar filter yang dapat dipilih
    //   return [
    //     { label: 'Semua', value: 'upcoming=yes' },
    //     { label: 'Belum Upload', value: 'upcoming=yes&notup=yes' },
    //     { label: 'Sudah Upload', Value: 'upcoming=yes&up=yes' },
    //     { label: 'Pemilik', Value: 'passed=yes&owner=yes' },
    //     // Tambahkan filter lain sesuai kebutuhan Anda 
    //   ]
    // },
  },
  methods: {
    // updateFilter() {
    //   // Memperbarui filter saat dropdown berubah
    //   this.$emit('filter-changed', this.selectedFilter)
    // },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(option) {
      this.selectedOption = option.label
      this.$store.dispatch('notes/fetchNotes', option.value)
      this.isOpen = false
    },
    // selectOption(option) {
    //   this.selectedOption = option.label
    //   const param = option.value
    //   this.loadData(param)
    // },
    // async loadData(param) {
    //   console.log(param);
    //   try {
    //     await this.$axios.get(`/notes/data?${param}`)
    //     // .then((response) => {})
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
  },
}
</script>
