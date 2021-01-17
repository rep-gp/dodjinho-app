<template>
    <div class="div">
        <shopping-item
            class="item"
            v-for="item in itemList"
            :key="item.name"
            :icon="item.icon"
            :name="item.name"
            :description="item.description"
            :price="item.price"
        />
    </div>
</template>

<script>
export default {
    layout: 'solid',
    data() {
        return {
            itemList: [
                {icon: 'course', name: 'Curso de Design', description: '300 horas', price: 700},
                {icon: 'book', name: 'Vale Livro (Americanas)', description: '1 livro de até R$100', price: 400},
                {icon: 'course', name: 'Curso de inteligência emocional', description: '300 horas', price: 600},
                {icon: 'course', name: 'Curso SENAI', description: '400 horas', price: 1000},
                {icon: 'book', name: 'Livro Motivacional ', description: '1 livro', price: 200},
            ]
        }
    }
}
</script>

<style scoped>
.item{
    margin-bottom: 3vh;
}

</style>