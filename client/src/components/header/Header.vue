<script setup>
import { ref } from 'vue';
import MenuList from './MenuList.vue';

</script>

<template>
    <header className="header">
        <div className="header__logo">
            <img className="header__logo__img" src="https://yell1229.github.io/react-sample-1/images/favicon.ico" alt="logo" />
            <h1 className="header__logo__title">Judy</h1>
        </div>
        <nav>
        <MenuList />
        </nav>
        <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>
</template>

<style>

</style>