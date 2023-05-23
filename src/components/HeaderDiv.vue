<template>
    <div class="main">
        <div class="square1">
            <!-- This is where the real app starts -->
            
        </div>
    </div>
</template>

<style scoped>
.main{
    height: 100vh; 
    display: flex; 
    flex-direction: row; 
    margin: 0 auto;
    justify-content: center;
}
    .square1{
        height: 0px;
        width: 5px;
        background-color: black;
    }
</style>

<script>
import anime from 'animejs/lib/anime.es';

export default{
    data(){
        return{
            show: false
        }
    },
    mounted(){
        this.go();
    },
    methods:{
        go: function(){
            anime({
                targets: '.square1',
                height: '100vh',
                easing: 'easeInOutQuad',
                loop: false,
                duration: 2000,
            }),
            anime({
                targets: '.square1',
                width: '100vw',
                easing: 'easeInOutQuad',
                loop: false,
                duration: 2000,
                delay: 2000,
            }),
            anime({
                targets: '.title',
                easing: 'easeInOutQuad',
                loop: false,
                opacity:['0%', '100%'],
                duration: 500,
                delay: 4000,
            })
        }
    }
}
</script>