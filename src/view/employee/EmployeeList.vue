<template>
  <!-- Content -->
  <div class="m-content">
    <!-- header-content -->
    <div class="header-content">
      <div class="header-content-left">
        <div class="title-header-content">Nhân viên</div>
        <div class="all-list">
          <span class="icon-all-list"> </span>
          <a href="#" class="name-all-list">Tất cả danh mục</a>
        </div>
      </div>
      <div class="header-content-right">
        <div class="convenient-header">
          <div id="convenient" class="name-convenient">
            Tiện ích <span class="icon-convenient"></span>
          </div>
          <a class="choice-content-right choice-convenient"
            >Đồng bộ với AMIS hệ thống</a
          >
        </div>
        <div class="add-employee">
          <div class="box-add-employe">
            <div @click="btnAddOnClick" class="name-add-employee">Thêm</div>
            <div class="box-icon-add-employee">
              <span class="icon-add-employee"></span>
            </div>
          </div>
          <div class="choice-content-right choice-add-employee">
            Nhập từ excel
          </div>
        </div>
      </div>
    </div>
    <!-- End header content-->
    <!-- maincontent -->
    <div class="main-content">
      <div class="header-main-content">
        <div id="peform-all" class="main-content-left">
          <div class="convenient-header">
            <div class="name-convenient">
              Thực hiện hàng loạt<span class="icon-convenient"></span>
            </div>
          </div>
        </div>
        <div class="main-content-right">
          <div id="search-employee" class="header-search">
            <input
              class="input-search"
              placeholder="Tìm theo mã,tên nhân viên"
            />
            <div class="icon-search"></div>
          </div>
          <div @click="reloadData" class="icon-refresh"></div>
        </div>
      </div>
      <!-- Table -->
      <div class="m-grid-tbl">
        <div class="m-grid-table">
          <table id="tblEmployeeList" class="m-table">
            <thead>
              <tr>
                <th
                  class="text-align-center"
                  style="width: 3%"
                  propName="Checkbox"
                >
                  <input type="checkbox" />
                </th>
                <th
                  class="text-align-left"
                  style="width: 9%"
                  propName="EmployeeCode"
                >
                  Mã nhân viên
                </th>
                <th
                  class="text-align-left"
                  propName="EmployeeName"
                  style="width: 10%"
                >
                  Tên nhân viên
                </th>
                <th
                  class="text-align-left"
                  style="width: 7%"
                  propName="GenderName"
                >
                  Giới tính
                </th>
                <th
                  class="text-align-center"
                  style="width: 7%"
                  propName="EmployeePosition"
                >
                  Ngày sinh
                </th>
                <th
                  class="text-align-left"
                  style="width: 7%"
                  propName="EmployeeIdentity"
                >
                  Số CMND
                </th>
                <th
                  class="text-align-left"
                  style="width: 7%"
                  propName="EmployeePosition"
                >
                  Chức danh
                </th>
                <th
                  class="text-align-left"
                  style="width: 10%"
                  propName="DepartmentName"
                >
                  Tên đơn vị
                </th>
                <th
                  class="text-align-left"
                  style="width: 9%"
                  propName="TelephoneNumber"
                >
                  Số tài khoản
                </th>
                <th
                  class="text-align-left"
                  style="width: 9%"
                  propName="Namebank"
                >
                  Tên ngân hàng
                </th>
                <th
                  class="text-align-left"
                  style="width: 16%"
                  propName="PlaceBank"
                >
                  Chi nhánh tài khoản ngân hàng
                </th>
                <th
                  class="text-align-center"
                  style="width: 8%"
                  propName="Salary"
                  format="Money"
                >
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="" v-for="emp in employees" :key="emp.EmployeeId">
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-left">{{ emp.EmployeeCode }}</td>
                <td
                  class="text-align-left"
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    max-width: 160px;
                    white-space: nowrap;
                  "
                >
                  {{ emp.EmployeeName }}
                </td>
                <td class="text-align-left">{{ emp.GenderName }}</td>
                <td class="text-align-center">
                  {{ formatDate(emp.DateOfBirth) }}
                </td>
                <td class="text-align-left">{{ emp.IdentityNumber }}</td>
                <td class="text-align-left">{{ emp.EmployeePosition }}</td>
                <td class="text-align-left">{{ emp.DepartmentName }}</td>
                <td class="text-align-left">00120000000</td>
                <td class="text-align-left">MBBank</td>
                <td class="text-align-left">Chi nhánh YASUO</td>
                <td class="text-align-left">
                  <div class="action-employee">
                    <div
                      @click.prevent="editEmployee(emp)"
                      class="default-action"
                    >
                      Sửa
                      <ul class="choice-action">
                        <li
                          @click.stop="showDialogDeleteEmployee(emp)"
                          class="choice-action-item"
                        >
                          Xóa
                        </li>
                        <li class="choice-action-item">Nhân bản</li>
                        <li class="choice-action-item">Sử dụng</li>
                      </ul>
                    </div>
                    <div @click="showChoiceAction" class="icon-action"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--  Paging -->

      <div class="m-paging">
        <div class="total-employees">Tổng số : <b>101</b> bản ghi</div>
        <div class="m-paging-right">
          <div class="employee-in-tables" ref="cbb">
            <p class="choice-current-number">20 bản ghi trên trang</p>
            <div @click="toggle" class="box-icon-choice-number">
              <div class="icon-choice-number"></div>
            </div>
            <div v-show="open" class="choices-number-employee">
              <div class="choice-number-item">10 bản ghi trên trang</div>
              <div class="choice-number-item active">20 bản ghi trên trang</div>
              <div class="choice-number-item">30 bản ghi trên trang</div>
              <div class="choice-number-item">50 bản ghi trên trang</div>
              <div class="choice-number-item">100 bản ghi trên trang</div>
            </div>
          </div>
          <div class="navbar-number">
            <div class="btn btn-prev incapability">Trước</div>
            <div class="pages">
              <div class="number-page-item selected">1</div>
              <div class="number-page-item">2</div>
              <div class="number-page-item">...</div>
              <div class="number-page-item">5</div>
            </div>
            <div class="btn btn-next">Sau</div>
          </div>
        </div>
      </div>
    </div>

    <!-- End maincontent -->
    <!-- EndContent -->
    <EmployeeDetails
      @reloadData="reloadData"
      :isShow="isShowDialog"
      @closeOnClick="showOrHideDialog"
      :employeeSelectedInChil="employeeSelected"
      :formMode="formMode"
    />
    <DialogDelete
      :employeeSelectedInChil="employeeSelected"
      @reloadData="reloadData"
    />
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import EmployeeDetails from "./EmployeeDetail.vue";
import DialogDelete from "../dialog/DialogDelete.vue";

