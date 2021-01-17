<template>
    <div :class="['sidebar', { '--expanded': sidebarExpanded }]">
        <header>
            <arrow-icon class="icon" @click="closeSidebar" />
        </header>

        <div class="sidebar-header">
            <points-label :value="1320" is-dark />

            <div class="sidebar-header-spacer" />

            <credit-label :value="540" is-dark />
        </div>

        <div class="sidebar-list">
            <div v-for="(item, index) in items" :key="index" class="sidebar-item">
                <icon :is="item.icon" class="sidebar-item-icon" />
                {{ item.text }}
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import PointsLabel from '@/components/label/PointsLabel'
import CreditLabel from '@/components/label/CreditLabel'

import ArrowIcon from '@/static/icons/arrow-left.svg'
import BellIcon from '@/static/icons/bell.svg'
import CartIcon from '@/static/icons/cart.svg'
import TrophyIcon from '@/static/icons/trophy.svg'
import CoinsIcon from '@/static/icons/coins-dark.svg'

export default {
    components: {
        PointsLabel,
        CreditLabel,
        ArrowIcon,
        BellIcon,
        CartIcon,
        TrophyIcon,
        CoinsIcon
    },
    data () {
        return {
            items: [
                {
                    icon: BellIcon,
                    text: 'Notificações',
                    routeName: 'notifications'
                },
                {
                    icon: CartIcon,
                    text: 'Loja',
                    routeName: 'store'
                },
                {
                    icon: TrophyIcon,
                    text: 'Rankings',
                    routeName: 'ranking'
                }
            ]
        }
    },
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
    opacity: 0;

    &.--expanded {
        opacity: 1;
        visibility: visible;
        transition: $ease-in;
        width: $sidebar-width;
    }


    header {
        display: flex;
        justify-content: flex-end;

        .icon {
            width: 5vw;
            fill: $blue-main;
        }
    }

    &-header {
        display: flex;
        justify-content: center;
        margin: 5vw 0 35vw;

        &-spacer {
            margin: 0 2vw;
            // border: 1px solid red;
        }
    }

    &-item {
        padding: 1vw 2vh;
        font-size: 6vw;
        display: flex;
        margin-bottom: 1vh;

        &-icon {
            margin-right: 20px;
            width: 1em;
            stroke: 1px #000;
        }
    }
}
</style>