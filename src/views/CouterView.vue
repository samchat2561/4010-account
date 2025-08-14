<template>
    <div>
        Count:{{ counter.count }}
        <button @click="counterUp">Up</button>
    </div>
</template>

<script setup>
import { usetAuthStore } from '@/stores/auth';
const counter = usetAuthStore()
counter.count++
counter.countUp()

</script>

<style lang="scss" scoped>

</style>