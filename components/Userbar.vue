<template>
    <div>
        <transition name="fade">
            <div v-if="userbarExpanded" class="userbar">
                <header>
                    <div class="userbar-close" @click="closeUserbar">
                        x
                    </div>
                </header>
            </div>
        </transition>
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
.fade-enter-active, .fade-leave-active {
    transition: .2s;
    opacity: 0;
    transform: translateX(100px);
}
.fade-enter, .fade-leave-to {
    transition: .2s;
    transform: translateX(100px);
}
.userbar {
    margin-left: auto;
    background: $white;
    height: 100vh;
    padding: 10px;
    position: fixed;
    z-index: 999;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    width: $userbar-width;

    header {
        display: flex;
        justify-content: flex-end;
    }

    &-close {
        border: 1px solid red;
    }
}
</style>