<template>
  <v-app>

    <v-content>
      <router-view></router-view>
    </v-content>

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