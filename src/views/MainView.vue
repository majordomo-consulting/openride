<template>
  <v-app>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-snackbar v-model="snackbar" app>
      Hello {{ displayName }}
      <v-btn text color="primary" @click.native="snackbar = false">close</v-btn>
    </v-snackbar>

    <v-navigation-drawer fixed v-model="drawer" right temporary app>
      <v-list>
        <div v-if="connected">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click='home'>{{ displayName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="signout()" style="cursor: pointer;">Sign Out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/login" :key="$route.fullPath">
                <v-list-item-title>Create Account / Login</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/">
              <v-list-item-title>Home</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/map">
              <v-list-item-title>Map</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/support">
              <v-list-item-title>Support</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar bottom dense dark app class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark></v-app-bar-nav-icon>
      <v-toolbar-title id="toolbarTitle" style="cursor: pointer;" v-text="title" @click="home"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

  </v-app>
</template>

<script>
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
@media screen and (max-width: 600px) {
  #toolbarTitle {
    display: none;
  }
}

.strong {
  font-weight: 600;
}
</style>