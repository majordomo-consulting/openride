<template>
  <div class="">
      <div v-if="!deleteArea">
        <div class="pt-3 pb-5 text-xs-center">
          Looks like you want to help the community learn more about this area? You are in the right place.
        </div>

        <div class="pb-3">
          At night the area is :
        </div>
        <v-radio-group v-model="openAtNight" column>
          <v-radio color="primary" label="true" value="true"></v-radio>
          <v-radio color="primary" label="false" value="false"></v-radio>
          <v-radio color="secondary" label="undefined" value="undefined"></v-radio>
        </v-radio-group>
        The area is :
        <v-radio-group v-model="freeArea" column>
          <v-radio color="primary" label="true" value="true"></v-radio>
          <v-radio color="primary" label="false" value="false"></v-radio>
          <v-radio color="secondary" label="undefined" value="undefined"></v-radio>
        </v-radio-group>

        <v-select label="Equipment" v-bind:items="equipmentsDict" v-model="equipments" multiple chips color="primary" hint="What equipment is present ?" persistent-hint></v-select>
      </div>
      <v-checkbox class="pt-5" color="error" label="This area should be removed from the map" v-model="deleteArea"></v-checkbox>
      <v-textarea v-if="deleteArea" color="error" box label="Because..." hint="Explain in a few words why" v-model="deleteReason"></v-textarea>

      <div class="pt-3 text-xs-center">
        <v-btn color="primary" dark text @click="authenticateAndCallback(saveAreaInfos)">Enregistrer</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipments: [],
      openAtNight: 'undefined',
      freeArea: 'undefined',
      deleteArea: false,
      deleteReason: '',
      equipmentsDict: [
        'Sandbox',
        'Racetrack',
        'Toilets'
      ]
    }
  },
  watch: {
    openAtNightP() {
      this.openAtNight =
        this.openAtNightP === undefined ? 'undefined' : this.openAtNightP.toString()
    },
    freeAreaP() {
      this.freeArea = this.freeAreaP === undefined ? 'undefined' : this.freeAreaP.toString()
    },
    equipmentsList() {
      this.equipments = this.equipmentsList.slice()
    },
    dialogEditArea() {
      if (!this.dialogEditArea) {
        this.deleteArea = false
        this.deleteReason = ''
      }
    }
  },
  props: [
    'dialogEditArea',
    'equipmentsList',
    'uid',
    'areaId',
    'openAtNightP',
    'freeAreaP',
    'connected'
  ],
  methods: {
    authenticateAndCallback(callback) {
      let vm = this
      let currentUser = firebase.auth().currentUser
      if (currentUser) {
        callback().then(() => {
          if (currentUser.isAnonymous) {
            vm.$emit('askForSignInMsg')
          }
        })
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch(function(error) {
            console.log(error.code)
            console.log(error.message)
          })
          .then(userInfo => {
            vm.uid = userInfo.uid
            vm.displayName = 'Anonymous User'
            callback().then(() => {
              vm.$emit('askForSignInMsg')
            })
          })
      }
    },
    saveAreaInfos() {
      let vm = this
      if (this.deleteArea) {
        return firebase
          .database()
          .ref('/aires_suppression/' + vm.areaId)
          .set({
            raison: this.deleteReason,
            uid: this.uid,
            timestamp: Date.now()
          })
          .then(function() {
            vm.$emit('editSuccess')
          })
      } else {
        let infos = {
          equipments: this.equipments,
          uid: this.uid,
          timestamp: Date.now()
        }
        if (this.openAtNight !== 'undefined') {
          infos.ouvertNuit = this.openAtNight === 'true'
        }
        if (this.freeArea !== 'undefined') {
          infos.gratuit = this.freeArea === 'true'
        }
        let areaInfos = firebase
          .database()
          .ref('/area_info/' + vm.areaId)
          .push()
        return areaInfos.set(infos).then(function() {
          vm.$emit('editSuccess')
        })
      }
    }
  }
}
</script>

<style>
</style>