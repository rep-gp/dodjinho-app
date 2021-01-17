<template>
    <div class="home-container">
        <event v-show="event" title="Desafio de Historia" class="home-event"/>

        <div class="home-content">
            <div class="user-info">
                <div class="user-guild">
                    <guild-svg />
                    <p>Clã GP</p>
                </div>
                <p>NomeUsuario741</p>
            </div>

            <div class="user-badges">
                <div v-for="subject in badgesList" :key="subject" class="badge">
                    <icon-button class="badge-card" :icon="subject" bigIcon medal />
                </div>
            </div>

            <highligth-svg class="highlight"/>
            <div class="user-avatar">
                <avatar v-bind="avatar" />
                <podium-svg class="avatar-podium" />
            </div>

            <nuxt-link to="/find-match">
                <play-button class="play-button" />
            </nuxt-link>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import{ mapState } from 'vuex'
import GuildSvg from '@/static/illustrations/user-guild.svg'
import PodiumSvg from '@/static/illustrations/podium.svg'
import HighligthSvg from '@/static/illustrations/highlight.svg'


export default Vue.extend({
    layout: 'solid',
    data() {
        return {
            event: false,
            badgesList: ['geography', 'science', 'technology', 'history']
        }
    },
    computed: {
        ...mapState('user', ['avatar'])
    },
    mounted() {
        setTimeout(() => {
            this.event = true
        }, 1500);
    },
    components: {
        GuildSvg,
        PodiumSvg,
        HighligthSvg
    }
})
</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;

    .home-event {
        margin-top: 2vh;
        align-self: flex-end;
    }

    .home-content {
        position: absolute;
        width: 90%;
        top: 20vh;
        display: flex;
        flex-direction: column;
        margin: 1vh 2vh 2vh 2vh;

        .user-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 3vw;
            width: 65vw;
            justify-content: space-between;

            p {
                color: $white;
                font-weight: bold;
                font-size: 2.5vh;
            }

            .user-guild {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 2vh;

                svg {
                    height: 7vh;
                }

                p {
                    margin-top: -0.1vh;
                    color: $white;
                    font-size: 1.7vh;
                }
            }
        }

        .user-badges {
            position: relative;
            width: 16vw;
            align-self: flex-end;
            top: -8vh;
            margin-left: 5vw;

            .badge {
                height: 6vh;
                width: 6vh;
                margin-bottom: 5vh;
                z-index: 9;
            }
        }

        .user-avatar {
            display: flex;
            flex-direction: column;
            align-self: center;
            position: relative;
            top: -42vh;
            svg {
                height: 35vh;
                z-index: 10;
            }

            .avatar-podium {
                position: relative;
                height: 100px;
                top: -3.5vh;
                z-index: 9;
            }
        }

        .play-button {
            position: relative;
            width: 90%;
            margin: 10% auto 0 auto;
            top: -47vh;
            z-index: 9;
        }

        .highlight {
            display: flex;
            align-self: center;
            position: absolute;
            height: 80vh;
        }
    }
}

</style>