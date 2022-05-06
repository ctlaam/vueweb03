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
          <div id="convenient-header2" class="convenient-header">
            <div @click="deleteEmployees" class="name-convenient">
              Thực hiện hàng loạt<span class="icon-convenient"></span>
            </div>
          </div>
        </div>
        <div class="main-content-right">
          <div id="search-employee" class="header-search">
            <input
              class="input-search"
              placeholder="Tìm theo mã,tên nhân viên"
              v-model="searchValue"
              @keyup.enter="filterEmployee"
            />
            <div @click="filterEmployee" class="icon-search"></div>
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
                  @click="checkAll"
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
                <td class="text-align-center">
                  <input
                    @click="check"
                    type="checkbox"
                    :value="emp.EmployeeId"
                  />
                </td>
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
                          @click.stop="showDialogDeleteEmployee($event, emp)"
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
        <div class="total-employees">
          Tổng số : <b>{{ totalEmployees }}</b> bản ghi
        </div>
        <div class="m-paging-right">
          <div class="employee-in-tables" ref="cbb">
            <p class="choice-current-number">10 bản ghi trên trang</p>
            <div @click="toggle" class="box-icon-choice-number">
              <div class="icon-choice-number"></div>
            </div>
            <div
              @click="choiceNumberEmployeeInTables"
              v-show="open"
              class="choices-number-employee"
            >
              <div class="choice-number-item active" value="10">
                10 bản ghi trên trang
              </div>
              <div class="choice-number-item" value="20">
                20 bản ghi trên trang
              </div>
              <div class="choice-number-item" value="30">
                30 bản ghi trên trang
              </div>
              <div class="choice-number-item" value="50">
                50 bản ghi trên trang
              </div>
              <div class="choice-number-item" value="100">
                100 bản ghi trên trang
              </div>
            </div>
          </div>
          <div class="navbar-number">
            <div @click="prePage" class="btn btn-prev incapability">Trước</div>
            <div
              v-for="(index, page) in totalNumberPage"
              :key="index"
              class="pages"
            >
              <div
                @click="choiceNumberPage"
                class="number-page-item"
                :value="page + 1"
              >
                {{ page + 1 }}
              </div>
              <div v-if="false" class="number-page-item">...</div>
            </div>
            <div @click="nextPage" class="btn btn-next ">Sau</div>
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
      @showToastMsgSuccess="showToastMsgSuccess"
      @TheLoading="TheLoading"
      :cloneObject="cloneObject"
    />
    <DialogDelete
      :employeeSelectedInChil="employeeSelected"
      @reloadData="reloadData"
      @showToastMsgSuccess="showToastMsgSuccess"
      @TheLoading="TheLoading"
      :employeesSelected="employeesSelected"
      :msgDelete="msgDelete"
      :formMode="formMode"
    />
    <ToastSuccess :msgToast="msgToast" />
    <TheLoading />
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import EmployeeDetails from "./EmployeeDetail.vue";
import DialogDelete from "../dialog/DialogDelete.vue";
import ToastSuccess from "../toast/ToastSuccess.vue";
import TheLoading from "../loading/FakeTheLoading.vue";

