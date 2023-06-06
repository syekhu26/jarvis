<!-- <template>
  <div class="relative inline-block text-left px-8">
    <button @click="isOpen = !isOpen" class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Dropdown
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 12l-6-6h12l-6 6z" />
      </svg>
    </button>

    <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script> -->

<!-- <template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {{ buttonText }}
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="absolute z-10 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          @click="updateButtonText('Option 1')"
        >
          Option 1
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          @click="updateButtonText('Option 2')"
        >
          Option 2
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          @click="updateButtonText('Option 3')"
        >
          Option 3
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      buttonText: 'Select an option',
    };
  },
  methods: {
    updateButtonText(option) {
      this.buttonText = option;
    },
  },
};
</script> -->

<template>
  <div class="relative inline-block text-left">
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
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
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
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(option) {
      this.selectedOption = option.label
      const param = option.value
      this.loadData(param)
    },
    async loadData(param) {
      try {
        await this.$axios.get(`/notes/data?param=${param}`)
        // .then((response) => {})
      } catch (error) {
        console.error(error)
      }
    },
    // selectOption(option) {
    //   this.selectedOption = option
    //   this.isDropdownOpen = false
    // },
  },
}
</script>
