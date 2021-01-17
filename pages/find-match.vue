<template>
    <div class="find-match">
        <div class="header">
            <nuxt-link to="/home">
                <arrow-left />
            </nuxt-link>
        </div>
        <div class="solo-matching">
            <div class="title">
                Solo
            </div>
            <div class="options">
                <icon-button icon="single-user">
                    1x1
                </icon-button>
                <icon-button icon="multiple-users">
                    3x3
                </icon-button>
                <icon-button icon="pen">
                    Treino
                </icon-button>
            </div>
        </div>
        <div class="group-matching">
            <div class="title">
                Grupo
            </div>
            <div class="options">
                <icon-button icon="single-user">
                    1x1
                </icon-button>
                <icon-button icon="multiple-users">
                    3x3
                </icon-button>
                <icon-button icon="shield">
                    Grupo
                </icon-button>
            </div>
        </div>

        <div class="subjects">
            <div class="title">
                Assuntos
            </div>
            <div class="options">
                <icon-button
                    v-for="subject in subjectList"
                    :key="subject.label"
                    :icon="subject.icon"
                    big-icon
                >
                    {{ subject.label }}
                </icon-button>
            </div>
        </div>

        <flat-button title="Procurar Partida" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArrowLeft from '@/static/icons/arrow-left.svg'

export default Vue.extend({
    layout: 'solid',
    components: { ArrowLeft },
    computed: {
        subjectList () {
            return [
                { icon: 'technology', label: 'Tecnologia' },
                { icon: 'geography', label: 'Geografia' },
                { icon: 'history', label: 'História' },
                { icon: 'science', label: 'Ciência' },
                { icon: 'lightbulb', label: 'Cultura' },
                { icon: 'chemistry', label: 'Química' }
            ]
        }
    }

})
</script>

<style lang="scss" scoped>
.find-match {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    & > .header {
        height: 7.5vh;

        svg {
            height: 4vh;
            fill: $white;
        }
    }
    .title {
        font-weight: bold;
        color: #ffffff;
        font-size: 14pt;
        margin-top: 15px;
    }
    & > .solo-matching, & > .group-matching {
        .options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
    }
    & > .subjects {
        margin: 40px 0;
        & > .options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
    }
}
</style>