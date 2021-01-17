<template>
    <div :class="['userbar', { '--expanded': userbarExpanded }]">
        <header>
            <div class="userbar-close" @click="closeUserbar">
                >
            </div>
        </header>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('ui', ['userbarExpanded'])
    },
    methods: {
        closeUserbar () {
            this.$store.dispatch('ui/setUserbarExpand', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.userbar {
    right: 0;
    width: 0;
    background: $white;
    height: 100vh;
    padding: 6vw;
    position: fixed;
    z-index: 999;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    transition: $ease-out;
    visibility: hidden;
    opacity: 0;

    &.--expanded {
        opacity: 1;
        visibility: visible;
        transition: $ease-in;
        width: $userbar-width;
    }

    header {
        display: flex;
        justify-content: flex-end;
    }

    &-close {
        border: 1px solid red;
    }
}
</style>