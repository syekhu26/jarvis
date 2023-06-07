<!-- <template>
  <div @click="isOpen = !isOpen" class="mt-6 px-6 cursor-pointer">
    <div
      class="border border-slate-300 rounded shadow flex items-center justify-center max-w-md w-[159px] h-[32px]"
    >
      <iconSortingIcon />
      <div class="px-1">Terdekat</div>
    </div>
    <div v-if="isOpen" class="">
      <div class="fixed inset-0 z-20">
        <div class="mt-10 my-10">
          <div
            class="bg-white w-[360px] h-[229] rounded p-3 shadow border border-slate-200 mt-[315px] mx-[365px]"
          >
            <div class="border-b mb-1">Terdekat</div>
            <div>Terjauh</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      sortValue: '',
    }
  },
  methods: {
    // applyFilter() {
    //   this.$emit('filter', this.filterValue);
    // },
    applySort() {
      this.$emit('sort', this.sortValue)
    },
  },
}
</script> -->

<template>
  <!-- <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      type="button"
      class="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none focus:border-blue-500"
    >
      {{ selectedOption }}
    </button>
    <div
      v-if="isDropdownOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div class="py-1" role="none">
        <a
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-spacing-x-3"
          role="menuitem"
        >
          {{ option }}
        </a>
      </div>
    </div>
  </div> -->
  <div>
    <div class="filter-dropdown">
      <select v-model="selectedFilter" @change="onFilterChange">
        <option value="upcoming=yes">Semua</option>
        <option value="upcoming=yes&notup=yes">Belum Upload</option>
        <option value="upcoming=yes&up=yes">Sudah Upload</option>
        <option value="passed=yes&owner=yes">Pemilik</option>
      </select>
    </div>
    <ul class="note-list">
      <li v-for="note in selectedFilter" :key="note.id"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedOption: 'Terdekat', // Tulisan awal sebelum dipilih opsi
      options: ['Terdekat', 'Terjauh'], // Daftar opsi dropdown
      selectedFilter:''
    }
  },
  computed: {
    filteredNotes() {
      const notes = this.$store.getters['notes/getNotes']
      const selectedFilter = this.selectedFilter

      if (selectedFilter === '') {
        return notes
      } else {
        return notes.filter(note => note.category === selectedFilter)
      }
    }
  },
  methods: {
    onFilterChange() {
      this.$store.dispatch('notes/setSelectedFilter', this.selectedFilter)
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectOption(option) {
      this.selectedOption = option
      this.isDropdownOpen = false
    },
  },
}
</script>
