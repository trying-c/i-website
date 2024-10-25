<script setup>
import Menu from '@/components/Menu.vue';

</script>

<template>
    <div class="website-container">
        <Menu class="website-nav" />

        <div class="website-main">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.website {
    &-container {
        aspect-ratio: 18 / 9; // 保持盒子比例
        height: 88%;
        min-height: 400px;

        border: 1px solid hsla(0, 0%, 88%, 0.3);
        border-radius: 15px;

        background: hsla(0, 0%, 35%, 0.3);
        backdrop-filter: blur(2px);
        box-shadow: 0 5px 25px hsla(0, 0%, 56%, 0.3);

        font-family: $font-round;

        display: flex;
        flex-direction: column;
        padding: 16px;
    }

    &-nav {
        margin-bottom: 16px;
    }

    &-main {
        flex: 1;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
    }
}
</style>