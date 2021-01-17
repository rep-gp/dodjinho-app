<template>
    <div class="icon-button">
        <div :class="['box', { '--is-selected': selected }]">
            <component :class="['icon', { '--is-big': bigIcon }]" :is="iconMapping[icon]"/>
            <div v-if='!bigIcon' class="text">
                <slot />
            </div>
        </div>
        <div v-if='bigIcon' class="text subbed">
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

/* Subjects Icons */
import GeographyIcon from '@/static/icons/geography.svg'
import ScienceIcon from '@/static/icons/science.svg'
import ComputationIcon from '@/static/icons/computation.svg'
import HistoryIcon from '@/static/icons/history.svg'

export default Vue.extend({
    props: {
        icon: {
            type: String
        },
        selected: {
            type: Boolean
        },
        bigIcon: {
            type: Boolean
        }
    },
    computed: {
        iconMapping () {
            return {
                'single-user': SingleUserIcon,
                'multiple-users': MultipleUsersIcon,
                'pen': PenIcon,
                'shield': ShieldIcon,
                'geography': GeographyIcon,
                'science': ScienceIcon,
                'computation': ComputationIcon,
                'history': HistoryIcon
            }
        }
    }
})
</script>

<style lang="scss" scoped>
.icon-button {
    width: 100%;
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
                width: 72px;
            }
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

}
</style>