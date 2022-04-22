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
                <div>
                  <input
                    @blur="validateEmty"
                    id="txtEmployeeCode"
                    type="text"
                    class="input-text input-code"
                    value=""
                    required
                  />
                </div>
              </div>
              <div class="form-item">
                <div class="form-label">
                  Tên <span style="color: red">*</span>
                </div>
                <div>
                  <input
                    @blur="validateEmty"
                    required
                    type="text"
                    class="input-text input-name"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">
                  Đơn vị <span style="color: red">*</span>
                </div>
                <div class="form-department">
                  <input
                    @blur="validateEmty"
                    required
                    class="choice-current-department"
                  />
                  <div class="box-icon-choice-number">
                    <div class="icon-choice-number"></div>
                  </div>
                  <div class="choices-department">
                    <div class="label-department">
                      <div class="label-code-department">Mã đơn vị</div>
                      <div class="label-name-department">Tên đơn vị</div>
                    </div>
                    <div class="choice-department-item">
                      <div class="choice-code-department">001ádasdasd</div>
                      <div class="choice-name-department">Bộ quốc phòng</div>
                    </div>
                    <div class="choice-department-item">
                      <div class="choice-code-department">002</div>
                      <div class="choice-name-department">
                        Bộ phận kinh doanh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-item">
                <div class="form-label">Chức danh</div>
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
          <div class="form-input-first-right">
            <div class="form-row date">
              <div class="form-item item-date-of-birth">
                <div class="form-label">Ngày sinh</div>
                <div>
                  <input type="date" class="input-text input-date" />
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
          <!-- <div class="choice-form-second active">Liên hệ</div>
          <div class="choice-form-second">Tài khoản ngân hàng</div> -->
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
                  <input type="text" class="input-text input-phone" value="" />
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
                  <input type="text" class="input-text input-email" value="" />
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
          <!-- <div class="form-bank">
            <div class="m-grid-tbl">
              <div class="m-grid-table">
                <table class="form-bank-table">
                  <thead>
                    <tr>
                      <th class="text-align-left" style="width:150px">SỐ TÀI KHOẢN <span
                          class="icon-th-form-bank"></span></th>
                      <th class="text-align-left" style="width:200px">TÊN NGÂN HÀNG <span
                          class="icon-th-form-bank"></span> </th>
                      <th class="text-align-left" style="width:190px">CHI NHÁNH <span class="icon-th-form-bank"></span>
                      </th>
                      <th class="text-align-left" style="width:205px">TỈNH/TP CỦA NGÂN HÀNG <span
                          class="icon-th-form-bank"></span> </th>
                      <th class="text-align-left" style="width:40px"> </th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <tr>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-number" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-name" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-place" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-region" value="">
                        </div>
                      </td>
                      <td>
                        <div class="box-icon-delete-row-bank">
                          <div class="icon-delete-row-bank"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-number" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-name" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-place" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-region" value="">
                        </div>
                      </td>
                      <td>
                        <div class="box-icon-delete-row-bank">
                          <div class="icon-delete-row-bank"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-number" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-name" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-place" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-region" value="">
                        </div>
                      </td>
                      <td>
                        <div class="box-icon-delete-row-bank">
                          <div class="icon-delete-row-bank"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-number" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-name" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-place" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-region" value="">
                        </div>
                      </td>
                      <td>
                        <div class="box-icon-delete-row-bank">
                          <div class="icon-delete-row-bank"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-number" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-name" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-place" value="">
                        </div>
                      </td>
                      <td>

                        <div>
                          <input type="text" class="input-form-bank form-bank-region" value="">
                        </div>
                      </td>
                      <td>
                        <div class="box-icon-delete-row-bank">
                          <div class="icon-delete-row-bank"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>

            </div>
            <button class="btn btn-add-row">Thêm dòng</button>
            <button class="btn btn-delete-r">Xóa hết dòng</button>

          </div> -->
        </div>
        <!-- footer form -->

        <div class="footer-form">
          <div class="footer-left">
            <button @click="btnCloseDialog" class="btn btn-cancle">Hủy</button>
          </div>
          <div class="footer-right">
            <button class="btn btn-save">Cất</button>
            <button class="btn btn-save-add">Cất và thêm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End form -->
</template>

<script>
export default {
  name: "the-employee-detail",
  props: [
    "isShow", 
    "employeeSelectedInChil", 
    "formMode",
    ],
  watch: {
    employeeSelectedInChil: function (newValue) {
      this.employee = newValue;
    },
  },
  methods: {
    btnCloseDialog() {
      this.$emit("closeOnClick", false);
    },
    reloadData() {
      this.$emit("reloadData");
    },
    validateEmty(event) {
      var el = event.currentTarget;
      var value = el.value;
      if (!value) {
        el.classList.add("error");
        setTimeout(() => {
          el.classList.remove("error");
        }, 3000);
      }
    },
  },
  data() {
    return {};
  },
  mounted() {
    document.querySelector(".input-text.input-code");
  },
};
</script>

<style></style>
