<template>
    <div>
        <TopBar />
        <AboutAppHeader />
        <router-view></router-view>
        <AboutAppFooter />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AboutAppHeader from '@/components/About/AboutAppHeader.vue';
import AboutAppFooter from '@/components/About/AboutAppFooter.vue';
import TopBar from './TopBar.vue';
</script>

<style lang="scss" scoped></style>