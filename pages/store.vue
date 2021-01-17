<template>
    <div class="store">
        <arrow-icon @click="goBack()" class="arrow" />
        <h1> Loja </h1>

        <credit-label :value="1000" big />

        <h2> Categorias </h2>

        <div class="categories">
            <div
                v-for="(item, index) in categories"
                :key="index"
                :class="['category', {'--active': active === index}]"
            >
                <div class="card" @click="setActive(index)">
                    <icon :is="item.icon" class="icon" />
                </div>
                <div class="label">
                    {{ item.name }}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import CreditLabel from '@/components/label/CreditLabel.vue'
import ArrowIcon from '@/static/icons/arrow-left.svg'
import HatIcon from '@/static/icons/hat.svg'
import TicketIcon from '@/static/icons/ticket.svg'
import BooksIcon from '@/static/icons/books.svg'

export default {
    layout: 'clean',
    components: {
        ArrowIcon,
        HatIcon,
        CreditLabel
    },
    data () {
        return {
            active: 0
        }
    },
    computed: {
        categories () {
            return [
                {
                    name: 'Cursos',
                    icon: HatIcon
                },
                {
                    name: 'Lazer',
                    icon: TicketIcon
                },
                {
                    name: 'Livros',
                    icon: BooksIcon
                }
            ]
        }
    },
    methods: {
        goBack () {
            this.$router.back()
        },
        setActive (idx) {
            this.active = idx
        }
    }
}
</script>

<style lang="scss" scoped>
.store {
    padding: 20px;
    .arrow {
        width: 5vw;
        fill: $white;
    }

    h1 {
        text-align: center;
        color: $white;
        margin-top: 0;
    }

    h2 {
        color: $white;
        font-weight: normal;
        margin-top: 3vh;
        margin-bottom: 1vh;
    }

    .categories {
        display: flex;

        .category {
            margin-right: 4vw;

            &.--active {
                .card {
                    transition: .2s;
                    box-sizing: border-box;
                    border: 4px solid $yellow;
                    position: relative;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        background: $yellow;
                        width: 3px;
                    }
                }
            }

            .card {
                padding: 5vw;
                border-radius: 4px;
                background: $white;
                border: 4px solid $white;
                transition: .2s;

                .icon {
                    $size: 13vw;
                    height: $size;
                    width: $size;
                    color: #000;
                }
            }

            .label {
                color: $white;
            }
        }
    }
}
</style>