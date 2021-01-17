<template>
    <div class="container">
        <arrow-left @click="goBack()" class="arrow" />
        <h1>Resultado</h1>
        <h2>{{ resultMessage }}</h2>

        <div class="avatar-container">
            <div class="avatar-won"><crown /><avatar v-bind="victory && avatar" /></div>
            <div class="avatar-lost"><avatar v-bind="!victory && avatar" /></div>
        </div>

        <div class="final-score">
            <span class="score-label">Final score</span>
            <div class="score">{{ userScore }}</div>
            <span>:</span>
            <div class="score">{{ adversaryScore }}</div>
        </div>

        <div class="rewards">
            <points class="resize" :value="pointsGained" />
            <credits class="resize" :value="creditsGained" />
        </div>

        <flat-button title="Jogar novamente" @click="playAgain">Jogar novamente</flat-button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import ArrowLeft from '@/static/icons/arrow-left.svg'
import Crown from '@/static/icons/crown.svg'
import Avatar from '@/components/avatar/Avatar'
import Points from '@/components/label/PointsLabel'
import Credits from '@/components/label/CreditLabel'
import FlatButton from '@/components/common/FlatButton'

export default {
    layout: 'clean',

    computed: {
        ...mapState('score', ['userScore', 'adversaryScore']),
        ...mapState('user', ['avatar'])
    },

    components: {
        ArrowLeft,
        Crown,
        Avatar,
        Points,
        Credits,
        FlatButton
    },

    data() {
        return {
            resultMessage: this.userScore >= this.adversaryScore ? 'Você ganhou!' : 'Você perdeu.',
            victory: this.userScore >= this.adversaryScore,
            pointsGained: this.userScore >= this.adversaryScore ? '+ 100' : '+50',
            creditsGained: this.userScore >= this.adversaryScore ? '+ 100' : '+50',
        }
    },

    methods: {
        goBack() {
            this.$router.push('/home')
        },

        playAgain() {
            this.$store.dispatch('score/setUserScore', 0)
            this.$store.dispatch('score/setAdversaryScore', 0)
            this.$router.push('/quiz')
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 32px;

    .arrow {
        width: 14px;
        height: 22px;
        fill: $white;
    }

    h1, h2 {
        margin: 0;
        color: $white;
        text-align: center;
    }

    h2 {
        margin: 10px 0 20px 0;
        font-size: 2em;
        font-weight: normal;
    }

    .avatar-container {
        position: relative;
        padding: 0 40px;
        margin-bottom: 90px;

        .avatar-won {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: $white;
            border: 5px solid $green;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            svg:first-child {
                position: absolute;
                top: -5px;
                z-index: 1;
                width: 60px;
                height: 60px;
            }

            svg:nth-child(2) {
                width: 100px;
                transform: translateY(30%);
            }
        }

        .avatar-lost {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background-color: $white;
            position: absolute;
            top: 75px;
            left: 150px;
            border: 5px solid $red;
            z-index: -1;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                width: 75px;
                transform: translateY(27.5%);
            }
        }
    }

    .final-score {
        position: relative;
        padding: 25px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $white;

        .score-label {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px;
            border-radius: 10px;
            color: $white;
            background-color: #6D63E1;
            font-size: 0.75em;
            font-weight: normal;
        }

        .score {
            padding: 15px 40px;
            border-radius: 10px;
            color: $white;
            background-color: $blue-main;
            font-size: 1.5em;
            font-weight: bold;
        }

        span {
            color: $blue-main;
            font-size: 2em;
            font-weight: bold;
        }
    }

    .rewards {
        margin: 30px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .resize {
            font-size: 1.2em;
        }
    }
}
</style>