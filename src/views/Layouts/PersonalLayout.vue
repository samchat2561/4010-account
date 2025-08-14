<template>
    <div>
        <TopBar />
        <PersonalHeader />
        <router-view></router-view>
        <PersonalFooter />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import PersonalHeader from '@/components/Personal/PersonalHeader.vue';
import PersonalFooter from '@/components/Personal/PersonalFooter.vue';
import TopBar from './TopBar.vue';
</script>

<style lang="scss" scoped></style>