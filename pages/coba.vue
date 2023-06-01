<template>
  <div>
    <label for="filter">Filter:</label>
    <input type="text" id="filter" v-model="filterValue" @input="applyFilter" />

    <label for="sort">Sort:</label>
    <select id="sort" v-model="sortValue" @change="applySort">
      <option value="">None</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterValue: '',
      sortValue: '',
    };
  },
  methods: {
    applyFilter() {
      this.$emit('filter', this.filterValue);
    },
    applySort() {
      this.$emit('sort', this.sortValue);
    },
  },
};
</script>