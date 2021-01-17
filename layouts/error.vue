<template>
    <div class="error-page">
        <warning-icon class="icon" />
        <h1>
            eita poxa
        </h1>
        <p>
            {{ error.message }}
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WarningIcon from '@/static/icons/warning.svg'

export default Vue.extend({
    props: ['error'],
    components: {
        WarningIcon
    }
})
</script>

<style lang="scss" scoped>
.error-page {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    .icon {
        display: block;
        width: 128px;
    }

}
</style>