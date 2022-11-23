<template>
    <div class="">
        <h3 class="font-extrabold">Game Components</h3>
        <div v-for="item in items" :key="item.message">
        <div class="flex flex-row pb-4 items-center ">
            <img :src="`${item.image}`" class="w-16 h-12 mr-5" />
            <p>{{ item.message }}</p>
        </div>   
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
            { message: 'One game board (scoring track)', image : '/img/logos/icone/icone_plateau.png'},
            { message: '68 cards ', image : '/img/logos/icone/icone_cartes.png'},
            { message: '6 Answer cards ', image : '/img/logos/icone/icone_carte_reponse.png' },
            { message: '6 Answer pawns ', image : '/img/logos/icone/icone_plateau.png' },
            { message: 'Main pawns ', image : '/img/logos/icone/icone_plateau.png' },

            ]
        }
    },
}
</script>