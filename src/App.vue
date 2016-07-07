<template lang="jade">
.container
  .row
    .col.s6.offset-s3
      #app
        .row
          .col.s12.align-center
            h1(v-text="'Crankset'")
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
            a.btn-floating.btn-large.red.right(@click="add()")
              i.material-icons add
        .row
          table.striped
            thead
              tr
                th(data-field='id') Plateau
                th(data-field='name') pignon
                th(data-field='ratio') ratio
                th(data-field='speed') speed
                th(data-field='circonference') circonference
                th(data-field='cadence') cadence
                th(data-field='gain') gain
                th(data-field='action') action
            tbody
              tr(v-for="data in dataset" track-by="$index")
                td(v-text="data.plateau")
                td(v-text="data.pignon")
                td(v-text="data.ratio")
                td(v-text="data.speed")
                td(v-text="data.circonference")
                td
                  strong(v-text="data.cadence")
                td(v-text="calcGain($index)")
                td
                  a.btn-floating(@click="remove($index)")
                    i.material-icons remove



</template>

<script>
export default {
  data () {
    return {
      plateau: 52,
      pignon: 18,
      speed: 25,
      circonference: 2.11,
      dataset: []
    }
  },
  methods: {
    round2Deci (number) {
      return Math.round(number * 100) / 100
    },
    add () {
      this.dataset.push(this.values)
    },
    remove (index) {
      this.dataset.splice(index, 1)
    },
    calcGain (index) {
      if (index > 0) {
        var first = this.dataset[0].cadence
        var current = this.dataset[index].cadence
        return this.round2Deci(((first - current) / first) * -100) + '%'
      } else {
        return 'reference'
      }
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
    },
    values () {
      return {
        'plateau': this.plateau,
        'pignon': this.pignon,
        'ratio': this.ratio,
        'speed': this.speed,
        'circonference': this.circonference,
        'cadence': this.cadence
      }
    }
  }
}
</script>
