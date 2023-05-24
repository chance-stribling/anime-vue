<template>
    <div class="main">
        <div class="square1">
            <!-- This is where the real app starts -->
            <div class="title">
                <h1>Chance Stribling</h1>
                <h3>Web Developer</h3>
                <v-row class="mt-15 pa-0 justify-space-evenly">
                    <v-btn width="130">Experience</v-btn>
                    <v-btn width="130">Work History</v-btn>
                </v-row>
                <v-row class="mt-15 pa-0 justify-space-evenly">
                        
                    <v-btn width="130">Skills</v-btn>
                    <v-btn width="130">Projects</v-btn>
                </v-row>
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
    font-size: 25px;
    margin: 40vh;
    width: fit-content + 10px;


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
                targets: '.square1',
                backgroundColor: '#7a9460',
                loop: false,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                duration: 1000,
                delay: 4000
            }),
            anime({
                targets: '.title',
                easing: 'easeInOutQuad',
                loop: false,
                opacity:['0%', '100%'],
                duration: 500,
                delay: 5000,
            }),
            anime({
                targets: '.title',
                rotate: 360,
                duration:1000,
                delay: 4200,
                loop: false
            }),
            anime({
                targets: '.title h1, h3',
                easing: 'linear',
                scale: 1.2,
                direction: 'alternate',
                duration:1000,
                loop: true
            });

        }
    }
}
</script>