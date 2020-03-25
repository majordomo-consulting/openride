<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <v-container style="padding: 10px;">
    <!--<h2>openride</h2>
    <p>Please sign-in or create an account</p>-->
    <div id="firebaseui-auth-container"></div>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

let uiConfig = {
  signInSuccessUrl: '/admin',
  // autoUpgradeAnonymousUsers: true,
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service URL
  tosUrl: '<your-tos-url>'
}

export default {
  data () {
    return {
      wasMounted: false,
      ui: {}
    }
  },

  mounted () {
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
}
</script>

<style>
</style>
