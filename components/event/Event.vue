<template>
    <slide toLeft>
        <div class="event-container">
            <fire-icon class="event-icon"/>

            <div class="event-content">
                <h1>{{title}}</h1>
                <p>Evento começa em:</p>
                <div class="event-timer">
                    <div>
                        <clock-icon class="event-timer-icon" />
                    </div>
                    <p> 3 horas 2 minutos e 25 segundos</p>
                </div>
            </div>
        </div>
    </slide>
</template>

<script lang="ts">
import FireIcon from '../../static/icons/fire.svg'
import ClockIcon from '../../static/icons/clock.svg'

export default {
    components: {
        FireIcon,
        ClockIcon
    },
    props: {
        title: { type: String, default: 'Event Title' },
        time: { type: String, default: 'Event Title' }
    }

}
</script>

<style lang="scss" scoped>
.event-container {
    display: flex;
    align-items: center;
    height: 10vh;
    width: 80vw;
    border-radius: 6px 0px 0px 6px;
    background-color: $white;
}

.event-icon {
    margin-left: 3vw;
}

.event-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 8vh;
    margin-left: 5vw;
    margin-bottom: 0.5vh;

    h1 {
        font-size: 2vh;
        font-weight: 600;
        color: $grey-quartenary;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    p {
        font-size: 1.6vh;
        color: $grey-tertiary;
        margin-block-start: 0;
        margin-block-end: 0;
    }
}

.event-timer {
    display: flex;
    flex-direction: row;
    align-items: center;

    .event-timer-icon {
        margin-left: 10%;
        height: 1.6vh;
        width: 1.6vh;
        fill: $grey-tertiary;
    }

    p {
        display: flex;
        font-size: 1.4vh;
        margin-left: 5%;
        white-space: nowrap;
        color: $grey-tertiary;
        margin-block-start: 0;
        margin-block-end: 0;
    }
}
</style>