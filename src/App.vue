<script setup>
import Menu from '@/components/MenuTransition.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="website-container">
        <Menu v-if="route.path != '/'" class="website-nav" />
        <div class="website-main">
            <transition name="slide-fade">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.website {
    &-container {
        width: 100%;
        height: 100%;
        font-family: $font-round;

        display: flex;
        flex-direction: column;
        padding: 16px;
    }

    &-nav {
        margin-bottom: 16px;
        @include matte-finish-box;
    }

    &-main {
        flex: 1;
        border-radius: 15px;
        border: 1px solid hsla(0, 0%, 88%, 0.3);
        box-shadow: 0 5px 25px hsla(0, 0%, 56%, 0.3);
        color: #FFFFFF;

        @include matte-finish-box;


        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.25rem;
    }
}
</style>