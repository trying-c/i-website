<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
import routes from '../router/index';
const store = useStore();
const router = useRouter();

let menuList = ref(routes.map(({ label, name }) => ({ label, name })));
let activeItem = ref(store.activeItem);

function handleMenuChange(item) {
    activeItem.value = item.name;
    router.push({ name: activeItem.value });
}
</script>

<template>
    <ul class="website-menu">
        <li class="website-menu-item" :class="[item.name == activeItem ? 'website-menu-active-item' : '']"
            v-for="(item, index) in menuList" :key="item.name" @click="e => handleMenuChange(item)">
            {{ item.label }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.website {
    &-menu {
        margin: 0 auto 16px;
        width: 380px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #FFFFFF;
        border-radius: 999px;


        &-item {
            list-style: none;
            padding: 10px 32px;
            font-size: 1.25rem;
            color: $primary-4;

            cursor: pointer;
        }

        &-active-item {
            color: $primary-1;
            font-weight: bold;
            background: #FFFFFF;
            border-radius: 999px;
        }
    }


}
</style>