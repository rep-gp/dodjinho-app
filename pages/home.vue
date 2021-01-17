<template>
    <div class="home-container">
        <event title="Desafio de Historia" class="home-event"/>

        <div class="home-content">
            <div class="user-info">
                <guild-icon />
                <p>NomeUsuario741</p>
            </div>

            <div class="user-badges">
                <div class="badge">
                    <icon-button class="badge-card" is-big icon="geography"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import GuildIcon from '../static/icons/user-guild.svg'


export default Vue.extend({
    layout: 'solid',
    components: { GuildIcon }
})
</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.home-event {
    margin-top: 2vh;
    align-self: flex-end;
}

.home-content {
    display: flex;
    flex-direction: column;
    margin: 2vh;

    .user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3vw;
        width: 65vw;
        justify-content: space-between;

        svg {
            height: 7vh;
        }

        p {
            color: $white;
            font-weight: bold;
            font-size: 2.5vh;
        }
    }
}

.user-badges {
    position: relative;
    width: 20vw;
    align-self: flex-end;
    top: -6vh;
    .badge {
        height: 3vh!important;
        width: 15vw;

        .badge-card {
            &:first-child{
                height: 8vh!important;
            }
        }
        svg {

        }
    }
}

</style>