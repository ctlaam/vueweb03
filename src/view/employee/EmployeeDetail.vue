<template>
  <!-- Form-details-employee-->
  <div
    @keyup.esc="btnCloseDialog"
    tabindex="0"
    class="m-dialog-form"
    :class="{ 'm-dialog-show': isShow }"
  >
    <div id="employee-form" class="form-detail-employee">
      <!-- header form -->
      <div class="header-form-employee">
        <div class="header-form-left">
          <h1 class="title-header-form">Thông tin nhân viên</h1>
          <div class="is-customer"><input type="checkbox" />Là khách hàng</div>
          <div class="is-supplier">
            <input type="checkbox" />&nbsp; &nbsp;Là nhà cung cấp
          </div>
        </div>
        <div class="header-form-right">
          <div class="btn-help-form">
            <div class="btn-help-form-icon"></div>
          </div>
          <div @click="btnCloseDialog" class="btn-close-form">
            <div class="btn-close-form-icon"></div>
          </div>
        </div>
      </div>
      <!-- end header form -->
      <!-- form input -->
      <div class="form-input-details">
        <div class="form-input-first">
          <div class="form-input-first-left">
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">
                  Mã <span style="color: red">*</span>
                </div>
                <div data-content="Mã không được để trống">
                  <input
                    novalidate
                    @blur="validateEmty"
                    id="txtEmployeeCode"
                    type="text"
                    class="input-text input-code"
                    required
                    v-model="employee.EmployeeCode"
                  />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">
                  Tên <span style="color: red">*</span>
                </div>
                <div data-content="Tên nhân viên không được để trống">
                  <input
                    novalidate
                    @blur="validateEmty"
                    required
                    type="text"
                    class="input-text input-name"
                    v-model="employee.EmployeeName"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">
                  Đơn vị <span style="color: red">*</span>
                </div>
                <div
                  data-content="Đơn vị không được phép để trống"
                  class="form-department"
                >
                  <input
                    novalidate
                    @blur="validateEmty"
                    required
                    class="choice-current-department"
                    v-model="employee.DepartmentName"
                  />
                  <div
                    @click="toggleDepartment"
                    class="box-icon-choice-departments"
                  >
                    <div class="icon-choice-number"></div>
                  </div>
                  <div
                    v-for="dep in departments"
                    :key="dep.DepartmentId"
                    :value="dep.DepartmentId"
                    class="choices-department"
                    hidden
                  >
                    <div class="label-department">
                      <div class="label-code-department">Mã đơn vị</div>
                      <div class="label-name-department">Tên đơn vị</div>
                    </div>
                    <div
                      v-for="dep in departments"
                      :key="dep.DepartmentId"
                      :value="dep.DepartmentId"
                      class="choice-department-item"
                      @click="choiceDepartment"
                    >
                      <div
                        class="child-of-item-department choice-code-department"
                      >
                        {{ dep.DepartmentId }}
                      </div>
                      <div
                        class="child-of-item-department choice-name-department"
                      >
                        {{ dep.DepartmentName }}
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <select
                  class="form-select"
                  property="DepartmentId"
                  name=""
                  id=""
                  v-model="employee.DepartmentId"
                >
                  <option
                    v-for="dep in departments"
                    :key="dep.DepartmentId"
                    :value="dep.DepartmentId"
                  >
                    {{ dep.DepartmentName }}
                  </option>
                    </select> -->
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">Chức danh</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-position"
                    v-model="employee.PositionName"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-input-first-right">
            <div class="form-row date">
              <div class="form-item item-date-of-birth">
                <div class="form-label">Ngày sinh</div>
                <div>
                  <input
                    :value="bindingDate(employee.DateOfBirth)"
                    @change="onChangeFormatDate"
                    type="date"
                    class="input-text input-date"
                    dateOfBirth
                  />
                </div>
              </div>
              <div class="form-item item-gender">
                <div class="form-label">Giới tính</div>
                <div>
                  <div class="choice-gender">
                    <input class="gender" name="Gender" type="radio" />
                    <span class="name-gender">Nam</span>
                    <input class="gender" name="Gender" type="radio" />
                    <span class="name-gender">Nữ</span>
                    <input class="gender" name="Gender" type="radio" />
                    <span class="name-gender">Khác</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">Mã</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-identity"
                    value=""
                  />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">Ngày cấp</div>
                <div>
                  <input type="date" class="input-text input-date-identity" />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item form-item-place">
                <div class="form-label">Nơi cấp</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-position"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-input-second">
          <div class="form-contact">
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">Địa chỉ</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-address"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">ĐT di động</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-phone"
                    v-model="employee.PhoneNumber"
                  />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">ĐT cố định</div>
                <div>
                  <input type="text" class="input-text input-phone" value="" />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">Email</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-email"
                    v-model="employee.Email"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">Tài khoản ngân hàng</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-account-bank"
                    value=""
                  />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">Tên ngân hàng</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-name-bank"
                    value=""
                  />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">Chi nhánh</div>
                <div>
                  <input
                    type="text"
                    class="input-text input-place-bank"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer form -->

        <div class="footer-form">
          <div class="footer-left">
            <button @click="btnCloseDialog" class="btn btn-cancle">Hủy</button>
          </div>
          <div class="footer-right">
            <button @click="btnSaveOnClick" class="btn btn-save">Cất</button>
            <button @click="btnSaveOnClick" class="btn btn-save-add">
              Cất và thêm
            </button>
            <DialogConfirm />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End form -->
