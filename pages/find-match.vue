<template>
    <div class="find-match">
        <div class="header" />
        <div class="solo-matching">
            <div class="title">
                Solo
            </div>
            <div class="options">
                <icon-button />
            </div>
        </div>
        <div class="group-matching">
            <div class="title">
                Grupo
            </div>
        </div>
        <div class="subjects">
            <div class="title">
                Assuntos
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
    layout: 'solid'

})
</script>

<style lang="scss" scoped>
.find-match {
    padding: 20px;
    & > .header {
        height: 7.5vh;
    }
    .title {
        font-weight: bold;
        color: #ffffff;
        font-size: 14pt;
    }
}
</style>