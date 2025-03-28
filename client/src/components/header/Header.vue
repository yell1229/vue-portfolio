<script setup>
import { ref, computed, watchEffect, watch, onMounted } from "vue";
import { useSectionStore } from "../../stores/sectionStore";
import { storeToRefs } from 'pinia';

const activeId = ref(null);
const store = useSectionStore();
const { sectionPositions } = storeToRefs(store); // ✅ Pinia 상태를 반응형으로 가져옴
const navRef = ref(null);

const list = ref([]);
watchEffect(() => {
    list.value = [
        { id: "#home", name: "Home", top: sectionPositions.value.homeTop },
        { id: "#about", name: "About", top: sectionPositions.value.aboutTop },
        { id: "#skill", name: "Skills", top: sectionPositions.value.skillTop },
        { id: "#work", name: "My work", top: sectionPositions.value.workTop },
        { id: "#testimonial", name: "Testimonial", top: sectionPositions.value.testiTop },
        { id: "#contact", name: "Contact", top:  document.body.scrollHeight } // 기본값 설정
    ];
});

// ✅ `sectionPositions` 변경 감지 (디버깅용)
watch(sectionPositions, (newVal) => {
    console.log("🛠 Updated sectionPositions:", newVal);
});

const updateActiveSection = () => {
    const scrollY = window.scrollY + 100; // 약간의 오차 보정 (100px)

    for (let i = list.value.length - 1; i >= 0; i--) {
        if (scrollY >= list.value[i].top) {
            activeId.value = list.value[i].id;
            break;
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", updateActiveSection);
});

const setActive = (id, targetTop) => {
    activeId.value = id;
    console.log("🔼 Scrolling to:", targetTop);

    window.scrollTo({
        top: targetTop,
        behavior: "smooth",
    });
};
</script>

<template>
    <header class="header">
        <div class="header__logo">
            <img class="header__logo__img" src="https://yell1229.github.io/react-sample-1/images/favicon.ico" alt="logo" />
            <h1 class="header__logo__title">Judy</h1>
        </div>
        <nav>
            <ul class="header__menu">
                <li v-for="(item, index) in list" :key="index">
                    <span class="header__menu__item" 
                        :class="{ active: activeId === item.id }" 
                        @click="setActive(item.id, item.top)"
                        ref="navRef">
                        {{ item.name }}
                    </span>
                </li>
            </ul>
        </nav>
        <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>
</template>
