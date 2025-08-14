<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mx-auto">
                <CarouselView />
            </div>
        </div>
    </div>

    <div class="container my-4">
        <div class="row">
            <div class="col-md-3">
                <div class="card shadow p-2">
                    <div class="card-header p-0">
                        <img src="https://rms.trattc.ac.th/files/53606_25081414142453.jpg" class="card-img-top" alt="img">
                    </div>
                    <div class="card-body text-center p-1">
                        <span class="card-title" style="color: #FF8C00; font-size: 18px;"><i class="fa-solid fa-people-roof me-2"></i>นางกาญจนา ตรีรัตน์ฤดี</span>
                        <p class="card-text font-weight-normal" style="color: #0B6BBB; font-size: 16px;">หัวหน้าแผนก สาขาวิชาการบัญชี</p>
                    </div>
                </div>
            </div>

            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                        <h5 class="font-weight-normal mt-1" style="color: #08a738;">
                            <i class="fa-solid fa-comments me-2"></i>
                            <span class="text-danger">ข่าวสาร</span> 
                            ประชาสัมพันธ์
                        </h5>
                        <div class="underline m-0"></div>
                        <p class="mb-4"></p>
                    </div>
                </div>
                <CardNew />
            </div>
        </div>
    </div>

</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import CarouselView from './Layouts/CarouselView.vue';
import CardNew from './Layouts/CardNew.vue';

toast.success("ยินดีต้อนรับ สาขาวิชาการบัญชี", {
    autoClose: 1500,
    position: toast.POSITION.TOP_CENTER,
})

const notify = () => {
    toast.info("ยินดีต้อนรับ สาขาวิชาการบัญชี", {
        autoClose: 1500,
    })
    return notify
}
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

.underline {
    height: 4px;
    width: 220px;
    background-color: #9932CC !important;
    margin-bottom: 10px;
}

.card-title {
    font-family: 'Sarabun', sans-serif;
}

h5 {
    font-family: 'Sarabun', sans-serif;
}

p {
    font-family: 'Sarabun', sans-serif;
    font-size: 14px;
}

ol {
    font-family: 'Sarabun', sans-serif;
    font-size: 16px;
}

.nav-link {
    font-family: 'Sarabun', sans-serif;
    font-size: 14px;
}
</style>