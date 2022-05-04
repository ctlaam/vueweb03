<template>
  <div class="m-dialog-box m-dialog-error" hidden>
    <div class="m-dialog dlg-show-confirm">
      <div class="m-popup-content m-popup-content-showcf">
        <div class="m-popup-content-avatar m-icon-error-48"></div>
        <div class="m-popup-content-text">{{ message }}</div>
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
  props: ["message"],
  methods: {
    hideDialog: function () {
      let dialogBox = document.querySelectorAll(".m-dialog-box");
      dialogBox.forEach((element) => {
        element.setAttribute("hidden", "true");
      });
      this.focus()
    },
    focus() {
      let valueCode = document.querySelector("#txtEmployeeCode").value;
      let valueName = document.querySelector("#txtEmployeeName").value;
      let valueDepartment = document.querySelector(
        "#txtEmployeeDepartment"
      ).value;
      if(!valueCode){
        document.querySelector("#txtEmployeeCode").focus();
      } else if(!valueName){
        document.querySelector("#txtEmployeeName").focus();
      } else if(!valueDepartment){
        document.querySelector("#txtEmployeeDepartment").focus();
      }
    },
  },
};
</script>

<style></style>
