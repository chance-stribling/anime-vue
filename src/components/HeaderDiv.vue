<template>
  <div class="main">
    <div class="bg-animation">
      <div class="skew"></div>
      <div class="skew2"></div>
      <div class="skew3"></div>
    </div>
    <div class="square1">
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
            variant="elevated"
            color="white"
            size="x-large"
            @click="shrink()"
            class="nav-button"
            >Experience</v-btn
          >
          <v-btn variant="elevated" color="white" size="x-large" class="nav-button">Skills</v-btn>
          <v-btn variant="elevated" color="white" size="x-large" class="nav-button">Projects</v-btn>
        </div>
      </div>
    </div>
    <div class="square2">
      <h1 class="mt-15 font-weight-black">EXPERIENCE</h1>
      <v-card class="job-list">
        <template v-slot:title> Web Developer Intern </template>

        <template v-slot:subtitle> Business Infomation Systems </template>

        <v-card-actions class="justify-end">
          <v-btn color="#adff2f" variant="text" @click="show = !show"> Details </v-btn>

          <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text style="line-height: 2.5; font-size: medium; text-align: left">
              <div class="desc">Working in an Agile Software Development lifecycle.<br /></div>
              <div class="desc">
                Analyzing user requirements, envisioning system features, and working with a team to
                bring them to life. <br />
              </div>
              <div class="desc">
                Designing User Interfaces and Backend Systems, including Database Design and
                Interfacing with 3rd Party systems.<br />
              </div>
              <div class="desc">
                Completing software development activities by coordinating requirements, schedules,
                and activities.<br />
              </div>
              <div class="desc">
                Contributing to team meetings and troubleshooting development and production
                problems.<br />
              </div>
              <div class="desc">
                Supporting users and in-house teams by developing documentation and assistance
                tools.<br />
              </div>
              <div class="desc">
                Continually improving job knowledge by researching applicable technologies and
                software products.<br />
              </div>
              <div class="desc">
                Enhancing organization reputation by accepting ownership for accomplishing new and
                different requests.<br />
              </div>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card class="job-list">
        <template v-slot:title> Quality Control Analyst </template>

        <template v-slot:subtitle> Business Infomation Systems </template>

        <v-card-actions class="justify-end">
          <v-btn color="#adff2f" variant="text" @click="show2 = !show2"> Details </v-btn>

          <v-btn :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show2 = !show2"></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show2">
            <v-divider></v-divider>

            <v-card-text style="line-height: 2.5; font-size: medium; text-align: left">
              <div class="desc">Working in an Agile Software Development lifecycle.<br /></div>
              <div class="desc">
                Analyzing user requirements, envisioning system features, and working with a team to
                bring them to life. <br />
              </div>
              <div class="desc">
                Designing User Interfaces and Backend Systems, including Database Design and
                Interfacing with 3rd Party systems.<br />
              </div>
              <div class="desc">
                Completing software development activities by coordinating requirements, schedules,
                and activities.<br />
              </div>
              <div class="desc">
                Contributing to team meetings and troubleshooting development and production
                problems.<br />
              </div>
              <div class="desc">
                Supporting users and in-house teams by developing documentation and assistance
                tools.<br />
              </div>
              <div class="desc">
                Continually improving job knowledge by researching applicable technologies and
                software products.<br />
              </div>
              <div class="desc">
                Enhancing organization reputation by accepting ownership for accomplishing new and
                different requests.<br />
              </div>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.desc {
  font-weight: medium;
}
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
.desc:hover {
  scale: 1.01;
  color: #adff2f;
}
.nav-menu {
  margin-top: 50px;
}
.nav-button {
  width: 140px;
}
.job-list {
  min-height: 100px;
  width: 70vw;
  margin: 15px auto;
  background-color: black;
  color: white;
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
.title {
  color: white;
  font-size: 25px;
  margin: 40vh 0;
}
.title h1,h3 {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>

<script>
import anime from 'animejs/lib/anime.es'

export default {
  data() {
    return {
        show: false,
        show2: false,
      row: 0
    }
  },
  mounted() {
    this.go()
  },
  methods: {
    shrink: function () {
      this.row++
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
          targets: '.square2',
          easing: 'linear',
          position: 'relateive',
          opacity: 100,
          height: '100%',
          width: '75vw',
          duration: 100,
          loop: false
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
          loop: true
        })
    }
  }
}
</script>
