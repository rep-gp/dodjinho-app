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
                <icon-button v-for="item in optionsList.solo" :key="item.label" :icon="item.icon" @click="selectMode(item)" :selected="item.label === selectedMode.mode && !selectedMode.group">
                    {{ item.label }}
                </icon-button>
            </div>
        </div>
        <div class="group-matching">
            <div class="title">
                Grupo
            </div>
            <div class="options">
                <icon-button v-for="item in optionsList.group" :key="item.label" :icon="item.icon" @click="selectMode(item, true)" :selected="item.label === selectedMode.mode && selectedMode.group">
                    {{ item.label }}
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
                    @click="selectSubject(subject.label)"
                    :selected="selectedSubjects.includes(subject.label)"
                >
                    {{ subject.label }}
                </icon-button>
            </div>
        </div>

        <flat-button title="Procurar Partida" @click="toggleSearch" :disabled="isDisabled"/>

        <search-party :visible="search" @cancel-search="toggleSearch" :mode="selectedMode" :subjects="selectedSubjects"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArrowLeft from '@/static/icons/arrow-left.svg'

export default Vue.extend({
    layout: 'solid',
    components: { ArrowLeft },
    data() {
        return {
            selectedMode: {
                group: false,
                mode: ''
            },
            selectedSubjects: [],
            search: false
        }
    },
    computed: {
        optionsList() {
            return {
                solo: [
                    { icon: 'single-user' , label: '1x1'},
                    { icon: 'multiple-users' , label: '3x3'},
                    { icon: 'pen' , label: 'Treino'}
                ],
                group: [
                    { icon: 'single-user' , label: '1x1'},
                    { icon: 'multiple-users' , label: '3x3'},
                    { icon: 'shield' , label: 'Grupo'}
                ]
            }
        },
        subjectList() {
            return [
                { icon: 'technology', label: 'Tecnologia' },
                { icon: 'geography', label: 'Geografia' },
                { icon: 'history', label: 'Ed. Financeira' },
                { icon: 'science', label: 'Ciência' },
                { icon: 'lightbulb', label: 'Empreendedorismo' },
                { icon: 'chemistry', label: 'Projeto de Vida' }
            ]
        },
        isDisabled(): boolean{
            const mode = this.$data.selectedMode.mode
            const subjects = this.$data.selectedSubjects

            return !(mode !== '' && subjects.length !== 0)
        }
    },
    methods: {
        toggleSearch() {
            this.search = !this.search
            setTimeout(() => {
                this.$router.push('/quiz')
            }, 2000);
        },
        selectMode(item: any, group?: boolean) {
            if(group) this.selectedMode.group = true
            else this.selectedMode.group = false

            this.selectedMode.mode = item.label
        },
        selectSubject(item: any) {
            let arr: string[] = this.selectedSubjects

            if(arr.includes(item)){
                arr = arr.filter(a => a !== item)
            } else {
                arr.push(item)
            }

            this.selectedSubjects = arr as never[]
        }
    }

})
</script>

<style lang="scss" scoped>
.find-match {
    width: 100%;
    padding: 1vh 5vw;
    box-sizing: border-box;
    & > .header {
        height: 5vh;

        svg {
            height: 4vh;
            fill: $white;
        }
    }
    .title {
        font-weight: bold;
        color: #ffffff;
        font-size: 2.5vh;
        margin-top: 2vh;
    }
    & > .solo-matching, & > .group-matching {
        .options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2vw;
        }
    }
    & > .subjects {
        margin: 5vh 0;
        & > .options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2vw;
        }
    }
}
</style>