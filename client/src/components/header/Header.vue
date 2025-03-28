<script setup>
import { ref, watch, defineProps } from 'vue';

const activeId = ref(null);

const props = defineProps({
    sectionPositions: Object, // 부모로부터 sectionPositions을 받음
});

const list = [
    {id:"#home", name: 'Home', top:0},
    {id:"#about", name: 'About', top:0},
    {id:"#skill", name: 'Skills', top:0},
    {id:"#work", name: 'My work', top:0},
    {id:"#testimonial", name: 'Testimonial', top:0},
    {id:"#contact", name: 'Contact', top:0}
];

// 부모에서 props.sectionPositions 값이 변경될 때 반응
watch(() => props.sectionPositions, (newPositions) => {
    if (!newPositions || !list.value) return; // 💡 undefined 체크 추가

    console.log('Updated Positions:', newPositions);

    // list 배열의 top 값을 업데이트
    list.value.forEach((item) => {
        const sectionKey = item.id.replace("#", "") + "Top"; // 예: #home → homeTop
        if (newPositions[sectionKey] !== undefined) {
            item.top = newPositions[sectionKey];
        }
    });

    console.log("Updated list:", list.value);
}, { deep: true });


const setActive = (id) => {
  activeId.value = id;
};



</script>

<template>
    <header className="header">
        <div className="header__logo">
            <img className="header__logo__img" src="https://yell1229.github.io/react-sample-1/images/favicon.ico" alt="logo" />
            <h1 className="header__logo__title">Judy</h1>
        </div>
        <nav>
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
        </nav>
        <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>
</template>

<style>

</style>