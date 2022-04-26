<template>
  <div class="m-dialog-box m-dialog-error" hidden>
    <div class="m-dialog dlg-show-confirm">
      <div class="m-popup-content m-popup-content-showcf">
        <div class="m-popup-content-avatar m-icon-error-48"></div>
        <div class="m-popup-content-text">Đây là dialog lỗi</div>
      </div>
      <div class="m-popup-footer m-footer-showcf">
        <button @click="hideDialog" class="m-button-agree">Đóng</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-dialog-error",
  methods: {
    hideDialog: function () {
      let dialogBox = document.querySelectorAll(".m-dialog-box");
      dialogBox.forEach((element) => {
        element.setAttribute("hidden", "true");
      });
    },
  },
};
</script>

<style></style>
