<template>
    <!-- Navbar -->
  <div class="m-navbar">
    <router-link  to="/general" class="m-item-navbar">
      <div class="logo-item item-1"></div>
      <div class="name-item">Tổng quan</div>
    </router-link>
    <router-link  to="/employee" class="m-item-navbar active">
      <div class="logo-item item-2"></div>
      <div class="name-item">Tiền mặt</div>
    </router-link>
    <router-link  to="/deposits" class="m-item-navbar">
      <div class="logo-item item-3"></div>
      <div class="name-item">Tiền gửi</div>
    </router-link>
    <router-link  to="/buyitem" class="m-item-navbar">
      <div class="logo-item item-4"></div>
      <div class="name-item">Mua hàng</div>
    </router-link>
    <router-link  to="/sellitem" class="m-item-navbar">
      <div class="logo-item item-5"></div>
      <div class="name-item">Bán hàng</div>
    </router-link>
    <router-link  to="/manageinvoices" class="m-item-navbar">
      <div class="logo-item item-6"></div>
      <div class="name-item">Quản lý hóa đơn</div>
    </router-link>
    <router-link  to="/warehouse" class="m-item-navbar">
      <div class="logo-item item-7"></div>
      <div class="name-item">Kho</div>
    </router-link>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-8"></div>
      <div class="name-item">Công cụ dụng cụ</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-9"></div>
      <div class="name-item">Tài sản cố định</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-10"></div>
      <div class="name-item">Thuế</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-11"></div>
      <div class="name-item">Giá thành</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-12"></div>
      <div class="name-item">Tổng hợp</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-13"></div>
      <div class="name-item">Ngân sách</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-14"></div>
      <div class="name-item">Báo cáo</div>
    </a>
    <a href="" class="m-item-navbar">
      <div class="logo-item item-15"></div>
      <div class="name-item">Phân tích tài chính</div>
    </a>
    <div class="full-license">
      <div class="license-icon"></div>
      <div class="license-info"></div>
    </div>
  </div>

  <!-- End Navbar -->

</template>

<script>
export default {
    name:"the-navbar"

}
</script>

<style>

</style>