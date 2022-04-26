<template>
  <div class="m-dialog-box m-dialog-confirm" hidden>
    <div class="m-dialog dlg-show-confirm">
      <div class="m-popup-content m-popup-content-showcf">
        <div
          class="m-popup-content-avatar m-icon__exclamation-question-48"
        ></div>
        <div class="m-popup-content-text">
          Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
        </div>
      </div>
      <div class="m-popup-footer">
        <div class="m-left-btn">
          <button @click="hideDialog" class="m-button-agree m-button-disagree">
            Hủy
          </button>
        </div>
        <div class="m-right-btn">
          <button class="m-button-agree m-button-disagree m-layout-btn">
            Cất
          </button>
          <button class="m-button-agree">Đồng ý</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-dialog-confirm",
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
