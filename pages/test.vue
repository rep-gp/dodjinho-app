<template>
    <div class="test-page">
        <div class="nav-bar">
            <div class="nav-bar-sidebar" @click="openSidebar">
                open side
            </div>
            <div class="nav-bar-userbar" @click="openUserbar">
                open user
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
.test-page {
    // width: 100%;
    background: $white;
    padding: 20px;

    .nav-bar {
        display: flex;
        justify-content: space-between;

        // &-sidebar {
        //     border: 1px solid red;
        // }
    }
}
</style>