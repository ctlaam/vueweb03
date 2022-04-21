<template>
  <!-- Header -->
  <div class="m-header">
    <div class="m-header-left">
      <div class="sidebar"></div>
      <div class="logo"></div>
    </div>
    <div class="m-header-right">
      <div class="content-header-left">
        <div class="toggle-header"></div>
        <div id="cbxCompany" class="m-combobox" mcombobox>
          <p class="placeholder"> CÔNG TY CỔ PHẦN MISA</p>
          <div class="icon-combobox">
          </div>
          <div class="m-choice-combobox">
            <div value="0" class="m-choice">
              <i class="fa-solid fa-check icon-active"></i>Nam
            </div>
            <div value="1" class="m-choice">
              <i class="fa-solid fa-check icon-active"></i>Nữ
            </div>
            <div value="2" class="m-choice">
              <i class="fa-solid fa-check icon-active"></i>Khác
            </div>
          </div>
        </div>
        <div class="status-header">
          <div class="dot-status">

          </div>
          <div class="name-status">
            DC-01
          </div>
        </div>
      </div>
      <div class="content-header-right">
        <div class="box-excel">
          <div class="doawload-excel">

          </div>
        </div>
        <div class="header-search">
          <input class="input-search" placeholder="Nhập từ khóa tìm kiếm"/>
          <div class="icon-search"></div>
        </div>
        <div class="full-icon-header">
          <div class="box-icon-header green">
            <div class="icon-header icon-1"></div>
          </div>
          <div class="box-icon-header">
            <div class="icon-header icon-2"></div>
          </div>
          <div class="box-icon-header">

            <div class="icon-header icon-3"></div>
          </div>
          <div class="box-icon-header">

            <div class="icon-header icon-4"></div>
          </div>
          <div class="box-icon-header">

            <div class="icon-header icon-5"></div>
          </div>
        </div>
        <div class="header-user">
          <div class="avatar-user"></div>
          <div class="name-user">Cao Thanh Lâm</div>
          <div class="icon-user">

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->
</template>

<script>
export default {
    name:"the-header"

}
</script>

<style>

</style>