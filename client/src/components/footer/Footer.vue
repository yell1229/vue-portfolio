<script setup>
import { ref } from 'vue'
import TopBtn from './TopBtn.vue';
import 'primeicons/primeicons.css';


</script>

<template>
    <footer id="contact" class="section">
        <h2 class="title">Let's talk</h2>
        <p class="description">jeon.developer.judy@gmail.com</p>
        <ul class="contact__links">
            <li>
                <a class="contact__link" href="http://github.com"><i class="pi pi-github"></i></a>
            </li>
            <li>
                <a class="contact__link" href="http://linkedin.com"><i class="pi pi-linkedin"></i></a>
            </li>
        </ul>
        <p>Dream Software Engineer Judy - All right reserved</p>
        <TopBtn />
  </footer>
</template>

<style>

</style>