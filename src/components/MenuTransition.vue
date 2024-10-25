<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
import routes from '../router/index';
const store = useStore();
const router = useRouter();

let menuList = ref(routes.map(({ label, name }, i) => ({ label: label || name || '--', name, id: `nav_${i}` })));
let activeItem = ref(store.activeItem);

function handleMenuChange(item) {
    activeItem.value = item.name;
    router.push({ name: activeItem.value });
}
</script>

<template>
    <input type="radio" v-for="item in menuList" :key="item.id" :id="item.id" name="nav" style="display: none;" />

    <ul class="website-menu">
        <li class="website-menu-item" :class="[item.name == activeItem ? 'website-menu-active-item' : '']"
            v-for="(item, index) in menuList" :key="item.name">
            <label :for="item.id" @click="e => handleMenuChange(item)">{{ item.label }}</label>
        </li>
    </ul>

</template>

<style lang="scss" scoped>
$item-width: 125px;
$item-padding: 5px;
$box-r: 999px;

.website-menu {
    @include matte-finish-box;
    margin: 0 auto 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #FFFFFF;
    border-radius: $box-r;
    position: relative;
    padding: $item-padding 0;


    &::before {
        content: " ";
        position: absolute;
        left: $item-padding;
        top: $item-padding;
        width: calc($item-width - $item-padding * 2);
        height: calc(100% - $item-padding * 2);
        background: #FFFFFF;
        border-radius: $box-r;
        z-index: -1;
        transition: .3s all cubic-bezier(0.42, 0, 0.74, 1.23);
    }


    &-item {
        list-style: none;
        width: $item-width;
        text-align: center;
        padding: 10px 32px;
        font-size: 1.25rem;
        color: $primary-4;

        cursor: pointer;

        label {
            display: inline-block;
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }

    &-active-item {
        color: $primary-1;
        font-weight: bold;
    }
}

@for $i from 0 through 5 {
    #nav_#{$i}:checked~.website-menu::before {
        transform: translateX(calc($item-width * $i));
    }
}
</style>