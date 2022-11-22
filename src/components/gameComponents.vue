<template>
    <div class="">
        <h3 class="font-extrabold">Game Components</h3>
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