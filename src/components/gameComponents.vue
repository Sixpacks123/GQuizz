<template>
    <div class=" px-4 sm:px-6 lg:px-8">
        <h3 class="text-1xl font-extrabold">Game Components</h3>
        <div v-for="item in items" :key="item.message">
            {{ item.message }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
            { message: 'One game board (scoring track)', image : '' },
            { message: '68 cards ', image : '' },
            { message: '6 Answer cards ', image : '' },
            { message: '6 Answer pawns ', image : '' },
            { message: 'Main pawns ', image : '' },

            ]
        }
    },
}
</script>