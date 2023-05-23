<template>
    <div class="main">
        <div class="square1">
            <!-- This is where the real app starts -->
            <div class="title">
                <h1>Snackr Trackr</h1>
                <div class="buttons">
                    <v-btn @click="document.getElementById('#addToList').scrollIntoView()" class="mt-10 mx-5" variant="outlined">Havin' a Snack</v-btn>
                    <v-btn class="mt-10 mx-5" variant="outlined">Snack Log</v-btn>
                </div>
            </div>

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
    text-align: center;
}
.title{
    color: white;
    margin-top: 50vh; 
    margin-bottom: 50vh;
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
                duration: 200,
            }),
            anime({
                targets: '.square1',
                width: '100vw',
                easing: 'easeInOutQuad',
                loop: false,
                duration: 200,
                delay: 200,
            }),
            anime({
                targets: '.title',
                easing: 'easeInOutQuad',
                loop: false,
                opacity:['0%', '100%'],
                duration: 50,
                delay: 400,
            })
        }
    }
}
</script>