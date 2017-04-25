<template>
<div class='container'>
  <img id="image" src="../assets/picture.jpg">
</div>
</template>

<script>
import Cropper from 'Cropperjs'

export default {
    data () {
        return {

        }
    },
    mounted () {
        console.log(Cropper)
        var image = document.getElementById('image')
        var cropper = new Cropper(image, {
            aspectRatio: 16 / 9,
            crop: function (e) {
                console.log(e.detail.x)
                console.log(e.detail.y)
                console.log(e.detail.width)
                console.log(e.detail.height)
                console.log(e.detail.rotate)
                console.log(e.detail.scaleX)
                console.log(e.detail.scaleY)
            }
        })
        if (cropper) {}
    },
    methods: {

    }
}
</script>

<style>
.container {
    width: 825px;
    height: 469px;
}
img {
  max-width: 100%;
}
</style>
