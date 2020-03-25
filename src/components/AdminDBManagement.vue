<template>
  <div>
    <v-snackbar :color=snackbarColor v-model="snackbar">
      {{ snackbarMsg }}
      <v-btn color="orange" text @click.native="snackbar = false">close</v-btn>
    </v-snackbar>

    <v-container>
      <h2 class="pt-5">Database Management</h2>
    </v-container>
  </div>
</template>

<script>
import GeoFire from 'geofire'

export default {
  data() {
    return {
      copyingAreas: false,
      snackbar: false,
      snackbarMsg: '',
      snackbarColor: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    showSnackbar(msg, color) {
      this.snackbarMsg = msg
      this.snackbarColor = color
      this.snackbar = true
    },
    geoFireInitialize() {
      // GeoFire initialisation
      let firebaseRef = firebase.database().ref('geofire')
      let geofire = new GeoFire(firebaseRef)
      let aires = firebase.database().ref('aires')
      aires.once('value', function(snapshot) {
        let val = snapshot.val()
        for (let a in val) {
          let aire = val[a]
          geofire.set(a, [aire.lat, aire.lon]).then(function() {
            console.log(a + ' initially set to [' + [aire.lat, aire.lon] + ']')
          })
        }
      })
    }
  }
}
</script>

<style>
</style>