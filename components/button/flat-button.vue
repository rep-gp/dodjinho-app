<template>
    <div class="button-container" @click="emit('click')">
        <p class="button-text">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: String
    }

}
</script>

<style scoped>
    .button-container {
        display: flex;
        align-items: center;
        height: 8vh;
        width: 90%;
        margin: 0 auto 0 auto;
        background-color: red;
    }

</style>