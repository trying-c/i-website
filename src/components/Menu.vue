<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
const store = useStore();
const emit = defineEmits(['menuChange']);
const router = useRouter();

let menuList = ref([
    { name: 'home', label: '扉页' },
    { name: 'portfolio', label: '作品' },
    { name: 'about', label: '关于' },
])
let activeItem = ref(store.activeItem);

function handleMenuClick(item) {
    activeItem.value = item.name;
    router.push({ name: activeItem.value });
    emit('menuChange', item)
}
</script>

<template>
    <nav class="website-menu">
        <ul>
            <li class="website-menu-item" :class="[item.name == activeItem ? 'website-menu-active-item' : '']"
                v-for="(item, index) in menuList" :key="index" @click="e => handleMenuClick(item)">
                {{ item.label }}
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.website {
    &-menu {
        ul {
            margin: 0 auto;
            width: 380px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #FFFFFF;
            border-radius: 999px;
        }


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