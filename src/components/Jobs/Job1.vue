<template>
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
            Designing User Interfaces and Backend Systems, including Database Design and Interfacing
            with 3rd Party systems.<br />
          </div>
          <div class="desc">
            Completing software development activities by coordinating requirements, schedules, and
            activities.<br />
          </div>
          <div class="desc">
            Contributing to team meetings and troubleshooting development and production
            problems.<br />
          </div>
          <div class="desc">
            Supporting users and in-house teams by developing documentation and assistance tools.<br />
          </div>
          <div class="desc">
            Continually improving job knowledge by researching applicable technologies and software
            products.<br />
          </div>
          <div class="desc">
            Enhancing organization reputation by accepting ownership for accomplishing new and
            different requests.<br />
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import anime from 'animejs/lib/anime.es'

export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
