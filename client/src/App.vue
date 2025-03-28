<script setup>
import { ref } from 'vue';
import Header from './components/header/Header.vue';
import Container from './components/contents/Container.vue';
import Footer from './components/footer/Footer.vue';
import './scss/portfolio.scss';

const sectionPositions = ref({
    homeTop: 0,
    aboutTop: 0,
    skillTop: 0,
    workTop: 0,
    testiTop: 0
});

// 자식(Container.vue)에서 받은 데이터 업데이트
const updateSectionPositions = (positions) => {
    sectionPositions.value = positions;
};
</script>

<template>

  <Header :sectionPositions="sectionPositions" />
  <Container  @updateSectionPositions="updateSectionPositions" />
  <Footer />
  
</template>

