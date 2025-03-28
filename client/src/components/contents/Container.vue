<script setup>
import { ref, onMounted } from 'vue';
import Home from './Home.vue';
import AboutMe from './AboutMe.vue';
import MySkill from './MySkill.vue';
import MyWork from './MyWork.vue';
import Testimonials from './Testimonials.vue';

const contRefs ={
    homeRef:ref(null),
    aboutRef:ref(null),
    skillRef:ref(null),
    workRef:ref(null),
    testiRef:ref(null),
};

onMounted(() => {

    const homeTop = contRefs.homeRef.value?.offsetTop;
    const aboutTop = contRefs.aboutRef.value?.offsetTop - 150;
    const skillTop = contRefs.skillRef.value?.offsetTop - 150;
    const workTop = contRefs.workRef.value?.offsetTop - 150;
    const tesiTop = contRefs.testiRef.value?.offsetTop - 150;


    let scrollY = 0;

    window.addEventListener('scroll',()=>{
        scrollY = window.scrollY;
        
        if(scrollY > homeTop && scrollY < aboutTop){
            contRefs.homeRef.value?.classList.add('on');  
        }else if(scrollY > aboutTop && scrollY < skillTop){
            contRefs.aboutRef.value?.classList.add('on');
        }else if(scrollY > skillTop  && scrollY < workTop){
            contRefs.skillRef.value?.classList.add('on');
        }else if(scrollY > workTop  && scrollY < tesiTop){
            contRefs.workRef.value?.classList.add('on');
        }else if(scrollY > tesiTop){
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