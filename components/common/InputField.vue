<template>
    <input 
        type="text" 
        :placeholder="label"
        @keyup="onKeyup"
        @input="onInput"
        :value="value"
        :class="classMapping"
    >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
                { '--is-big': this.big },
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
    width: 100%;

    &.--is-bold { font-weight: bold; }
    &.--is-big { font-size: 14pt; }
    &.--is-centered { text-align: center; }
    &.--is-bordered { border: 2px solid #999; }
}
</style>