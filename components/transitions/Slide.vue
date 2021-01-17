<template>
    <transition :name="toLeft ? 'slide-left' : 'slide-right'" mode="out-in">
        <slot />
    </transition>
</template>

<script>
export default {
    props: {
        toLeft: { type: Boolean, default: false }
    }
}
</script>

<style>
    .slide-right-enter {
        opacity: 0;
        transform: translateX(-100%);
    }

    .slide-right-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }

    .slide-right-enter-to,
    .slide-right-leave {
        opacity: 1;
        transform: translateX(0%);
    }

    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        transition: opacity 0.4s ease-in-out, transform 0.4s;
    }

    .slide-left-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .slide-left-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .slide-left-enter-to,
    .slide-left-leave {
        opacity: 1;
        transform: translateX(0%);
    }
</style>
