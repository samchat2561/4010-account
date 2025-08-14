<template>
  <SidebarDashboard />

  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <NavbarDashborad />
    <router-view></router-view>
    <FooterDashboard />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SidebarDashboard from '@/components/Dashboard/Layouts/SidebarDashboard.vue';
import NavbarDashborad from '@/components/Dashboard/Layouts/NavbarDashborad.vue';
import FooterDashboard from '@/components/Dashboard/Layouts/FooterDashboard.vue';

</script>

<style lang="scss" scoped>
</style>