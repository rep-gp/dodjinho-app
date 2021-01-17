<template>
    <div class="shopping-item-container">
        <div class="item-icon">
            <component :is="iconMapping[icon]"/>
        </div>
        <div class="item-infos">
            <h1 class="item-title">{{ name }}</h1>
            <p class="item-description">{{ description }}</p>

        </div>

        <div class="item-credits">
            <coins-icon />

            <div class="amount">
                <h1>-{{ price }}</h1>
                <p>Créditos</p>
            </div>
        </div>

        <div class="item-trade" @click="showWipModal('Trocar moedas')">
            <p>Trocar</p>
            <exchange-icon />
        </div>
    </div>
</template>

<script lang="ts">
import CoinsIcon from '@/static/icons/coins-dark.svg'
import ExchangeIcon from '@/static/icons/exchange.svg'
import CourseIcon from '@/static/icons/courses.svg'
import BookIcon from '@/static/icons/book.svg'

export default {
    components: { CoinsIcon, ExchangeIcon },
    computed: {
        iconMapping () {
            return {
                'course': CourseIcon,
                'book': BookIcon
            }
        }
    },
    props: {
        icon: {type: String, default: 'courses'},
        name: { type: String, default: 'placeholder'},
        description: { type: String, default: 'placeholder'},
        price: { type: Number, default: 300}
    }
}
</script>

<style lang="scss" scoped>
.shopping-item-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 8vh;
    background-color: $white;
    border-radius: 5px;

    .item-icon {
        display: flex;
        flex: 1;
        margin: 0 2vw;
        height: 100%;
        justify-content: center;
        align-items: center;

        svg {
            height: 60%;
        }
    }

    .item-infos {
        display: flex;
        flex: 5;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        margin-right: 2vw;

        h1 {
            font-size: 2vh;
            white-space: nowrap;
            color: $grey-quartenary;
        }

        p {
            font-size: 1.8vh;
            color: $grey-secundary;
        }
    }

    .item-credits {
        display: flex;
        flex: 2;
        flex-direction: row;
        height: 100%;
        justify-content: center;
        align-items: center;

        svg {
            height: 60%;
        }

        .amount {
            display: flex;
            flex-direction: column;

            h1 {
                font-size: 1.8vh;
            }

            p {
                font-size: 1.6vh;
                color: $grey-secundary;
            }
        }
    }

    .item-trade {
        display: flex;
        flex: 2;
        height: 70%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 0.5vh;

        p {
            font-size: 1.8vh;
            font-weight: 500;
        }

        svg {
            height: 100%;
            fill: $grey-quartenary;
        }
    }
}
</style>