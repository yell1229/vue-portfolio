<script setup>
import { ref } from 'vue';
import 'primeicons/primeicons.css';
const arrowTop = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
</script>

<template>
    <aside>
      <a class="arrow--up" href="#" @click="arrowTop"><i class="pi pi-arrow-up" style="font-weight:bold;font-size: 2.5rem;"></i></a>
    </aside>
</template>