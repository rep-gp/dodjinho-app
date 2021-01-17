<template>
    <div class="application">
        <sidebar />
        <userbar />
        <header>
            <menu-icon class="header-icon" @click="openSidebar" />
            <points-label :value="1320" />
            <credit-label :value="540" />
            <users-icon class="header-icon" @click="openUserbar" />
        </header>
        <div v-if="showBackdrop" class="backdrop" @click="onBackdrop" />
        <div class="background" />
        <div class="lighter-streak" />
        <Nuxt />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar'
import Userbar from '@/components/Userbar'
import PointsLabel from '@/components/label/PointsLabel'
import CreditLabel from '@/components/label/CreditLabel'

import MenuIcon from '@/static/icons/menu.svg'
import UsersIcon from '@/static/icons/two-users.svg'

export default {
    components: {
        Sidebar,
        Userbar,
        PointsLabel, 
        CreditLabel, 
        MenuIcon,
        UsersIcon
    },
    computed: {
        ...mapState('ui', ['sidebarExpanded', 'userbarExpanded']),
        showBackdrop () {
            return this.sidebarExpanded || this.userbarExpanded
        }
    },
    methods: {
        onBackdrop () {
            this.$store.dispatch('ui/setSidebarExpand', false)
            this.$store.dispatch('ui/setUserbarExpand', false)
        },
        openSidebar () {
            this.$store.dispatch('ui/setSidebarExpand', true)
        },
        openUserbar () {
            this.$store.dispatch('ui/setUserbarExpand', true)
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

body {
    margin: 0;
    width: 100vw !important;
    height: 100vh !important;
    overflow: hidden !important;
    .application {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .background {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #645BD0;
            z-index: -1;
        }
        .backdrop {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #00000044;
            z-index: 0;
        }

        overflow: hidden;
    }
    .lighter-streak {
        top: -48vh;
        left: 0;
        position: absolute;
        width: 80vw;
        height: 110vh;
        background: #6D63E1;
        transform: rotate(45deg);
        z-index: -1;
    }
}

* {
    font-family: Poppins, sans-serif;
}
</style>

<style lang="scss" scoped>
header {
    padding: 4vw;
    display: flex;
    justify-content: space-between;

    .header-icon {
        fill: $white;
        width: 10vw;
    }
}
</style>