export default {
  name: "employee-list",
  components: {
    EmployeeDetails,
    DialogDelete,
  },
  methods: {
    /**
     * Mô tả : Hàm định dạng ngày tháng
     * @param value : Ngày tháng cần định dạng
     * @return value : Ngày tháng năm đã định dạng
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 22:05 21/04/2022
     */
    // Formate ngày và hiện thị trên màn hình
    formatDate(value) {
      try {
        // nếu dữ liệu tồn tại
        if (value) {
          // lấy dữ liệu date từ trên api
          value = new Date(value);
          // lây ra ngày
          let date = value.getDate();
          // lấy tháng
          let month = value.getMonth() + 1;
          // lấy năm
          let year = value.getFullYear();
          // thêm số 0 vào đằng trước
          date = date < 10 ? `0${date}` : date;
          month = month < 10 ? `0${month}` : month;
          value = `${date}/${month}/${year}`;
        } else {
          value = "";
        }
        return value;
      } catch (error) {
        // show toast error nếu lỗi
      }
    },
    /**
    * Mô tả : hàm show or hide dialog
    * @param isShow:true = show , false = hide
    * @return
    * Created by: Cao Thanh Lâm - MF1103
    * Created date: 13:46 24/04/2022
    */
    showOrHideDialog(isShow) {
      this.isShowDialog = isShow;
    },
    btnAddOnClick() {
      const me = this;

      try {
        // gán formmode bằng add
        me.formMode = this.MISAEnum.FormMode.Add;
        // gán isShowDialog bằng true
        me.showOrHideDialog(true);
        // gán employeeSelected bằng hàm rỗng
        me.employeeSelected = {};
        axios
          .get("http://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
          .then((res) => {
            me.employeeSelected.EmployeeCode = res.data;
            // focus vào ô nhâp liệu đầu tiên
            document.getElementById("txtEmployeeCode").focus();
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
    // hàm load lại data mỗi thi crud nhân viên
    reloadData() {
      var me = this;
      // lấy dự liệu danh sách nhiên viên
      axios
        .get("http://amis.manhnv.net/api/v1/Employees")
        .then(function (res) {
          me.employees = res.data;
        })
        .catch(function (err) {
          // kiểm tra mã lỗi của api và thực hiện thao tác với các mã lỗi đó
          me.showToastMsgErr(err.response.data.Message);
        });
    },
    /**
    * Mô tả : Hàm chọn số lượng bản ghi nhân viên
    * @param
    * @return
    * Created by: Cao Thanh Lâm - MF1103
    * Created date: 13:44 24/04/2022
    */
    showChoicesNumber() {
      // chọn element có class choices-number-employee
      let choices = document.querySelector(".choices-number-employee");
      // element chứa class choices-show thì tắt
      if (choices.classList.contains("choices-show")) {
        choices.classList.remove("choices-show");
      }
      // element chứa class choices-show thì bật
       else {
        choices.classList.add("choices-show");
      }
    },
    /**
     * Mô tả : Hàm show các choice action
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:35 24/04/2022
     */
    showChoiceAction(event) {
      // Tìm phần tử chứa class choices-action bằng event.target
      let nextSibling = event.target.previousElementSibling;
      let choicesAction = nextSibling.firstElementChild;
      // nếu phần từ chứa class choices-show thì tắt
      if (choicesAction.classList.contains("choices-show")) {
        choicesAction.classList.remove("choices-show");
      }
      // nếu phần từ k chứa class choices-show thì hiển thị
      else {
        // truowcss khi hiển thị thì loại bỏ tất ẩn tất cả cách elemnent có class choices-action
        document.querySelectorAll(".choice-action").forEach((item) => {
          item.classList.remove("choices-show");
        });
        choicesAction.classList.add("choices-show");
      }
    },
    /**
    * Mô tả : Đóng mở combobox
    * @param
    * @return
    * Created by: Cao Thanh Lâm - MF1103
    * Created date: 13:51 24/04/2022
    */
    toggle() {
      this.open = !this.open;
      console.log(this.open);
    },
    /**
     * Mô tả : Mô tả : Hiển thị form cho phép sửa thông tin nhân viên
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 11:00 24/04/2022
     */
    editEmployee(emp) {
      var me = this;
      me.formMode = this.MISAEnum.FormMode.Edit;
      this.employeeSelected = emp;
      setTimeout(function () {
        document.getElementById("txtEmployeeCode").focus();
      }, 100);
      // lấy thông tin nhân viên
      // C1 lây thôn tin nhân viên có sẵn dưới clients
      // C2 lấy thông tin nhân viên từ Api

      // binding lên form chi tiết ----> việc ủa component con

      // hiển thi form
      this.showOrHideDialog(true);
    },
    /**
     * Mô tả : Show dialog xác nhân xóa nhân viên
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 13:33 24/04/2022
     */
    showDialogDeleteEmployee(emp) {
      // hiển thị dilog xác nhận xóa
      document.querySelector(".m-dialog-delete").removeAttribute("hidden");
      this.employeeSelected = emp;
    },
  },
  data() {
    return {
      // Số lượng nhân viên
      employees: [],
      // Số phòng ban
      departments: [],
      // Biến show dialog
      isShowDialog: false,
      // nhân viên được hconj
      employeeSelected: {},
      open: false,
      // formMode để biết là form dùng để thêm mới hoặc là sửa
      formMode: this.MISAEnum.FormMode.Add,
    };
  },
  // 2created
  created() {
    var me = this;
    // phát hiện sự kiện click ra ngoài để từ đó đóng cbb nếu combobox đang được mở
    document.addEventListener("click", function (event) {
      if (!me.$refs.cbb.contains(event.target)) {
        me.open = false;
      }
    });

    // lấy dự liệu danh sách nhiên viên
    axios
      .get("http://amis.manhnv.net/api/v1/Employees")
      .then(function (res) {
        me.employees = res.data;
      })
      .catch(function (err) {
        // kiểm tra mã lỗi của api và thực hiện thao tác với các mã lỗi đó
        // me.showToastMsgErr(err.response.data.devMsg);
      });
    // lấy dữ liệu phòng ban
    axios
      .get("http://amis.manhnv.net/api/v1/Departments")
      .then(function (response) {
        me.departments = response.data;
      })
      .catch(function (error) {
        // showToastMsgErr(error);
      });
  },

  beforeUnmount() {

  },
};
</script>

<style></style>
