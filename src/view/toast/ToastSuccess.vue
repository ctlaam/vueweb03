<template>
  <div class="container-toast" hidden>
    <div class="toast toast-success">
      <div class="toast-icon"></div>
      <div class="toast-content">
        <div class="toast-title">Thành công</div>
        <div class="toast-message">{{ msgToast}}</div>
      </div>
      <div @click="hideToast" class="toast-icon-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toast-success",
  props: ["msgToast"],
  methods: {
    hideToast() {
      let toasts = document.querySelectorAll(".container-toast");
      toasts.forEach((element) => {
        element.setAttribute("hidden", "true");
      });
    },
  },
};
</script>

<style></style>
