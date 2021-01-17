<template>
    <div>
        <sidebar />
        <userbar v-if="false"/>
        <div class="layout-header">
            <menu-icon class="layout-header-icon" @click="openSidebar" />

            <points-label :value="1320" />

            <credit-label :value="540" />

            <users-icon class="layout-header-icon" @click="openUserbar" />
        </div>
        <div >
            <div class="lighter-streak" />
            <Nuxt />
        </div>
    </div>
</template>

<script>
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
    methods: {
        openSidebar () {
            this.$store.dispatch('ui/setSidebarExpand', true)
        },
        openUserbar () {
            this.$store.dispatch('ui/setUserbarExpand', true)
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;

    &-icon {
        fill: $white;
        width: 2em;
    }
}
</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

body {
    margin: 0;
    background: #645BD0;
    .lighter-streak {
        top: -46vh;
        left: 0;
        position: absolute;
        width: 70vw;
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