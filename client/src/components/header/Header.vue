<script setup>
import { ref } from 'vue'

</script>

<template>
    <header className="header">
        <div className="header__logo">
            <img className="header__logo__img" src="https://yell1229.github.io/react-sample-1/images/favicon.ico" alt="logo" />
            <h1 className="header__logo__title">Judy</h1>
        </div>
        <nav>
        <ul class="header__menu">
            <li><a class="header__menu__item active" href="#home">Home</a></li>
            <li><a class="header__menu__item" href="#about">About</a></li>
            <li><a class="header__menu__item" href="#skill">Skills</a></li>
            <li><a class="header__menu__item" href="#work">My work</a></li>
            <li><a class="header__menu__item" href="#testimonial">Testimonial</a></li>
            <li><a class="header__menu__item" href="#contact">Contact</a></li>
        </ul>
        </nav>
        <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>
</template>

<style>

</style>