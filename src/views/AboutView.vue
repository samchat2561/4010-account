<template>
    <div class="container my-4">
        <div class="row">

           
            <div class="col-md-12">
                <div class="card mt-4">
                    <div class="card-body">
                        <h4 class="font-weight-normal mt-3" style="color: brown;">วิทยาลัยเทคนิคตราด</h4>
                        <p>เริ่มก่อตั้งเมื่อ ปี 2480 ใช้ชื่อ “โรงเรียนช่างไม้”
                            ในเนื้อที่ของกรมการศาสนา วัดบุรินทร์(วัดร้าง) ประมาณ 6 ไร่เศษ โดยมี นายจิรภัทร สถาการ เป็น
                            ครูใหญ่ ในสมัยนั้น ปีพุทธศักราช 2510 โดยการใช้พื้นที่ของโรงเรียนการช่างสตรี ซึ่งถูกยุบรวมกับ
                            โรงเรียนช่างไม้ ในเนื้อที่ 15 ไร่ 1 งาน 72 ตารางวา อันเป็นที่ ตั้งของวิทยาลัยเทคนิคในปัจจุบัน
                        </p>
                    </div>
          
                     <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                          <ul class="list-group list-group-flush mt-2">
                            <li class="list-group-item" style="color: green;">ประวัติวิทยาลัยเทคนิคตราด</li>
                        </ul>
                        <ol type="sqare">
                            <li>ปี พ.ศ. 2480 โรงเรียนช่างไม้ตราด</li>
                            <li>ปี พ.ศ. 2500 โรงเรียนการช่างตราด</li>
                            <li>ปี พ.ศ. 2510 รวมกับ โรงเรียนการช่างสตรีใช้ชื่อ โรงเรียนการช่างตราด</li>
                            <li>ปี พ.ศ. 2522 โรงเรียนเทคนิคตราด</li>
                            <li>ปี พ.ศ. 2525 ถึง ปัจจุบัน วิทยาลัยเทคนิคตราด</li>
                        </ol>
                        <img class="border-radius-lg w-40 mb-3" src="../assets/images/history.jpg">
                      
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

toast.success("ยินดีต้อนรับ สาขาวิชาช่างอิเล็กทรอนิกส์", {
    autoClose: 1500,
    position: toast.POSITION.TOP_LEFT,
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.navbar {
    font-family: 'Sarabun', sans-serif;
    font-size: 14px;
}

.dropdown-item {
    font-size: 14px;
}

.card-text {
    font-family: 'Sarabun', sans-serif;
    font-size: 14px;
}

.card-title {
    font-family: 'Sarabun', sans-serif;
}

h4 {
    font-family: 'Sarabun', sans-serif;
}

p {
    font-family: 'Sarabun', sans-serif;
    font-size: 16px;
}

ol {
    font-family: 'Sarabun', sans-serif;
    font-size: 15px;
    color: black;
}

.nav-link {
    font-family: 'Sarabun', sans-serif;
    font-size: 14px;
}</style>