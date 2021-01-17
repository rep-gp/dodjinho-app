<template>
    <div class="home-container">
        <flat-button />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import FlatButton from '~/components/common/FlatButton.vue'
export default Vue.extend({
    layout: 'solid',
    components: { FlatButton }
})
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 3vw;
}

</style>