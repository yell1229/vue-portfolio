// src/stores/sectionStore.js
import { defineStore } from "pinia";

export const useSectionStore = defineStore("section", {
    state: () => ({
        sectionPositions: {
            homeTop: 0,
            aboutTop: 0,
            skillTop: 0,
            workTop: 0,
            testiTop: 0,
        }
    }),

    actions: {
        updatePositions(newPositions) {
            Object.assign(this.sectionPositions, newPositions); // ✅ 기존 객체 업데이트
            // console.log("✅ Updated store positions=====>", this.sectionPositions);
        }
    }
});
