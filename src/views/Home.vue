<template>
  <div class="home container">
    <div class="header flex">
    <div class="left flex flex-cloumn">
      <h1>Invoices</h1>
      <span>There are 4 total invoices</span>
    </div>
    <div class="rigth flex">
      <div @click="toggleFilterMenu" class="filter flex" ref="filter">
        <span>Filler by status</span>
        <img src="../assets/icon-arrow-down.svg" alt="">
    </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
