<template>
    <div :class="borderClass">
        <div class="avatar-face" :style="sizeStyle">
            <avatar v-bind="avatarData" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        data: { type: Object, default: () => {} },
        size: { type: Number, default: 12 },
        bordered: { type: Boolean }
    },
    computed: {
        ...mapState('user', ['avatar']),
        avatarData () {
            return this.data && Object.keys(this.data).length
                ? this.data : this.avatar
        },
        borderClass () {
            return ['frame', {
                '--bordered': this.bordered
            }]
        },
        sizeStyle () {
            return {
                width: this.size + 'vw',
                height: this.size + 'vw',
                'clip-path': `circle(${this.size * .7}vw)`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.frame {
    border-radius: 30vw;

    &.--bordered { border: 1vw solid $grey-quartenary; }

    .avatar-face {
        padding: 2vw;
    }
}
</style>