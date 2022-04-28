<template>
  <div class="container-toast" hidden>
    <div class="toast toast-error">
      <div class="toast-icon"></div>
      <div class="toast-content">
        <div class="toast-title">Đây là toast error</div>
        <div class="toast-message">
          Lorem ipsum dolor, sit amet saadasd Lâm 1234567
        </div>
      </div>
      <div @click="closeToast" class="toast-icon-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toast-error",
  methods: {
    closeToast() {
      console.log(123)
      debugger;
      let a = document.querySelectorAll(".container-toast");
      a.forEach((element) => {
        element.setAttribute("hidden", "true");
      });
    },
  },
};
</script>

<style></style>
