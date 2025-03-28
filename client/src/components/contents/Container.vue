<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useSectionStore } from "../../stores/sectionStore"; // Pinia 스토어 가져오기
import Home from "./Home.vue";
import AboutMe from "./AboutMe.vue";
import MySkill from "./MySkill.vue";
import MyWork from "./MyWork.vue";
import Testimonials from "./Testimonials.vue";

const store = useSectionStore(); // Pinia 스토어 사용

const homeRef = ref(null);
const aboutRef = ref(null);
const skillRef = ref(null);
const workRef = ref(null);
const testiRef = ref(null);
let newPositions = {};
// ✅ getBoundingClientRect() 사용
const getElementTop = (element) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
};

// ✅ 섹션 위치 업데이트 함수
const updateSectionPositions = () => {
    newPositions = {
        homeTop: getElementTop(homeRef.value),
        aboutTop: getElementTop(aboutRef.value),
        skillTop: getElementTop(skillRef.value),
        workTop: getElementTop(workRef.value),
        testiTop: getElementTop(testiRef.value),
    };

    console.log("Updated sectionPositions:", newPositions); // 값이 잘 들어감.
    store.updatePositions(newPositions); // Pinia 스토어 업데이트 ?? 다른곳에서 값이 0. 업데이트 안됨.
};

onMounted(async () => {
    await nextTick();
    for(let i=0; i <10; i++){
        setTimeout(() => {
            updateSectionPositions();
        }, 500);   
    }
    window.addEventListener("resize", updateSectionPositions);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // const sections = [homeRef, aboutRef, skillRef, workRef, testiRef];

        // sections.forEach(ref => ref.value?.classList.remove('on'));

        if (scrollY > newPositions.homeTop && scrollY < newPositions.aboutTop) {
            homeRef.value?.classList.add('on');
        } else if (scrollY > newPositions.aboutTop -5 && scrollY < newPositions.skillTop) {
            aboutRef.value?.classList.add('on');
        } else if (scrollY > newPositions.skillTop -5 && scrollY < newPositions.workTop) {
            skillRef.value?.classList.add('on');
        } else if (scrollY > newPositions.workTop -5 && scrollY < newPositions.testiTop) {
            workRef.value?.classList.add('on');
        } else if (scrollY > newPositions.testiTop -15) {
            testiRef.value?.classList.add('on');
        }
    });
});
</script>

<template>
    <div ref="homeRef" class="home-area"><Home /></div>
    <div ref="aboutRef" class="about-area"><AboutMe /></div>
    <div ref="skillRef" class="skill-area"><MySkill /></div>
    <div ref="workRef" class="work-area"><MyWork /></div>
    <div ref="testiRef" class="testimonials-area"><Testimonials /></div>
</template>
