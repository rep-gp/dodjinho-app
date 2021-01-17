<template>
    <div class="homepage">
        <div class="background" />
        <div class="logo">
            <img src="/logo.png">
        </div>

        <div class="signup-button">
            <flat-button title="Criar conta" @click="onSignupClicked" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        onSignupClicked () {
            this.$router.push('/signup')
        }
    }
})
</script>

<style lang="scss" scoped>
.homepage {
    .background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('/home-bg.png');
        background-size: cover;
        z-index: -1;
    }
    .logo {
        position: absolute;
        top: 20vh;
        left: 50%;
        transform: translateX(-50%);
        img {
            width: 30vw;
        }
    }
    .signup-button {
        position: absolute;
        width: 80vw;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20vh;
    }
}
</style>