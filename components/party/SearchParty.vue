<template>
    <slide>
        <div v-if="visible" class="search-party-container">
            <div class="blur" />

            <div class="content">
                <p>Procurando partida</p>

                <loader />

                <div class="filters">
                    <div class="filter-group">
                        <div class="title">Modo:</div>
                        <div class="value">{{ mode.group ? 'Grupo' : 'Solo' }} ({{ mode.mode }})</div>
                    </div>
                    <div class="filter-group">
                        <div class="title">Assuntos:</div>
                        <div class="value">{{ subjects.join(', ') }}</div>
                    </div>
                </div>

                <flat-button class="cancel-button" title="Cancelar" dark @click="cancelSearch"/>
            </div>
        </div>
    </slide>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        visible: { type: Boolean, default: false },
        mode: {},
        subjects: []
    },
    mounted() {
        console.log(this.subjects)
    },
    methods: {
        cancelSearch() {
            this.$emit('cancel-search')
        }
    }
})
</script>

<style lang="scss" scoped>
.search-party-container {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;

    .blur {
        position: absolute;
        width: 100%;
        height: 45vh;
        background-color: $grey-tertiary;
        opacity: 0.4;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 55vh;
        background-color: $white;
        border-radius: 15px 15px 0 0;

        -webkit-box-shadow: 0px -8px 24px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -8px 24px -5px rgba(0,0,0,0.75);
        box-shadow: 0px -8px 24px -5px rgba(0,0,0,0.75);

        p {
            font-size: 3vh;
            color: $blue-main;
            font-weight: bold;
        }

        .filters {
            display: flex;
            flex-direction: column;
            width: 85%;
            justify-content: space-between;
            padding: 0 10vw;

            .filter-group {
                margin-bottom: 2vh;
                .title {
                    font-size: 2vh;
                    font-weight: 600;
                    color: $grey-quartenary;
                }

                .value {
                    color: $grey-secundary
                }
            }
        }

        .cancel-button {
            margin-top: 2vh;
            height: 8vh;
            width: 85%;
            background-color: $red;
        }
    }
}
</style>