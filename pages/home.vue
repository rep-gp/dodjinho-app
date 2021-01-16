<template>
    <div class="home-container">
        Home {{ valor }}
        <flat-button title="Jogar"/>
    </div>
</template>

<script lang="ts">
export default {
    layout: 'solid',
    data() {
        return {
            valor: 'aaaaa'
        }
    }
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    flex: 1;
}

</style>