<template>

        <div id="test" class="rotate-45">
            <img :src="camera" alt="">
        </div>

</template>
<script>
import camera from '../../public/img/camera.png'
export default {
    data(){
        return {
            camera: camera
        }
    }
}
</script>
<style scoped>
#test{
    position:absolute;
top:0px;
right:-270px;
z-index: -1;
}
</style>