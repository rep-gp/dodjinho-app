<template>
    <div :class="classMapping">
        <search-icon v-if="icon" class="input-field-icon" />

        <input 
            type="text" 
            :placeholder="label"
            @keyup="onKeyup"
            @input="onInput"
            :value="value"
        >
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchIcon from '@/static/icons/search.svg'

export default Vue.extend({
    components: { SearchIcon },
    props: {
        label: {
            type: String,
            default: 'Placeholder'
        },
        /* Style Properties*/
        bold: { type: Boolean },
        big: { type: Boolean },
        centered: { type: Boolean },
        bordered: { type: Boolean },
        blue: { type: Boolean },
        icon: { type: Boolean },
        width: { type: String, default: '200px' },
        value: {
            type: String
        }
    },
    computed: {
        classMapping () {
            return [
                'input-field', 
                { '--is-bold': this.bold },
                { '--is-big': this.big || true },
                { '--is-blue': this.blue },
                { '--is-centered': this.centered },
                { '--is-bordered': this.bordered },
            ]
        }
    },
    methods: {
        onKeyup (event: any) {
            this.$emit('change', event.target.value)
        },
        onInput (event: any) {
            this.$emit('input', event.target.value)
        },
    }
})
</script>

<style lang="scss" scoped>
.input-field {
    font-family: Poppins, sans-serif;
    border: 0;
    border-radius: 6px;
    background: transparent;
    padding: 1vw;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        outline: none;
        border: 0;
    }

    &-icon {
        width: 10%;
        margin: 0 1vw;
        fill: #999;
    }

    &.--is-bold > input { font-weight: bold; }
    &.--is-big > input { font-size: 14pt; }
    &.--is-centered > input { text-align: center; }
    &.--is-bordered { border: 2px solid #999; }
    &.--is-blue {
        color: $blue-main;
        border: 2px solid $blue-main;
        .input-field-icon { fill: $blue-main; }
    }
}
</style>