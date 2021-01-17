<template>
    <div class="icon-button">
        <div :class="['box', { '--is-selected': selected, '--is-big': bigIcon }]">
            <component :class="['icon', { '--is-big': bigIcon }]" :is="iconMapping[icon]"/>
            <div v-if='!bigIcon && hasSlot' class="text">
                <slot />
            </div>

            <medal-icon class="medal-icon" v-if="medal"/>
        </div>
        <div v-if='bigIcon && hasSlot' class="text subbed">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SingleUserIcon from '@/static/icons/single-user.svg'
import MultipleUsersIcon from '@/static/icons/multiple-users.svg'
import PenIcon from '@/static/icons/pen.svg'
import ShieldIcon from '@/static/icons/shield.svg'
import MedalIcon from '@/static/icons/medal.svg'

/* Subjects Icons */
import ChemistryIcon from '@/static/icons/chemistry.svg'
import GeographyIcon from '@/static/icons/geography.svg'
import HistoryIcon from '@/static/icons/history.svg'
import LightbulbIcon from '@/static/icons/lightbulb.svg'
import ScienceIcon from '@/static/icons/science.svg'
import TechnologyIcon from '@/static/icons/technology.svg'

export default Vue.extend({
    props: {
        icon: { type: String },
        selected: { type: Boolean },
        bigIcon: { type: Boolean },
        medal: { type: Boolean }
    },
    components: { MedalIcon },
    computed: {
        hasSlot() {
            return !!(this.$slots.default || undefined)
        },
        iconMapping () {
            return {
                'single-user': SingleUserIcon,
                'multiple-users': MultipleUsersIcon,
                'pen': PenIcon,
                'shield': ShieldIcon,
                'chemistry': ChemistryIcon,
                'geography': GeographyIcon,
                'history': HistoryIcon,
                'lightbulb': LightbulbIcon,
                'science': ScienceIcon,
                'technology': TechnologyIcon,
            }
        }
    }
})
</script>

<style lang="scss" scoped>
.icon-button {
    width: inherit;
    height: inherit;
    & > .box {
        border-radius: 8px;
        background: #ffffff;
        display: flex;
        height: 6vw;
        padding: 1.5vw 2vw;
        justify-content: center;
        align-items: center;
        border: 2px solid transparent;
        transition: 200ms ease;
        .icon {
            width: 18px;
            &.--is-big {
                max-height: 8vh;
                width: 100%;
            }
        }
        &.--is-big {
            padding: 3vw 2vw;
            height: inherit;
            width: inherit;
        }
        &.--is-selected {
            background: #f5f5f5;
            border: 2px solid $icon-secundary;
        }
    }
    .text {
        display: inline-block;
        font-weight: bold;
        font-size: 12px;
        margin-left: 16px;
        color: $icon-main;
        &.subbed {
            width: 100%;
            color: #ffffff;
            text-align: center;
            margin-left: 0;
            margin-top: 10px;
        }
    }

    .medal-icon {
        position: absolute;
        right: 50%;
        height: 5vh;
        transform: translate(-30%, 60%);
    }
}
</style>