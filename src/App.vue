<template lang="jade">
.container
  .row
    .col.s6.offset-s3
      #app
        .row
          .col.s12.align-center
            h1(v-text="'Calcul de cadence'")
        .row
          .input-field.col.s6
            input(type="text", placeholder="plateau", v-model="plateau", id="plateau")
            label(for="plateau" v-text="'Plateau (dents)'", class="active")
          .input-field.col.s6
            input(type="text", placeholder="pignon", v-model="pignon", id="pignon")
            label(for="pignon" v-text="'Pignon (dents)'", class="active")
        .row
          h4(v-text="' Ratio : '")
          span
            strong(v-html="ratio")
        .row
          .input-field.col.s6
            input(type="text", placeholder="vitesse", v-model="speed", id="vitesse")
            label(for="vitesse" v-text="'Vitesse en km/h'", class="active")
          .input-field.col.s6
            input(type="text", placeholder="circonference", v-model="circonference", id="circonference")
            label(for="circonference" v-text="'Circonference de la roue en metres'", class="active")
        .row
          h4(v-text="'Cadence : '")
          span
            strong(v-html="cadence")
            span(v-text="' tr/min'")
</template>

<script>
export default {
  data () {
    return {
      plateau: 52,
      pignon: 18,
      speed: 25,
      circonference: 2.11
    }
  },
  methods: {
    round2Deci (number) {
      return Math.round(number * 100) / 100
    }
  },
  computed: {
    ratio () {
      return this.round2Deci(this.plateau / this.pignon)
    },
    braquet () {
      return (this.circonference * this.plateau) / this.pignon
    },
    cadence () {
      return this.round2Deci((this.speed * (50 / 3)) / this.braquet)
    }
  }
}
</script>
