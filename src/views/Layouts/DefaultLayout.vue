<template>
    <div>
        <TopBar />
        <navbar-view />
        <router-view />
        <footer-view />
    </div>
</template>

<script setup>
import NavbarView from './NavbarView.vue';
import FooterView from './FooterView.vue';
import TopBar from './TopBar.vue';
</script>

<style lang="scss" scoped></style>