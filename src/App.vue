<template>
  <v-app>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-snackbar v-model="snackbar" app>
      Hello {{ displayName }}
      <v-btn text color="primary" @click.native="snackbar = false">close</v-btn>
    </v-snackbar>

    <v-navigation-drawer fixed v-model="drawer" bottom right temporary app color="#333">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/">
              <v-list-item-title><h3 class="pt-2">Home</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <div v-if="connected">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click='home'>{{ displayName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="signout()" style="cursor: pointer;"><h3 class="pt-2">Sign Out</h3></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/login" :key="$route.fullPath">
                <v-list-item-title><h3 class="pt-2">Create Account / Login</h3></v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-list-item>
          <v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/clientDashboard">
              <v-list-item-title><h3 class="pt-2">Client Dashboard</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/clientRegister">
              <v-list-item-title><h3 class="pt-2">New Client Registration</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/map">
              <v-list-item-title><h3 class="pt-2">Map</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/clientSupport">
              <v-list-item-title><h3 class="pt-2">Client Support</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/driverDashboard">
              <v-list-item-title><h3 class="pt-2">Driver Dashboard</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/driverRegister">
              <v-list-item-title><h3 class="pt-2">New Driver Registration</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/map">
              <v-list-item-title><h3 class="pt-2">Map</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/driverSupport">
              <v-list-item-title><h3 class="pt-2">Driver Support</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/admin">
              <v-list-item-title><h3 class="pt-2">Administration Dashboard</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/adminSupport">
              <v-list-item-title><h3 class="pt-2">Administration Support</h3></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
              <div style="text-align: center;">
                <div class="github">
                  <a href="https://majordomo.consulting"><img src="/img/MAJORDOMO-logo.png" height="75px" /></a>
                  <a href="https://chsn.support"><img src="/img/CHSN-logo.png" height="75px" /></a>
                  <a href="https://github.com/majordomo-systems/openride"><i class="fab fa-github fa-3x"></i></a>
                </div>
              </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense dark app color="#53346d">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark></v-app-bar-nav-icon>
    </v-app-bar>

<!--
    <v-app-bar dense dark app color="#53346d">
      <v-spacer></v-spacer><span contenteditable="true">openride</span>
    </v-app-bar>
-->
    <v-dialog app v-model="welcomeDialog" max-width="500px">
      <v-card>
        <!--<v-img src="/img/homepage-img.jpg" height="200px"></v-img>-->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">welcome to openride</h3>
            <div class="subheading">a
              <span class="strong">free & open source</span> ride-hailing application.
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn large color="primary" @click="welcomeDialog = false">Let's Go</v-btn>
          <v-checkbox label="Don't show again" color="primary" v-model="dontShowAnyMore"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import * as firebase from 'firebase'

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Log in / create an account'
        }
      ],
      title: 'openride',
      connected: false,
      displayName: '',
      uid: '',
      snackbar: false,
      welcomeDialog: !(localStorage.getItem('dontShowAnyMore') === 'true'),
      dontShowAnyMore: localStorage.getItem('dontShowAnyMore') === 'true'
    }
  },
  watch: {
    dontShowAnyMore() {
      localStorage.setItem('dontShowAnyMore', this.dontShowAnyMore)
    }
  },
  methods: {
    home() {
      this.$router.push('/')
    },
    checkConnection() {
      let vm = this
      firebase.auth().onAuthStateChanged(
        function(user) {
          if (user) {
            vm.connected = !user.isAnonymous
            vm.displayName = user.isAnonymous ? 'Anonymous User' : user.displayName
            vm.uid = user.uid
            vm.snackbar = !user.isAnonymous
          } else {
            vm.connected = false
            vm.displayName = ''
            vm.uid = ''
          }
        },
        function(error) {
          console.log(error)
        }
      )
    },
    signout() {
      let vm = this
      firebase
        .auth()
        .signOut()
        .then(function() {
          vm.displayName = ''
          vm.connected = false
        })
    }
  },
  mounted() {
    this.checkConnection()
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");

@media screen and (max-width: 600px) {
  #toolbarTitle {
    display: none;
  }
}

h1 {
  margin: 0;
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5em;
  padding: 0;
  color: white;
  text-shadow: 0 0.1em 20px black, 0.05em -0.03em 0 black, 0.05em 0.005em 0 black, 0em 0.08em 0 black, 0.05em 0.08em 0 black, 0px -0.03em 0 black, -0.03em -0.03em 0 black, -0.03em 0.08em 0 black, -0.03em 0 0 black;
}

h2 {
  margin: 0;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.5em;
  padding: 0;
  color: white;
}

h3 {
  margin: 0;
  font-family: "Luckiest Guy", cursive;
  font-size: 1em;
  padding: 0;
  color: white;
}

.strong {
  font-weight: 600;
}

ul {
  list-style: none
}

a {
  text-decoration: none;
}

.github {
  margin-top: 40px;
}
</style>