<template>
    <div class="container mt-5">
        <div class="card mx-auto p-0">
            <Carousel :wrap-around="true" :autoplay="3500">
                <Slide v-for="slide in slides" :key="slide.id">
                    <div class="carousel__item">
                        <h4><span style="color: #D63109;">ข่าวสาร </span>{{ slide.title }}</h4>
                        <img :src="slide.image" class="card-img-top mb-2" height="500px" alt="">
                        <h5><span style="color: #A92606;">วิทยาลัยเทคนิคตราด </span>{{ slide.content }}</h5>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const slides = [
    { id: '1', title: 'ประชาสัมพันธ์', content: 'สำนักงานอาชีวศึกษาจังหวัด (สอจ.)', image: 'https://www.trattc.ac.th/uploads/slider/1704705760.jpg' },
    { id: '2', title: 'ประชาสัมพันธ์', content: 'สำนักงานอาชีวศึกษาจังหวัด (สอจ.)', image: 'https://cdn.pixabay.com/photo/2016/11/08/04/51/bangkok-1807480_1280.jpg' },
]

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

h4 {
    font-family: 'Sarabun', sans-serif;
    color: #087CC8;
}

span {
    font-family: 'Sarabun', sans-serif;
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: white;
    color: #07619C;
    font-size: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    font-family: 'Sarabun', sans-serif;
}

.carousel__slide {
    padding: 10px;
    font-family: 'Sarabun', sans-serif;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    color: white;
    /* border: 5px solid white; */
}
</style>