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
          <div class="icon-refresh"></div>
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
                  style="width: 6%"
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
                  style="width: 8%"
                  propName="TelephoneNumber"
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
                <th class="text-align-left" style="width: 9%" propName="Email">
                  Tên ngân hàng
                </th>
                <th class="text-align-left" style="width: 16%" propName="Email">
                  Chi nhánh tài khoản ngân hàng
                </th>
                <th
                  class="text-align-center"
                  style="width: 7%"
                  propName="Salary"
                  format="Money"
                >
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="active" v-for="emp in employees" :key="emp.EmployeeId">
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
                    <div class="default-action">
                      Sửa
                      <ul class="choice-action">
                        <li class="choice-action-item">Xóa</li>
                        <li class="choice-action-item">Nhân bản</li>
                        <li class="choice-action-item">Sử dụng</li>
                      </ul>
                    </div>
                    <div class="icon-action"></div>
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
          <div class="employee-in-tables">
            <p class="choice-current-number">20 bản ghi trên trang</p>
            <div class="box-icon-choice-number">
              <div class="icon-choice-number"></div>
            </div>
            <div class="choices-number-employee">
              <div class="choice-number-item">10 bản ghi trên trang</div>
              <div class="choice-number-item active">20 bản ghi trên trang</div>
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
    <EmployeeDetails :isShow="isShowDialog" @closeOnClick="showOrHideDialog" />
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import EmployeeDetails from "./EmployeeDetail.vue";

export default {
  name: "employee-list",
  components: {
    EmployeeDetails,
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
    showOrHideDialog(isShow) {
      this.isShowDialog = isShow;
    },
    btnAddOnClick() {
      const me = this;
      try {
        me.showOrHideDialog(true);
        me.employeeSelected = {};
        setTimeout(() =>{
          document.querySelector("#txtEmployeeCode").focus()
        },100)
      } catch (error) {

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
    };
  },
  // 2created
  created() {
    var me = this;
    // lấy dự liệu danh sách nhiên viên
    axios
      .get("http://amis.manhnv.net/api/v1/Employees")
      .then(function (res) {
        me.employees = res.data;
        console.log(res.data);
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
  mounted() {},
};
</script>

<style></style>
