<template>

  <div>
    <TheHeader />
    <TheNavbar />
    <TheContent />
  </div>


</template>
<script>
import TheContent from "./components/layout/TheContent.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheContent,
    TheHeader,
    TheNavbar,
  },
};
</script>

<style>
  @import url('css/main.css');
</style>
