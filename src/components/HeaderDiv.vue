<template>
    <div class="main">
        <div class="square1">
            <!-- This is where the real app starts -->
            <div class="title">
                <h1>Chance Stribling</h1>
                <h3>Web Developer</h3>
                <v-row class="mt-15 mx-0 pa-0 justify-space-evenly">
                    <v-btn variant="outlined" @click="shrink()" min-width="130" class="pause">Experience</v-btn>
                    <v-btn variant="outlined"  min-width="130">Work History</v-btn>
                </v-row>
                <v-row class="mt-15 pa-0 justify-space-evenly">
                        
                    <v-btn variant="outlined"  min-width="130">Skills</v-btn>
                    <v-btn variant="outlined"  min-width="130">Projects</v-btn>
                </v-row>
            </div>

        </div>
        <div class="square2">
            <h1 class="mt-15 ">EXPERIENCE</h1>
            <v-card title="Web Developer Intern" height="200px" width="60vw" class="mx-auto mt-15" color="black"></v-card>
            <v-card title="QC Analyst" height="200px" width="60vw" class="mx-auto mt-15" color="black"></v-card>
            <v-card title="Software Developer Intern" height="200px" width="60vw" class="mx-auto mt-15" color="black"></v-card>
            <v-card title="Network Technician" height="200px" width="60vw" class="mx-auto mt-15" color="black"></v-card>
            <v-card title="Repair Technician" height="200px" width="60vw" class="mx-auto mt-15" color="black"></v-card>
            <v-card title="QA Tester" height="200px" width="60vw" class="mx-auto mt-15" color="black"></v-card>
        </div>
    </div>
</template>

<style scoped>
.main{
    min-height: 100vh; 
    display: flex; 
    flex-direction: row; 
    margin: 0 auto;
}
.square1{
    height: 5px;
    width: 5px;
    background-color: black;
    text-align: center;
    align-self: center;
}
.square2{
    height: 100vh;
    width: 0;
    background-color: #c94d4d;
    text-align: center;
    color: white;
}
.title{
    color: white;
    font-size: 25px;
    margin: 40vh 0;


}

</style>

<script>
import anime from 'animejs/lib/anime.es';
import { VHover } from 'vuetify/lib/components/index.mjs';

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
        shrink: function(){
            anime({
                targets: ['.square1'],
                width: '30vw',
                easing: 'easeInOutQuad',
                loop: false,
                duration: 2000,
            }),
            anime({
                targets: '.title h1, h3',
                easing: 'linear',
                scale: 0.5,
                direction: 'alternate',
                duration:1000,
                loop: false
            }),
            anime({
                targets: '.square2',
                easing: 'linear',
                height: '100vh',
                width: '70vw',
                duration:1000,
                loop: false
            });
        },

        go: function(){
            anime({
                targets: '.square1',
                width: '100vw',
                easing: 'easeInOutQuad',
                loop: false,
                duration: 2000,
            }),
            anime({
                targets: '.square1',
                height: '100vh',
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
                delay: 5000,
            }),
            anime({
                targets: '.title h1, h3',
                easing: 'linear',
                scale: 1.2,
                direction: 'alternate',
                duration:1000,
                loop: false
            });

        }
    }
}
</script>