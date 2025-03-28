<script setup>
import { ref } from 'vue';
import MenuList from './MenuList.vue';

import { defineProps } from 'vue';

const props = defineProps({
    sectionPositions: Object, // 부모로부터 sectionPositions을 받음
});
// console.log('props', props.sectionPositions);

const list = [
    {id:"#home", name: 'Home'},
    {id:"#about", name: 'About'},
    {id:"#skill", name: 'Skills'},
    {id:"#work", name: 'My work'},
    {id:"#testimonial", name: 'Testimonial'},
    {id:"#contact", name: 'Contact'}
];

const activeId = ref(null);

const setActive = (id) => {
  activeId.value = id;
};
</script>

<template>

        <ul class="header__menu">
            <li v-for="(item, index) in list" :key="index">
                <a class="header__menu__item" 
                    :href="item.id" 
                    :class="{ active: activeId === item.id }" 
                    @click="setActive(item.id)"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
</template>
