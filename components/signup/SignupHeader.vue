<template>
    <div class="signup-header">
        <div 
            :class="['gender', { '--is-selected': selectedGender === 'male' }]" 
            @click="changeGender('male')"
        >
            <avatar />
        </div>
        <div class="name-skin">
            <!-- Input Field -->
            <input-field 
                class="name-input"
                label='Nome' 
                @change="(value) => $emit('name-changed', value)"
                bold big centered
            />
            <!-- Skin Selectors -->
            <div class="skin-selector-list">
                <div 
                    v-for="skinColor in skinColorList" 
                    :key='skinColor' 
                    @click="changeSkinColor(skinColor)" 
                    :class="['selector', { '--is-selected': selectedSkinColor === skinColor }]"
                    :style="{ background: skinColor }" 
                />
            </div>
        </div>
        <div 
            :class="['gender', { '--is-selected': selectedGender === 'female' }]" 
            @click="changeGender('female')"
        >
            <avatar gender='female' />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Avatar from '../avatar/Avatar.vue'
export default Vue.extend({
    components: { Avatar },
    computed: {
        skinColorList () {
            return ['#F4CDC7', '#F9ADA0', '#EB806C', '#EF8442', '#7A4438']
        }
    },
    data: () => ({ 
        selectedSkinColor: '#EF8442',
        selectedGender: 'male'
    }),
    methods: {
        changeSkinColor (skinColor: string) {
            this.selectedSkinColor = skinColor
            this.$emit('skin-color-changed', skinColor)
        },
        changeGender (gender: string) {
            this.selectedGender = gender
            this.$emit('gender-changed', gender)
        }
    }
})
</script>

<style lang="scss" scoped>
.signup-header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3vh 0;
    & > .gender {
        width: 7vw;
        opacity: .4;
        transition: 200ms ease;
        &.--is-selected {
            opacity: 1;
        }
    }
    .name-skin {
        width: 50vw;
        & > .name-input {
            margin-bottom: 1.5vh;
        }
        & > .skin-selector-list {
            display: flex;
            gap: 10px;
            margin: 0 auto;
            & > .selector {
                width: 30px;
                height: 30px;
                border-radius: 8px;
                transition: 200ms ease;
                &.--is-selected {
                    width: 50px
                }
            }
        }
    }
}
</style>