</template>
<script>
/* eslint-disable */

import DialogConfirm from "../dialog/DialogConfirm.vue";
import DialogError from "../dialog/DialogError.vue";
import DialogWarning from "../dialog/DialogWarning.vue";
import axios from "axios";

export default {
  name: "the-employee-detail",
  props: ["isShow", "employeeSelectedInChil", "formMode"],
  components: {
    DialogConfirm,
    DialogError,
    DialogWarning,
  },
  /**
   * Mô tả : nếu employeeSelectedInChil thay đổi thì gán employee = giá trị mới
   * @param
   * @return
   * Created by: Cao Thanh Lâm - MF1103
   * Created date: 10:20 22/04/2022
   */
  watch: {
    employeeSelectedInChil: function (newValue) {
      this.employee = newValue;
    },
  },
  methods: {
    // fomart dữ liệu date do người dùng nhập vào
    bindingDate(date) {
      if (date) {
        date = new Date(date);
        // lây ra ngày
        let day = date.getDate();
        // lấy tháng
        let month = date.getMonth() + 1;
        // lấy năm
        let year = date.getFullYear();
        // thêm số 0 vào đằng trước
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
        date = year + "-" + month + "-" + day;
        return date;
      } else {
        return "";
      }
    },
    // fomart date ở trong dialog detail
    onChangeFormatDate(e) {
      if (e.target.value) {
        document.querySelector(".input-text.input-date").style.color = "black";
      }
      // kiểm tra nếu target chứa attibute "dateofbirth" thì gán employee.dateofbith = value
      if (e.target.hasAttribute("dateOfBirth")) {
        this.employee.DateOfBirth = e.target.value;
      }
    },
    /**
     * Mô tả : Đóng dialog
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:53 21/04/2022
     */
    btnCloseDialog() {
      this.$emit("closeOnClick", false);
    },
    /**
     * Mô tả : Hàm reload lại dữu liệu
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:54 24/04/2022
     */
    reloadData() {
      this.$emit("reloadData");
    },
    /**
     * Mô tả : Validate các dữ liệu bắt buộc
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:54 24/04/2022
     */
    validateEmty(event) {
      var el = event.currentTarget;
      var value = el.value;
      // nếu các trường dữ liệ bắt buộc bị trống thì báo đỏ form input
      if (!value) {
        let a = el.parentElement.previousElementSibling;
        a.classList.add("error");
        // add class error
        el.classList.add("error");
        // remove class error sau 3s
        setTimeout(() => {
          el.classList.remove("error");
          a.classList.remove("error");
        }, 3000);
      }
    },
    /**
     * Mô tả : Lưu dữ liệu
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:55 24/04/2022
     */
    btnSaveOnClick(e) {
      let me = this;
      if (this.formMode == this.MISAEnum.FormMode.Add) {
        // thu thập thông tin nhân viên
        // gọi api lưu dữ liệu
        let employee = this.employee;
        axios
          .post("http://amis.manhnv.net/api/v1/Employees", employee)
          .then(() => {
            this.TheLoading(1500);
            if (e.target.classList.contains("btn-save-add")) {
              me.employee = {};
              axios
                .get("http://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
                .then((res) => {
                  me.employee.EmployeeCode = res.data;
                  // focus vào ô nhâp liệu đầu tiên
                  document.getElementById("txtEmployeeCode").focus();
                });
            } else if (e.target.classList.contains("btn-save")) {
              this.btnCloseDialog();
            }
            this.reloadData();
            setTimeout(() => {
              this.showToastMsgSuccess("Thêm nhân viên thành công");
            }, 1500);
          })
          .catch((error) => {
            console.log(error.response.data.userMsg)
          })
      } else {
        // formmode = put
        let employee = this.employee;

        axios
          // update dữ liệu employee

          .put(
            `http://amis.manhnv.net/api/v1/Employees/${employee.EmployeeId}`,
            employee
          )
          .then(() => {
            this.TheLoading(1500);
            if (e.target.classList.contains("btn-save-add")) {
              me.employee = {};
              axios
                .get("http://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
                .then((res) => {
                  me.employee.EmployeeCode = res.data;
                  // focus vào ô nhâp liệu đầu tiên
                  document.getElementById("txtEmployeeCode").focus();
                });
            } else if (e.target.classList.contains("btn-save")) {
              this.btnCloseDialog();
            }
            this.showToastMsgSuccess("Cập nhật nhân viên thành công");
          });
      }
    },
    /**
     * Mô tả : Show dánh sách các phòng bàn
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:56 24/04/2022
     */
    toggleDepartment() {
      let choicesDepartments = document.querySelector(".choices-department");
      // nếu có atrribute hidden thì remove và show
      if (choicesDepartments.hasAttribute("hidden")) {
        choicesDepartments.removeAttribute("hidden");
      }
      // nếu không có atrribute setAttribute và ẩn
      else {
        choicesDepartments.setAttribute("hidden", "true");
      }
    },
    /**
     * Mô tả : Lấy DepartmentId và gán vào trong object employee
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 12:21 23/04/2022
     */
    choiceDepartment(e) {
      const me = this;
      let valueDepartment;
      // nếu e.target chứa class child-of-item-department
      if (e.target.classList.contains("child-of-item-department")) {
        // lấy value của phần từ cha chauws child of item department
        valueDepartment = e.target.parentElement.getAttribute("value");
        // gán lại vào object employee
        me.employee.departmentId = valueDepartment;
        // lấy tên phòng ban và hiển thị gán vào cho vaue của input

        if (e.target.classList.contains("choice-name-department")) {
          me.employee.DepartmentName = e.target.innerText;
          me.toggleDepartment();
        } else {
          me.employee.DepartmentName = e.target.nextElementSibling.innerText;
          me.toggleDepartment();
        }
      } else {
        // nếu e.target k chứa class child-of-item-department
        valueDepartment = e.target.getAttribute("value");
        // gán lại vào object employee
        me.employee.departmentId = valueDepartment;
        // lấy tên phòng ban và hiển thị gán vào cho vaue của input
        me.employee.DepartmentName = e.target.querySelector(
          ".choice-name-department"
        ).innerText;
        me.toggleDepartment();
      }
    },
    showToastMsgSuccess(msg) {
      this.$emit("showToastMsgSuccess", msg);
    },
    TheLoading(ms) {
      this.$emit("TheLoading", ms);
    },
  },
  data() {
    return {
      // Nhân viên dược thêm hoặc sửa
      employee: {},
      // danh sách departments
      departments: [],
    };
  },
  mounted() {
    document.querySelector(".input-text.input-code");
  },
  created() {
    // lấy dữ liệu từ trên data
    const me = this;
    axios
      .get("http://amis.manhnv.net/api/v1/Departments")
      .then(function (response) {
        me.departments = response.data;
      })
      .catch(function (error) {
        showToastMsgErr(error);
      });
  },
};
</script>

<style></style>
