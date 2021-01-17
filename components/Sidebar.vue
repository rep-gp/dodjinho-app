<template>
    <div :class="['sidebar', { '--expanded': sidebarExpanded }]">
        <header>
            <div class="sidebar-close" @click="closeSidebar">
                x
            </div>
        </header>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('ui', ['sidebarExpanded'])
    },
    methods: {
        closeSidebar () {
            this.$store.dispatch('ui/setSidebarExpand', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background: $white;
    width: 0;
    height: 100vh;
    padding: 10px;
    position: fixed;
    z-index: 999;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    transition: $ease-out;
    visibility: hidden;

    &.--expanded {
        visibility: visible;
        transition: $ease-in;
        width: $sidebar-width;
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