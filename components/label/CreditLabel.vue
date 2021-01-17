<template>
    <div :class="['credit-label', { '--dark': isDark }]">
        <icon :is="icon" class="credit-label-icon" />

        <div class="credit-label-text">
            <div class="number"> {{ value }} </div>
            Pontos
        </div>
    </div>
</template>

<script>
import CreditIcon from '@/static/icons/coins.svg'
import CreditDarkIcon from '@/static/icons/coins-dark.svg'

export default {
    props: {
        value: { type: Number, default: 0 },
        isDark: { type: Boolean, default: false }
    },
    computed: {
        icon () {
            return this.isDark ? CreditDarkIcon : CreditIcon
        }
    }
}
</script>

<style lang="scss" scoped>
.credit-label {
    font-size: 4vw;
    display: flex;
    color: $white;

    &.--dark {
        .credit-label-text {
            color: $grey;

            .number { color: black; }
        }
    }

    &-icon {
        width: 2em;
        margin-right: -1vw;
        fill: $white;
    }

    &-text {
        .number {
            font-weight: bold;
            margin-bottom: -1.3vh;
        }
    }
}
</style>