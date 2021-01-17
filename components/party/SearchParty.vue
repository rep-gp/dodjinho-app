<template>
    <transition name="bounce">
        <div v-if="visible" class="search-party-container">
            <div class="blur" />

            <div class="content">
                <p>Procurando partida</p>

                <loader />

                <div class="filters">
                    <div class="filter-group">
                        <div class="title">Modo:</div>
                        <div class="value"> Solo (1x1)</div>
                    </div>
                    <div class="filter-group">
                        <div class="title">Assuntos:</div>
                        <div class="value">História, Geografia, Ciência</div>
                    </div>
                </div>

                <flat-button class="cancel-button" title="Cancelar" dark @click="cancelSearch"/>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: { visible: { type: Boolean, default: false }},
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
        height: 50vh;
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
        height: 50vh;
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

    .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

}
</style>