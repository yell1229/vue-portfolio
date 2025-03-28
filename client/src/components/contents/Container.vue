<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import Home from './Home.vue';
import AboutMe from './AboutMe.vue';
import MySkill from './MySkill.vue';
import MyWork from './MyWork.vue';
import Testimonials from './Testimonials.vue';

const contRefs = {
    homeRef: ref(null),
    aboutRef: ref(null),
    skillRef: ref(null),
    workRef: ref(null),
    testiRef: ref(null),
};

const emit = defineEmits(['updateSectionPositions']);

// sectionPositions을 외부에서 선언하여 이벤트 리스너에서도 접근 가능하게 함
let sectionPositions = {
    homeTop: 0,
    aboutTop: 0,
    skillTop: 0,
    workTop: 0,
    testiTop: 0,
};

onMounted(() => {
    // sectionPositions 업데이트
    sectionPositions = {
        homeTop: contRefs.homeRef.value?.offsetTop ?? 0,
        aboutTop: (contRefs.aboutRef.value?.offsetTop ?? 0) - 150,
        skillTop: (contRefs.skillRef.value?.offsetTop ?? 0) - 150,
        workTop: (contRefs.workRef.value?.offsetTop ?? 0) - 150,
        testiTop: (contRefs.testiRef.value?.offsetTop ?? 0) - 150,
    };

    // 부모에게 섹션 위치 데이터 전달
    emit('updateSectionPositions', sectionPositions);

    // 스크롤 이벤트 내부에서도 sectionPositions을 사용
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > sectionPositions.homeTop && scrollY < sectionPositions.aboutTop) {
            contRefs.homeRef.value?.classList.add('on');
        } else if (scrollY > sectionPositions.aboutTop && scrollY < sectionPositions.skillTop) {
            contRefs.aboutRef.value?.classList.add('on');
        } else if (scrollY > sectionPositions.skillTop && scrollY < sectionPositions.workTop) {
            contRefs.skillRef.value?.classList.add('on');
        } else if (scrollY > sectionPositions.workTop && scrollY < sectionPositions.testiTop) {
            contRefs.workRef.value?.classList.add('on');
        } else if (scrollY > sectionPositions.testiTop) {
            contRefs.testiRef.value?.classList.add('on');
        }
    });
});
</script>

<template>
    <div class="home-area" :ref="el => contRefs.homeRef.value = el"><Home /></div>
    <div class="about-area" :ref="el => contRefs.aboutRef.value = el"><AboutMe /></div>
    <div class="skill-area" :ref="el => contRefs.skillRef.value = el"><MySkill /></div>
    <div class="work-area" :ref="el => contRefs.workRef.value = el"><MyWork /></div>
    <div class="testimonials-area" :ref="el => contRefs.testiRef.value = el"><Testimonials /></div>
</template>