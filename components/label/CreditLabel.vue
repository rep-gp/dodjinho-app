<template>
    <div :class="classes">
        <icon :is="icon" class="credit-label-icon" />

        <div class="credit-label-text">
            <div class="number"> {{ value }} </div>
            Créditos
        </div>
    </div>
</template>

<script>
import CreditIcon from '@/static/icons/coins.svg'
import CreditDarkIcon from '@/static/icons/coins-dark.svg'

export default {
    props: {
        value: { type: Number, default: 0 },
        isDark: { type: Boolean, default: false },
        big: { type: Boolean, default: false }
    },
    computed: {
        icon () {
            return this.isDark ? CreditDarkIcon : CreditIcon
        },
        classes () {
            return ['credit-label', {
                '--dark': this.isDark,
                '--is-big': this.big
            }]
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
            color: $grey-secundary;

            .number { color: black; }
        }
    }

    &.--is-big {
        font-size: 9vw;
        width: 100%;
        justify-content: center;

        .number {
            margin-bottom: -2vh;
        }

        .credit-label-icon {
            width: 26vw;
            margin-right: -5vw;
        }
    }

    &-icon {
        width: 12vw;
        margin-right: -1vw;
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