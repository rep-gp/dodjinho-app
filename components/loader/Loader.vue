<template>
    <div :class="classMapping">
        <lottie :options="lottieOptions" class="animation" width="50%" v-on:animCreated="handleAnimation"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Lottie from 'vue-lottie'
import animationData from '@/assets/animation.json';

export default Vue.extend({
    props: {
        full: { type: Boolean, default: false }
    },
    components: { Lottie },
    data() {
        return {
            anim: null,
            lottieOptions: {
                name: 'Loader',
                animationData: animationData,
                loop: true
            }
        }
    },
    computed: {
        classMapping(): any {
            return [
                'loader-container',
                { '--is-full': this.full },
            ]
        }
    },
    methods: {
        handleAnimation: function (anim: any) {
            this.anim = anim;
            console.log(anim)
            anim.play()
        },
    }

})
</script>

<style lang="scss" scoped>
.loader-container {
    display: flex;

    &.--is-full {
        height: 100vh;
        width: 100vw;
    }
}

.animation {
    display: flex;
    width: 25vw;
}
</style>