<template>
  <div class="main">
    <div class="bg-animation">
      <div class="skew"></div>
      <div class="skew2"></div>
      <div class="skew3"></div>
    </div>
    <div class="square1">
        <v-btn v-show="row>0" id="home" @click="grow()" icon="mdi-chevron-left" variant="plain" size="small" color="white" class="home" style="margin-left: 200px;"></v-btn>
        <div class="title">
        <h1 class="font-weight-black">Chance Stribling</h1>
        <h3 class="font-weight-black">Web Developer</h3>
        <div
          class="nav-menu"
          :style="[
            row
              ? {
                  display: 'flex',
                  'flex-direction': 'column',
                  'align-items': 'center',
                  'row-gap': '20px'
                }
              : { display: 'flex', 'justify-content': 'space-around' }
          ]"
        >
          <v-btn
            id="exp"
            variant="elevated"
            color="white"
            size="large"
            @click="shrink()"
            class="nav-button"
            >Experience</v-btn
          >
          <v-btn id="skills" variant="elevated" @click="shrink2()" color="white" size="large" class="nav-button">Skills</v-btn>
          <v-btn id="projects" variant="elevated" color="white" size="large" class="nav-button">Projects</v-btn>
        </div>
      </div>
    </div>
    <div class="square2">
      <h1 class="mt-15 font-weight-black">EXPERIENCE</h1>
      <Job1 />
      <Job2 />
    </div>
    <div class="square3">
      <h1 class="mt-15 font-weight-black">SKILLS</h1>
      <Job1 />
      <Job2 />
    </div>
  </div>
</template>

<style scoped>
.skew {
  transform: translateY(150px) skewY(-10deg);
  height: 80px;
  width: 100%;
  background-color: #c94d4d;
  position: absolute;
}
.skew2 {
  transform: translateY(250px) skewY(-10deg);
  height: 80px;
  width: 100%;
  background-color: #d8832b;
  position: absolute;
}
.skew3 {
  transform: translateY(350px) skewY(-10deg);
  height: 80px;
  width: 100%;
  background-color: #dab71f;
  position: absolute;
}
.bg-animation {
  position: absolute;
  padding: 0;
  text-align: center;
  overflow: visible;
}

.nav-menu {
  margin-top: 25px;
}
.nav-button {
  width: 140px;
}

.main {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  overflow: hidden;
}
.square1 {
  background-color: black;
  text-align: center;
  align-self: center;
  overflow: hidden;
}
.square2 {
  opacity: 0;
  width: 0;
  max-height: 100vh;
  overflow-x: hidden;

  background-color: white;
  text-align: center;
  color: black;
}
.square3 {
  opacity: 0;
  width: 0;
  max-height: 100vh;
  overflow-x: hidden;

  background-color: white;
  text-align: center;
  color: black;
}
.title {
  color: white;
  font-size: 25px;
  margin: 50vh 0;
}
.title h1,
h3 {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>

<script>
import anime from 'animejs/lib/anime.es'
import Job1 from '../components/Jobs/Job1.vue'
import Job2 from '../components/Jobs/Job2.vue'

export default {
  components: {
    Job1,
    Job2
  },
  data() {
    return {
      row: 0
    }
  },
  mounted() {
    this.go()
  },
  methods: {
    shrink: function () {
      this.row++;
      anime({
        targets: ['.square1', '.bg-animation', '.skew', '.skew2', '.skew3'],
        width: '25vw',
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      }),
        anime({
          targets: '.title h1',
          easing: 'linear',
          fontSize: '30px',
          translateY:-50,
          direction: 'alternate',
          duration: 1000,
          loop: false
        }),
        anime({
          targets: ['.title h3', '#skills', '#projects','#exp'],
          easing: 'linear',
          fontSize: '16px',
          translateY:-50,

          direction: 'alternate',
          duration: 1000,
          loop: false
        }),
        anime({
          targets: '.square2',
          easing: 'linear',
          opacity: 100,
          height: '100%',
          width: '75vw',
          duration: 500,
          loop: false
        }),
      anime({
        targets: ['.square3'],
        width: 0,
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      });
        
    },
    shrink2: function () {
      this.row++;
      anime({
        targets: ['.square1', '.bg-animation', '.skew', '.skew2', '.skew3'],
        width: '25vw',
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      }),
        anime({
          targets: '.title h1',
          easing: 'linear',
          fontSize: '30px',
          direction: 'alternate',
          duration: 1000,
          loop: false
        }),
        anime({
          targets: '.title h3',
          easing: 'linear',
          fontSize: '16px',
          direction: 'alternate',
          duration: 1000,
          loop: false
        }),
        anime({
          targets: '.square3',
          easing: 'linear',
          opacity: 100,
          height: '100%',
          width: '75vw',
          duration: 500,
          loop: false
        }),
      anime({
        targets: '.square2',
        width: 0,
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      });


        
    },
    grow: function () {
      this.row=0;
      anime({
        targets: ['.square1', '.bg-animation', '.skew', '.skew2', '.skew3'],
        width: '100vw',
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      }),
      anime({
        targets: ['.square2', '.square3'],
        width: '0',
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      })
    },
    go: function () {
      anime({
        targets: ['.square1', '.bg-animation', '.skew', '.skew2', '.skew3'],
        width: '100vw',
        easing: 'easeInOutQuad',
        loop: false,
        duration: 2000
      }),
        anime({
          targets: '.square1',
          height: ['1px', '100vh'],
          overflow: 'hidden',
          easing: 'easeInOutQuad',
          loop: false,
          duration: 2000,
          delay: 2000
        }),
        anime({
          targets: ['.title', '.bg-animation'],
          easing: 'easeInOutQuad',
          loop: false,
          opacity: ['0%', '100%'],
          duration: 500,
          delay: 5000
        }),
        anime({
          targets: '.title h1, h3',
          easing: 'linear',
          scale: 1.2,
          direction: 'alternate',
          duration: 1000,
          loop: false
        })
    }
  }
}
</script>
