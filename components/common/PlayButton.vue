<template>
    <div class="play-button-container" @click="onClick">
        <p class="button-text">Jogar</p>
        <play-icon />
    </div>
</template>

<script>
import PlayIcon from '@/static/icons/play.svg'

export default {
    components: {
        PlayIcon
    },
    methods: {
        onClick() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.play-button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 8vh;
    width: 100%;
    margin: 0 auto 0 auto;
    border-radius: 6px;
    padding-left: 5vw;
    background-color: $white;

    &:hover {
        opacity: 80%;
        &.--is-disabled { opacity: 100%; }
    }

    .button-text {
        margin: 0 auto 0 auto;
        font-weight: 700;
        font-size: 7vw;
        color: $blue-main;
    }

    svg {
        height: 4vh;
        margin-right: 10vw;
    }
}
</style>