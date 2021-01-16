<template>
    <div class="signup-page">
        <signup-header
            @name-changed="onNameChanged"
            @skin-color-changed="onSkinColorChanged"
            @gender-changed="onGenderChanged"
        />
        <div class="avatar-display">
            <avatar class="avatar" v-bind="avatar"/>
        </div>
        <avatar-color-picker 
            @color-changed="onColorChanged"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import SignupHeader from "~/components/signup/SignupHeader.vue"
export default Vue.extend({
    components: { SignupHeader },
    data: () => ({
        avatar: {}
    }),
    methods: {
        onNameChanged (name: string) {
            console.log(name)
        },
        onSkinColorChanged (skinColor: string) {
            this.avatar = { ...this.avatar, skin: skinColor }
        },
        onGenderChanged (gender: string) {
            this.avatar = { ...this.avatar, gender }
        },
        onColorChanged (color: any) {
            this.avatar = { ...this.avatar, ...color }
        }
    }
})
</script>

<style lang="scss" scoped>
.signup-page {
    .avatar-display {
        width: 100%;
        height: 35vh;
        background: #7A2EA3;
        padding-top: 20px;
        & > .avatar {
            display: block;
            margin: 0 auto;
            width: 30vw;
        }
    }
}
</style>
