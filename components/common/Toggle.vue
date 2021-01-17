<template>
    <div class="toggle">
        <div
            v-for="(item, index) in options"
            :key="index"
            :class="['toggle-item', {'--active': index === active}]"
            @click="selected(item)"
        >
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: { type: Array, default: () => [] }
    },
    data () {
        return {
            active: 0
        }
    },
    methods: {
        selected (selecttion) {
            this.$emit('toggle', selecttion)
        }
    }
}
</script>

<style lang="scss" scoped>
.toggle {
    display: flex;
    align-items: center;

    &-item {
        width: 100%;
        text-align: center;
        padding: 1vh 5vw;
        border: 2px solid $blue-main;

        &:first-child {
            border-radius: 2vw 0 0 2vw;
        }
        &:last-child {
            border-radius: 0 2vw 2vw 0;
        }

        &.--active {
            background: $blue-main;
            color: $white;
        }
    }
}
</style>