<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
function goHome() {
    router.push({
        name: 'home'
    })
}

</script>

<template>
    <div>
        <button class="gohome-btn" @click="goHome">进入首页</button>
    </div>
</template>

<style lang="scss" scoped>
.gohome-btn {
    font-size: 2rem;
    padding: 1rem;

    border: none;
    background: none;
    color: #FFFFFF;
    cursor: pointer;
}
</style>