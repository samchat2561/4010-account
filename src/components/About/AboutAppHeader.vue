<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-0 shadow sticky-top" style="background: #098380;">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand text-white fs-6"><i
          class="fa-solid fa-graduation-cap me-2"></i>สาขาวิชาช่างอิเล็กทรอนิกส์</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active text-white" aria-current="page"><i
                class="fa-solid fa-house me-1"></i>หน้าแรก</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'person' }" class="nav-link text-white"><i class="fa-solid fa-people-roof me-1"></i>บุคคลากร</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-landmark me-1"></i>เกี่ยวกับเรา
            </a>
            <ul class="dropdown-menu">
              <li><router-link :to="{ name: 'about' }" class="dropdown-item">ประวัติความเป็นมา</router-link></li>
              <li><a class="dropdown-item" href="https://www.trattc.ac.th/v1/vision" target="_blank">วิสัยทัศน์</a></li>
              <li><a class="dropdown-item" href="https://rms.trattc.ac.th/pms_graph.php" target="_blank">บุคคลากร</a></li>
              <li><a class="dropdown-item" href="https://www.trattc.ac.th/v1/map" target="_blank">แผนที๋</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="https://www.trattc.ac.th/v1/contact" target="_blank">ติดต่อเรา</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-user-graduate me-1"></i>หลักสูตร
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://bsq.vec.go.th/th-th/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E(%E0%B8%9B%E0%B8%A7%E0%B8%8A)/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%9E%E0%B8%A82562(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9E%E0%B8%A82565).aspx" target="_blank">ระดับประกาศนียบัตรวิชาชีพ(ปวช.)</a></li>
              <li><a class="dropdown-item" href="https://bsq.vec.go.th/th-th/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87(%E0%B8%9B%E0%B8%A7%E0%B8%AA)/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%9E%E0%B8%A82563(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9E%E0%B8%A82565).aspx" target="_blank">ระดับประกาศนียบัตรวิชาชีพชั้นสูง(ปวส.)</a></li>
              <li><a class="dropdown-item" href="https://bsq.vec.go.th/th-th/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3/%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B5/%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A8%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%8A2564.aspx" target="_blank">ระดับปริญญาตรี(ป.ตรี)</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item " href="https://bsq.vec.go.th/th-th/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3/%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B0%E0%B8%AA%E0%B8%B1%E0%B9%89%E0%B8%99.aspx" target="_blank">
                  <fa icon="bookmark" class="me-1" />หลักสูตรอื่นๆ
                </a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-users-gear me-1"></i>เผยแพร่ผลงาน
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">ผลงานนักเรียน-นักศึกษา</a></li>
              <li><a class="dropdown-item" href="#">ผลงานครู-อาจารย์</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-layer-group me-1"></i>ระบบบริการ
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://rms.trattc.ac.th/?p=login" target="_blank">ระบบข้อมูล นักเรียน-นักศึกษา(RMS)</a>
              </li>
              <li><a class="dropdown-item"
                  href="https://admission.vec.go.th/web/Login.htm?mode=index" target="_blank">ระบบรับสมัครนักเรียน-นักศึกษา ออนไลน์</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.trattc.ac.th/app" target="_blank"><i class="fa-solid fa-globe me-1"></i>เว็บอื่นๆ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.navbar {
  font-family: 'Sarabun', sans-serif;
  font-size: 14px;
}

.dropdown-item {
  font-size: 14px;
}

.nav-link {
  font-family: 'Sarabun', sans-serif;
  font-size: 14px;
}
</style>