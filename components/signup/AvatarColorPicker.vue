<template>
    <div class="avatar-color-picker">
        <div class="piece-selector">
            <div 
                v-for="piece of pieces" 
                :key="piece.name"
                :class="['piece', { '--is-selected': selectedPiece === piece.name }]"
                @click="changePiece(piece)"
            >
                {{ piece.label }}
            </div>
        </div>
        <div class="color-selector">
            <div class="title">Cor</div>
            <div class="color-list">
                <div 
                    v-for="color of colors" 
                    :key="color"
                    :class="['color', { '--is-selected': selectedColor[selectedPiece] === color }]"
                    @click="changeColor(color)"
                    :style="{ background: color }"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        selectedPiece: 'hair',
        selectedColor: {}
    }),
    methods: {
        changePiece (piece: { name: string, label: string }) {
            this.selectedPiece = piece.name
            this.$emit('change-piece', piece.name)
        },
        getRandomColor () {
            return this.colors[Math.floor(Math.random() * (this.colors.length - 1))]
        }
    },
    computed: {
        pieces () { 
            return [
                { name: 'hair', label: 'Cabelo' },
                { name: 'shirt', label: 'Camisa' },
                { name: 'shirtSecondary', label: 'Mangas' },
                { name: 'pants', label: 'Calça' },
                { name: 'shoes', label: 'Sapato' },
            ]
        },
        colors () {
            return ['#E73C6D', '#F3901A', '#42B5A4', '#2D729B', '#642D9B', '#3C9B2D', '#761C1C', '#D4D4D4', '#333333', "#C82626"]
        }
    },
    mounted () {
        // Configure color mapping
        for (const { name } of this.pieces) {
            this.selectedColor = {...this.selectedColor, [name]: this.getRandomColor()}
        }
        // Emit color change
        this.$emit('color-changed', this.selectedColor)
    }
})
</script>

<style lang="scss" scoped>
.avatar-color-picker {
    display: grid;
    padding: 30px 20px;
    grid-template-columns: 1fr 1fr;
    & > .piece-selector {
        & > .piece {
            color: #707070;
            padding: 5px 10px;
            transition: 200ms ease;
            &.--is-selected {
                font-weight: bold;
            }
            &:hover {
                background: #f8f8f8;
            }
        }
    }
    & > .color-selector {
        display: grid;
        & > .title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        & > .color-list {
            border: 1px solid red;
            display: block;
            .color {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 4px;
            }
        }
    }
}
</style>