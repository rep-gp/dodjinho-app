<template>
    <div class="container">
        <arrow-left @click="goBack()" class="arrow" />
        <h1>Leadboard</h1>

        <div class="filters">
            <div>
                <select>
                    <option value="" hidden>Grupo</option>
                    <option value="solo">Solo</option>
                    <option value="escola">Escola</option>
                    <option value="grupo">Grupo</option>
                    <option value="turma">Turma</option>
                </select>
                <arrow-left class="arrow-down" />
            </div>

            <div>
                <select>
                    <option value="" hidden>Tópico</option>
                    <option value="artes">Artes</option>
                    <option value="historia">História</option>
                    <option value="matematica">Matemática</option>
                </select>
                <arrow-left class="arrow-down" />
            </div>
        </div>

        <div class="podium">
            <div class="champion">
                <div class="avatar-container"><avatar /></div>
                <span>3rd</span>
                <span>Oscar</span>
                <span>1180 pts</span>
            </div>

            <div class="champion">
                <div class="avatar-container"><avatar /></div>
                <span>1st</span>
                <span>Frederico</span>
                <span>1560 pts</span>
            </div>

            <div class="champion">
                <div class="avatar-container"><avatar /></div>
                <span>2nd</span>
                <span>Fontes</span>
                <span>1370 pts</span>
            </div>
        </div>

        <ol>
            <li>
                <span class="rank">4th</span>
                <div>
                    <div class="avatar-container"><avatar /></div>
                    <span>Humberto</span>
                    <span>930 pts</span>
                </div>
            </li>
            <li>
                <span class="rank">5th</span>
                <div>
                    <div class="avatar-container"><avatar /></div>
                    <span>Guilherme</span>
                    <span>820 pts</span>
                </div>
            </li>
            <li>
                <span class="rank">6th</span>
                <div>
                    <div class="avatar-container"><avatar /></div>
                    <span>Jonathan</span>
                    <span>760 pts</span>
                </div>
            </li>
            <li>
                <span class="rank">7th</span>
                <div>
                    <div class="avatar-container"><avatar /></div>
                    <span>Bruno</span>
                    <span>650 pts</span>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
import ArrowLeft from '@/static/icons/arrow-left.svg'
import Avatar from '@/components/avatar/Avatar'

export default {
    layout: 'clean',

    components: {
        ArrowLeft,
        Avatar
    },

    methods: {
        goBack() {
            this.$router.push('/home')
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

    h1 {
        color: $white;
        text-align: center;
    }

    .filters {
        display: flex;
        justify-content: space-between;

        div {
            position: relative;
            width: 45%;

            select {
                padding: 5px 15px;
                border-radius: 10px;
                font-size: 0.9em;
                appearance: none;
                outline: none;
                border: none;
                width: 100%;
            }

            .arrow-down {
                transform: rotate(270deg) translateX(50%);
                width: 10px;
                height: 10px;
                position: absolute;
                right: 10px;
                top: 50%;
            }
        }
    }

    .podium {
        display: flex;
        justify-content: space-between;
        margin: 30px 0 75px 0;

        .champion {
            display: flex;
            flex-direction: column;
            align-items: center;

            .avatar-container {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color: $white;
                border: 5px solid $yellow;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                svg {
                    width: 45px;
                    transform: translateY(25%);
                }
            }

            &:nth-child(1) {
                position: relative;
                top: 35px;

                .avatar-container {
                    border-color: #B47070;
                }
            }

            &:nth-child(3) {
                position: relative;
                top: 35px;
                
                .avatar-container {
                    border-color: #CACACA;
                }
            }

            span {
                color: $white;

                &:first-of-type {
                    font-weight: bold;
                }
            }
        }
    }

    ol {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            .rank {
                color: $white;
                font-weight: bold;
                margin-right: 10px;
            }

            div {
                background-color: $white;
                border-radius: 10px;
                padding: 5px;
                display: flex;
                align-items: center;
                width: 100%;

                .avatar-container {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: $white;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    bottom: 5px;
                    margin-right: 3px;

                    svg {
                        width: 30px;
                        transform: translateY(30%);
                    }
                }

                span:first-of-type {
                    width: 50%;
                }
            }
        }
    }
}
</style>