export default {
  name: "employee-list",
  components: {
    EmployeeDetails,
    DialogDelete,
    ToastSuccess,
    TheLoading,
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
        me.$nextTick(() => {
          document.querySelector("[tabindex='4']").checked = true;
          document.getElementById("txtEmployeeCode").focus();
        });
        axios
          .get("http://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
          .then((res) => {
            me.employeeSelected.EmployeeCode = res.data;
            // focus vào ô nhâp liệu đầu tiên
            me.cloneObject = { ...me.employeeSelected };
            console.log(me.cloneObject);
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
      me.TheLoading(2000);
      me.filterEmployee();
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
      this.cloneObject = emp;
      setTimeout(function () {
        document.getElementById("txtEmployeeCode").focus();
        if (document.querySelector(".input-text.input-date").value) {
          document.querySelector(".input-text.input-date").style.color =
            "black";
        }
      }, 50);
      document.querySelector(".input-text.input-date").style.color = "#ccc";
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
    showDialogDeleteEmployee(event, emp) {
      console.log(event.target);
      const me = this;
      me.msgDelete = "";
      // hiển thị dilog xác nhận xóa
      document.querySelector(".m-dialog-delete").removeAttribute("hidden");
      this.employeeSelected = emp;

      me.formMode = this.MISAEnum.FormMode.Delete;
    },
    /**
     * Mô tả : Show toast msg
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 19:04 26/04/2022
     */
    showToastMsgSuccess(msg) {
      let toastMsgSuccess = document.querySelector(".container-toast");
      this.msgToast = msg;
      toastMsgSuccess.removeAttribute("hidden");
      setTimeout(() => toastMsgSuccess.setAttribute("hidden", "true"), 3000);
    },
    /**
     * Mô tả : Hàm lọc dữ liệu theo yêu cầu
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 20:08 29/04/2022
     */
    filterEmployee() {
      const me = this;

      axios
        .get(
          `http://amis.manhnv.net/api/v1/Employees/filter?pageSize=${me.quantityEmployeeDefault}&pageNumber=${me.numberPageSelected}&employeeFilter=${me.searchValue}`
        )
        .then(async function (res) {
          // lấy liệu trả về
          me.employees = res.data.Data;
          // gán tổng số lượng trang
          me.totalNumberPage = res.data.TotalPage;
          // gán tổng số lượng bản ghi
          me.totalEmployees = res.data.TotalRecord;
          // nếu không tồn tại dữ liệu
          if (!me.employees) {
            // gán page được chọn là page thứ nhất
            me.numberPageSelected = 1;

            // nếu có dữ liệu search
            if (me.searchValue) {
              // gán tổng page bằng 1
              me.totalNumberPage = 1;
              // gọi hàm defaultPage
              me.defaultPageNumberEmployee();
            } else {
              // nếu không có dữ liệu search truyền vào thì gọi lại hàm filterEmployee
              me.filterEmployee();
            }
            setTimeout(() => {
              me.defaultPageNumberEmployee();
            }, 200);
          }
          setTimeout(() => {
            // Lấy value page được chọn
            let numberpageSelected = document
              .querySelector("div[value].number-page-item.selected")
              .getAttribute("value");
            // nếu page được chọn có value > 1
            if (numberpageSelected > 1) {
              document
                // remove class incapability của nút prev
                .querySelector(".btn-prev")
                .classList.remove("incapability");
              document
                // add class incapability của nút next
                .querySelector(".btn-next")
                .classList.remove("incapability");
              // page được chọn = tổng số pageNumberSelected
              if (numberpageSelected == me.totalNumberPage) {
                document
                  // thêm class incapability của nút next
                  .querySelector(".btn-next")
                  .classList.add("incapability");
              }
            }
            // nếu numberpageSelected = 1 và tổng số page > 1
            else if (numberpageSelected == 1 && me.totalNumberPage > 1) {
              // thêm class incapability vào nút prev
              document.querySelector(".btn-prev").classList.add("incapability");
              document
                .querySelector(".btn-next")
                .classList.remove("incapability");
            } else if (numberpageSelected == 1 && me.totalNumberPage == 1) {
              document.querySelector(".btn-prev").classList.add("incapability");
              document.querySelector(".btn-next").classList.add("incapability");
            } else {
              document.querySelector(".btn-prev").classList.add("incapability");
              document.querySelector(".btn-next").classList.add("incapability");
            }
          }, 110);
        })
        .catch(function (err) {
          // kiểm tra mã lỗi của api và thực hiện thao tác với các mã lỗi đó
          // me.showToastMsgErr(err.response.data.devMsg);
        });
    },

    /**
     * Mô tả : fake load dữ liệu
     * @param ms số s muốn fake
     * @return
     * Created by: Cao Thanh Lâm
     * Created date: 09:44 29/04/2022
     */
    TheLoading(ms) {
      let loading = document.getElementById("preloader");
      loading.removeAttribute("hidden");
      setTimeout(() => loading.setAttribute("hidden", "true"), ms);
    },

    // paging
    /**
     * Mô tả : lựa chọn page number
     * @param
     * @return
     * Created by: Cao Thanh Lâm
     * Created date: 09:45 29/04/2022
     */
    choiceNumberPage(e) {
      // chọn tất cả các thẻ html chứa class number-page-item
      let pagesNumberEmployee = document.querySelectorAll(".number-page-item");
      // remove tất cả các class selected
      pagesNumberEmployee.forEach((item) => {
        item.classList.remove("selected");
      });
      let pageNumberSelected = e.target;
      // add class selected vào page chọn
      pageNumberSelected.classList.add("selected");
      this.numberPageSelected = pageNumberSelected.getAttribute("value");
      // gọi lại tìm kiếm dữ liệu
      this.filterEmployee();
    },
    /**
     * Mô tả : Hàm chọn mặc định page đầu tiên là page thứ nhất
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 17:04 28/04/2022
     */
    defaultPageNumberEmployee() {
      document
        .querySelectorAll(".number-page-item")[0]
        .classList.add("selected");
    },
    /**
     * Mô tả : Chọn số lượng employee trên một trang
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 20:03 29/04/2022
     */
    choiceNumberEmployeeInTables(e) {
      let me = this;
      let choiceNumberEmployeeInTable = e.target;
      // kiểm tra xem có phảu là choice number hay không
      let conditionsNumberEmployee =
        choiceNumberEmployeeInTable.classList.contains("choice-number-item");
      if (conditionsNumberEmployee) {
        // remove hết tất cả các phần tử có class là choice-number-item và remove class active
        document.querySelectorAll(".choice-number-item").forEach((item) => {
          item.classList.remove("active");
        });
        // add class active cho phần tử được chọn
        choiceNumberEmployeeInTable.classList.add("active");
        // lấy phần từ chứa class choice-current-number""
        let choiceCurrentDisplay = document.querySelector(
          ".choice-current-number"
        );
        // thay đổi text của phần tử chứa class choice-current-number
        choiceCurrentDisplay.innerHTML = choiceNumberEmployeeInTable.innerHTML;
        me.quantityEmployeeDefault =
          choiceNumberEmployeeInTable.getAttribute("value");
        // chạy hàm lọc dữ liệu
        me.filterEmployee();
      }
    },
    /**
     * Mô tả : Hàm chọn page trước
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 20:24 29/04/2022
     */
    prePage() {
      const me = this;
      let pageNowSelected = document.querySelector(
        ".number-page-item.selected"
      );
      if (pageNowSelected.getAttribute("value") > 1) {
        pageNowSelected.classList.remove("selected");
        let prevPageNowSelected =
          pageNowSelected.parentElement.previousElementSibling.children[0];
        prevPageNowSelected.classList.add("selected");
        me.numberPageSelected = prevPageNowSelected.getAttribute("value");
        me.filterEmployee();
      }
    },
    /**
     * Mô tả : Hàm chọn page sau
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 20:24 29/04/2022
     */
    nextPage() {
      const me = this;
      let pageNowSelected = document.querySelector(
        ".number-page-item.selected"
      );
      if (pageNowSelected.getAttribute("value") < me.totalNumberPage) {
        pageNowSelected.classList.remove("selected");
        let nextPageNowSelected =
          pageNowSelected.parentElement.nextElementSibling.children[0];
        nextPageNowSelected.classList.add("selected");
        me.numberPageSelected = nextPageNowSelected.getAttribute("value");
        me.filterEmployee();
      }
    },
    // delete nhiều Employees
    checkAll(e) {
      if (e.target.checked) {
        document.querySelector("#convenient-header2").classList.add("active");
        let checkedInput = document.querySelectorAll("td input[type=checkbox]");
        checkedInput.forEach((item) => {
          item.checked = true;
        });
      } else {
        let checkedInput = document.querySelectorAll("td input[type=checkbox]");
        checkedInput.forEach((item) => {
          item.checked = false;
        });
        document
          .querySelector("#convenient-header2")
          .classList.remove("active");
      }
    },
    /**
     * Mô tả : Hàm kiểm tra check all các input check box
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 20:25 29/04/2022
     */
    check() {
      let check = document.querySelector("input[type=checkbox]:checked");

      if (check) {
        document.querySelector("#convenient-header2").classList.add("active");
      } else {
        document
          .querySelector("#convenient-header2")
          .classList.remove("active");
      }
    },
    /**
     * Mô tả : Hàm xóa nhiều nhân viên
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 20:25 29/04/2022
     */
    deleteEmployees() {
      const me = this;
      me.employeeSelected = {};
      me.employeesSelected = [];
      let a = document.querySelectorAll("td input[type=checkbox]:checked");
      console.log(a.length);
      if (a.length) {
        document.querySelector(".m-dialog-delete").removeAttribute("hidden");
        me.formMode = this.MISAEnum.FormMode.DeleteRows;
        a.forEach((item) => {
          me.employeesSelected.push(item.getAttribute("value"));
        });
        me.msgDelete = `Ban có muốn xóa ${me.employeesSelected.length} nhân viên đã chọn không`;
      }
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
      //msg cho toast
      msgToast: "",
      //giá trị search
      searchValue: "",
      quantityEmployeeDefault: "",
      totalNumberPage: 1,
      numberPageSelected: 1,
      totalEmployees: "",
      // Danh sách nhân viên được chọn
      employeesSelected: [],
      msgDelete: "",
      cloneObject: {},
    };
  },
  // 2created
  created() {
    const me = this;

    // phát hiện sự kiện click ra ngoài để từ đó đóng cbb nếu combobox đang được mở
    try {
      document.addEventListener("click", function (event) {
        if (!me.$refs.cbb.contains(event.target)) {
          me.open = false;
        }
      });
    } catch (error) {
      console.log(error);
    }

    // lấy dự liệu danh sách nhiên viên
    axios
      .get(
        `http://amis.manhnv.net/api/v1/Employees/filter?pageSize=10&pageNumber=1&employeeFilter=`
      )
      .then(function (res) {
        console.log(res.data)
        me.employees = res.data.Data;
        me.totalEmployees = res.data.TotalRecord;
        me.quantityEmployeeDefault = 10;
        me.totalNumberPage = res.data.TotalPage;
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
  mounted() {
    this.defaultPageNumberEmployee();
    this.TheLoading(50);
  },

  beforeUnmount() {},
};
</script>

<style></style>
