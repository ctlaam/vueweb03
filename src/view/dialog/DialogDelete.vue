<template>
  <div class="m-dialog-box m-dialog-delete" hidden>
    <div class="m-dialog dlg-show-confirm">
      <div class="m-popup-content m-popup-content-showcf">
        <div class="m-popup-content-avatar m-icon__exclamation-error-48"></div>
        <div class="m-popup-content-text">
          Bạn có thực sự muốn xóa Nhân viên
          <b>{{ employee.EmployeeCode }}</b> không?
        </div>
      </div>
      <div class="m-popup-footer m-footer-showcf">
        <button @click="hideDialog" class="m-button-cancle">Không</button>
        <button @click="deleteEmployee" class="m-button-agree">Có</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  name: "the-dialog-delete",
  props: ["employeeSelectedInChil", "isShowDialogDelete"],
  watch: {
    employeeSelectedInChil: function (newValue) {
      this.employee = newValue;
    },
  },
  data() {
    return {
      employee: {},
    };
  },
  methods: {
    /**
    * Mô tả : Ẩn dialog
    * @param
    * @return
    * Created by: Cao Thanh Lâm - MF1103
    * Created date: 12:00 23/04/2022
    */
    hideDialog: function () {
      // chọn tất cả dialog
      // cho qua vòng lặp for và ẩn tất cả
      let dialogsBox = document.querySelectorAll(".m-dialog-box");
      dialogsBox.forEach((element) => {
        element.setAttribute("hidden", "true");
      });
    },
    // hàm reload lại dự liệu
    reloadData() {
      this.$emit("reloadData");
    },
    /**
    * Mô tả : Hàm xóa nhân viên
    * @param
    * @return
    * Created by: Cao Thanh Lâm - MF1103
    * Created date: 14:01 23/04/2022
    */
    deleteEmployee() {
      let me = this;
      axios
        .delete(
          `http://amis.manhnv.net/api/v1/Employees/${this.employee.EmployeeId}`
        )
        // show toast message khi xóa thành công
        .then(function () {
          // load lai dữ liệu sau khi xóa
          me.reloadData();
          // ẩn dialog
          me.hideDialog();
          alert("Xóa thành công");
        });
    },
  },

};
</script>

<style></style>
