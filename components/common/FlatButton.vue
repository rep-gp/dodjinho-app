<template>
    <div :class="classMapping" @click="onClick">
        <p class="button-text">{{ title }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        title: {type: String, default: 'Placeholder'},
        iconName: {type: String, default: ''},
        dark: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false}
    },
    computed: {
        classMapping(): any {
            return [
                'button-container',
                { '--is-dark': this.dark },
                { '--is-disabled': this.disabled}
            ]
        }
    },
    methods: {
        onClick() {
            this.$emit('click')
        }
    }

})
</script>

<style lang="scss" scoped>
    .button-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        height: 8vh;
        width: 100%;
        margin: 0 auto 0 auto;
        border-radius: 6px;
        background-color: $white;
        box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.12);

        &.--is-dark { background-color: $blue-secundary; }
        &.--is-dark p {
            color:$white
        }

        &.--is-disabled {
            background-color: $grey;
        }
        &.--is-disabled p {
            color: $grey-secundary;
        }
        &:hover {
            opacity: 80%;
            &.--is-disabled { opacity: 100%; }
        }

        
    }


    .button-text {
        margin: 0 auto 0 auto;
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 6vw;
        color: $blue-main;

        &.--is-dark { color: $white; }
    }

</style>