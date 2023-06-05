<template>
    <div class="main">
        <div class="square1">
            <!-- This is where the real app starts -->
            <div class="title">
                <h1>Chance Stribling</h1>
                <h3>Web Developer</h3>
                <v-row class="mt-15 mx-0 pa-0 justify-space-evenly">
                    <v-btn variant="outlined" @click="shrink()" min-width="130" >Experience</v-btn>
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
            <v-card title="Web Developer Intern" class="job-list"></v-card>
            <v-card title="QC Analyst"  class="job-list"></v-card>
            <v-card title="Software Developer Intern"  class="job-list"></v-card>
            <v-card title="Network Technician"  class="job-list"></v-card>
            <v-card title="Repair Technician"  class="job-list"></v-card>
            <v-card title="QA Tester" class="job-list"></v-card>
        </div>
    </div>
</template>

<style scoped>

.job-list{
    height: 200px;
    width: 60vw;
    margin: 15px auto;
    background-color: black;
    color: white;
}
.main{
    display: flex; 
    flex-direction: row; 
    margin: 0 auto;

}
.square1{
    background-color: black;
    text-align: center;
    align-self: center;
    overflow: hidden;

}
.square2{
    opacity: 0;
    width: 0;
    max-height: 100vh;
    overflow-x: hidden;

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
                targets: '.title h1',
                easing: 'linear',
                fontSize:'20px',
                direction: 'alternate',
                duration:1000,
                loop: false
            }),
            anime({
                targets: '.title h3',
                easing: 'linear',
                fontSize:'16px',
                direction: 'alternate',
                duration:1000,
                loop: false
            }),
            anime({
                targets: '.square2',
                easing: 'linear',
                position:'relateive',
                opacity: 100,
                height: '100%',
                width: '70vw',
                duration:100,
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
                height: ['1px','100vh'],
                overflow: 'hidden',
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
                loop: true
            });

        }
    }
}
</script>