<template>
    <div :class="['points-label', { '--dark': isDark }]">
        <icon :is="icon" class="points-label-icon" />

        <div class="points-label-text">
            <div class="number"> {{ value }} </div>
            Pontos
        </div>
    </div>
</template>

<script>
import PointsIcon from '@/static/icons/points.svg'
import PointsDarkIcon from '@/static/icons/points-dark.svg'

export default {
    // components: { PointsIcon, PointsDarkIcon },
    props: {
        value: { type: Number, default: 0 },
        isDark: { type: Boolean, default: false }
    },
    computed: {
        icon () {
            return this.isDark ? PointsDarkIcon : PointsIcon
        }
    }
}
</script>

<style lang="scss" scoped>
.points-label {
    font-size: 4vw;
    display: flex;
    color: $white;

    &.--dark {
        .points-label-text {
            color: $grey-secundary;

            .number { color: black; }
        }
    }

    &-icon {
        width: 8vw;
        margin-right: 2vw;
        fill: $white;
    }

    &-text {
        .number {
            font-weight: bold;
            margin-bottom: -1vh;
        }
    }
}
</style>