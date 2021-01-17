<template>
    <div class="store">
        <arrow-icon @click="goBack()" class="arrow" />

        <div class="header">
            <h1> Loja </h1>
            <credit-label class="credit" :value="1000" big/>
        </div>

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

        <div class="items-list">
            <shopping-item
                class="shopping-item"
                v-for="item in itemList"
                :key="item.name"
                :icon="item.icon"
                :name="item.name"
                :description="item.description"
                :price="item.price"
            />
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
            active: 0,
            itemList: [
                {icon: 'course', name: 'Curso de Design', description: '300 horas', price: 700},
                {icon: 'book', name: 'Vale Livro (Americanas)', description: '1 livro de até R$100', price: 400},
                {icon: 'course', name: 'Curso de inteligência emocional', description: '300 horas', price: 600},
                {icon: 'course', name: 'Curso SENAI', description: '400 horas', price: 1000}
            ]
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
        width: 4vw;
        fill: $white;
    }

    h1 {
        font-size: 5vh;
        text-align: center;
        color: $white;
        margin-top: 0;
        margin-bottom: 2vh;
    }

    h2 {
        font-size: 3vh;
        color: $white;
        font-weight: normal;
        margin-top: 3vh;
        margin-bottom: 1vh;
    }

    .categories {
        display: flex;

        .category {
            margin-right: 3vw;

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

    .items-list{
        overflow-y: auto;
        .shopping-item {
            margin: 1.2vh 0;
        }
    }

}
</style>