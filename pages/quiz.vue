<template>
    <div>
        <div class="player-area">
            <div class="team">
                <div class="player">
                    <div class="avatar"><avatar v-bind="avatar" /></div>
        
                    <div class="player-info">
                        <span>{{ players[0].name }}</span>
                        <span>{{ players[0].points }} pts</span>
                    </div>
        
                    <button type="button"><mic /></button>
                </div>
            </div>
            
            <div class="timer">
                <timer />
                <span>{{ timer }}s</span>
            </div>

            <div class="team">
                <div class="player">
                    <div class="avatar"><avatar /></div>
        
                    <div class="player-info">
                        <span>{{ players[1].name }}</span>
                        <span>{{ players[1].points }} pts</span>
                    </div>
        
                    <button type="button"><mic /></button>
                </div>
            </div>
        </div>
    
        <div class="question">
            <div class="question-card">
                <div class="question-counter">
                    {{ questionCounter }}/5
                </div>
                <p>{{ questions[questionCounter - 1] }}</p>
            </div>

            <button
                v-for="(answer, index) in answers[questionCounter - 1]"
                type="button"
                :class="['option', { correct: showRightAnswer && answer.correct, wrong: wrongAnswerIndex === index }]"
                :disabled="showRightAnswer"
                @click="checkAnswer(answer.correct, index)"
                :key="index"
            >
                {{ answer.text }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Avatar from '@/components/avatar/Avatar'
import Mic from '@/static/icons/mic.svg'
import Timer from '@/static/icons/timer.svg'

export default {
    computed: {
        ...mapState('score', ['userScore, adversaryScore']),
        ...mapState('user', ['avatar'])
    },

    components: {
        Avatar,
        Mic,
        Timer
    },

    data() {
        return {
            timer: 180,
            timeInterval: null,
            adversaryInterval: null,
            players: [
                { name: 'Player 1', points: 280, score: 0 },
                { name: 'Rafael', points: 300, score: 0 }
            ],
            questionCounter: 1,
            questions: [
                'De quem é a famosa frase “Penso, logo existo”?',           
                'Qual é o menor e o maior país do mundo?',            
                'Quem é o autor de “O Príncipe”?',            
                'De que são constituídos os diamantes?',            
                'Qual a montanha mais alta do Brasil?'            
            ],
            answers: [
                [
                    { text: 'Platão', correct: false },
                    { text: 'Descartes', correct: true },
                    { text: 'Sócrates', correct: false },
                    { text: 'Galileu Galilei', correct: false }
                ],
                [
                    { text: 'Vaticano e Rússia', correct: true },
                    { text: 'Mônaco e Canadá', correct: false },
                    { text: 'Índia e China', correct: false },
                    { text: 'Chile e Brasil', correct: false }
                ],
                [
                    { text: 'Montesquieu', correct: false },
                    { text: 'Rousseau', correct: false },
                    { text: 'Maquiavel', correct: true },
                    { text: 'Thomas Hobbes', correct: false }
                ],
                [
                    { text: 'Grafite', correct: false },
                    { text: 'Rênio', correct: false },
                    { text: 'Ósmio', correct: false },
                    { text: 'Carbono', correct: true }
                ],
                [
                    { text: 'Pico da Neblina', correct: true },
                    { text: 'Pico Paraná', correct: false },
                    { text: 'Monte Roraima', correct: false },
                    { text: 'Pico da Bandeira', correct: false }
                ]
            ],
            showRightAnswer: false,
            wrongAnswerIndex: -1,
            nextQuestionInterval: null
        }
    },

    methods: {
        endQuiz() {
            clearInterval(this.timeInterval)
            clearInterval(this.adversaryInterval)
            this.$store.dispatch('score/setUserScore', this.players[0].score)
            this.$store.dispatch('score/setAdversaryScore', this.players[1].score)
            this.$router.push('/results')
        },

        timeout() {
            if (this.timer === 0) {
                this.endQuiz()
            } else {
                this.timer -= 1
            }
        },

        adversaryPlay() {
            this.showRightAnswer = true
            this.players[1].score += 1
            setTimeout(this.nextQuestion, 2000)
        },

        checkAnswer(correctAnswer, index) {
            this.showRightAnswer = true
            if (!correctAnswer) this.wrongAnswerIndex = index
            else this.players[0].score += 1
            setTimeout(this.nextQuestion, 2000)
        },

        nextQuestion() {
            this.showRightAnswer = false
            this.wrongAnswerIndex = -1
            if (this.questionCounter === this.questions.length) {
                this.endQuiz()
            } else {
                this.questionCounter += 1
            }
        }
    },

    mounted() {
        this.timeInterval = setInterval(this.timeout, 1000)
        this.adversaryInterval = setInterval(this.adversaryPlay, 20000) 
    }
}
</script>

<style lang="scss" scoped>
.player-area {
    padding: 12px;
    background-color: $blue-main;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 10px 10px;
    font-size: 4vw;

    .team {
        display: flex;
        flex-direction: column;

        .player {
            display: flex;
            align-items: center;

            &:nth-child(2) {
                margin: 10px 0; 
            }

            .avatar {
                width: 34px;
                height: 34px;
                border-radius: 17px;
                background-color: $white;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    width: 25px;
                    transform: translateY(25%);
                }
            }

            .player-info {
                display: flex;
                flex-direction: column;
                margin: 0 10px;

                span {
                    color: $white;
                }
            }

            button {
                border: none;
                background-color: $blue-main;

                svg {
                    height: 1.2em;
                }
            }
        }
    }

    .timer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
            font-weight: bold;
            color: $white;

            svg {
                width: 58px;
                height: 58px;
                margin-bottom: 5px;
            }
        }
}

.question {
    padding: 40px 30px;
    background-color: $white;

    .question-card {
        position: relative;
        padding: 20px;
        margin-bottom: 50px;
        border-radius: 10px;
        color: $white;
        background-color: $blue-main;
        text-align: center;

        .question-counter {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translate(-50%);
            z-index: 2;
            border: 2px solid $blue-main;
            border-radius: 10px;
            padding: 5px 15px;
            color: $blue-main;
            background-color: $white;
            font-weight: bold;
        }
    }

    .option {
        border: 1px solid #C4C4C4;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 15px 0;
        width: 100%;
        background-color: #FFF9F9;
        font-size: 1em;
        text-align: center;
        outline: none;
    }

    .option:disabled {
        color: black;
    }

    .correct {
        background-color: $green;
    }

    .wrong {
        background-color: $red;
    }
}
</style>