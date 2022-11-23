<template>
  <div class="">
    <div class="">
      <h1 class="text-extrabold  text-center  leading-10 tracking-tight sm:text-3xl  md:text-4xl"> 
        Rules of GQuiz
      </h1>
      <div class="px-4 mb-10 sm:px-6 lg:px-8">
        <gameComponents class="py-4"/>
        <setup class="py-4"/>
        <Gameplay class="py-4"/>     
        <Scoring class="py-4"/>
        <indice class="py-4"/>
        <endOfGame/>
      </div>
      <div class="">
        <h1 class="text-center"> Have fun !</h1>
      </div>
    </div>
    <footer class="relative  m-2 overflow-hidden rounded-lg">
      <img src="/img/logos/footer.png" class=""/>
    </footer>
  </div>
</template>

<script>
import gameComponents from '../components/gameComponents.vue'
import Gameplay from '../components/Gameplay.vue'
import setup from '../components/setup.vue'
import Scoring from '../components/Scoring.vue'
import indice from '../components/indice.vue'
import endOfGame from '../components/endOfGame.vue'
// import camera from '../components/camera.vue'
export default {
  components: {
    gameComponents,
    Gameplay,
    setup,
    Scoring,
    endOfGame,
    indice
    // camera
  }
}
</script>

<style scoped> 

</style>