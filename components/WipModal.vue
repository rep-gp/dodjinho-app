<template>
    <div class="modal-card">
        <header>
            <div class="close" @click="$emit('close')">x</div>
        </header>

        <div class="message">
            Feature em desenvolvimento
            <b>{{ text }}</b>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        text: { type: String, default: '' }
    }
}
</script>

<style lang="scss" scoped>
.modal-card {
    text-align: center;

    header {
        display: flex;
        margin-bottom: 6px;

        .close {
            padding: 6px;
            font-weight: bold;
            color: $blue-main;
            margin-left: auto;
        }
    }
}
</style>