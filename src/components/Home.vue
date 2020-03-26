<template>
  <v-app>
    <div class="wrapper">
      <div class="main-content">
        <Logo />
        <div class="illustration">
          <div class="boy"> <img src="/img/logo/boy.png" width="90px"/></div>
          <div class="person-type-wrapper">
            <div class="person-type active home-body">
              <div class="scenery"><img src="/img/logo/indoor.svg" height="250"/></div>
              <div class="background-items"><img src="/img/logo/furniture.svg" width="270"/></div>
              <div class="foreground-items"><img src="/img/logo/dog.png" width="65"/></div>
            </div>
            <div class="person-type outdoor-person">
              <div class="scenery"><img src="/img/logo/outdoor.svg" height="250"/></div>
              <div class="background-items"><img src="/img/logo/sky.svg" width="220"/></div>
              <div class="foreground-items"><img src="/img/logo/cartree.png" width="200"/></div>
            </div>
          </div>
        </div>
        <div class="option-wrapper">
          <div class="option active" data-option="home" @click="clientMenu = !clientMenu; driverMenu = !driverMenu">I'm a client!</div>
          <div class="option" data-option="outdoor" @click="driverMenu = !driverMenu; clientMenu = !clientMenu">I'm a driver!</div>
        </div>
        <span contenteditable="true">
          <h2>Deploy your own Ride Hailing Network</h2>
          Does your organization or municipality want to implement a ride hailing program?
          <br />
          Many small locales do not have public transit and are looking for ways to schedule and administer a drive network.
          <br />
          <h2>openride</h2>
          is a free and opensource ride-hailing application.  It consists of a client and driver app and an <router-link to="/admin" :key="$route.fullPath">administration dashboard.</router-link>
          <br />
          Source code is available on <a href="https://github.com/majordomo-systems/openride">GitHub</a>.
          <br />
          Usage under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a> License.
          <br />
          Created for <a href="https://chsn.support">Central Hastings Support Network</a> by <a href="https://majordomo.consulting">majordomo Consulting</a>.
          <div>
            <h3 style="padding-top:20px;">Features:</h3>
            Driver & Client Profiles<br />
            Directions & Mapping
          </div>
        </span>
        <div class="menus">
          <transition name="animate" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <v-list v-if="clientMenu" color="transparent">
                <v-list-item>
                  <v-list-item-content>
                    <router-link to="/clientDashboard" :key="$route.fullPath">
                      <v-list-item-title>
                        <h2>Dashboard (Login)</h2>
                      </v-list-item-title>
                    </router-link>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <router-link to="/clientRegister" :key="$route.fullPath">
                      <v-list-item-title>
                        <h2>New Client</h2>
                      </v-list-item-title>
                    </router-link>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <router-link to="/map" :key="$route.fullPath">
                      <v-list-item-title>
                        <h2>Map</h2>
                      </v-list-item-title>
                    </router-link>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <router-link to="/clientSupport" :key="$route.fullPath">
                      <v-list-item-title>
                        <h2>Client Support</h2>
                      </v-list-item-title>
                    </router-link>
                  </v-list-item-content>
                </v-list-item>
            </v-list>
          </transition>
          <transition name="animate" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <v-list v-if="driverMenu" color="transparent">
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/driverDashboard" :key="$route.fullPath">
                    <v-list-item-title>
                      <h2>Dashboard (Login)</h2>
                    </v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/driverRegister" :key="$route.fullPath">
                    <v-list-item-title>
                      <h2>New Driver</h2>
                    </v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/map" :key="$route.fullPath">
                    <v-list-item-title>
                      <h2>Map</h2>
                    </v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/driverSupport" :key="$route.fullPath">
                    <v-list-item-title>
                      <h2>Driver Support</h2>
                    </v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </transition>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  data() {
    return {
      clientMenu: true,
      driverMenu: false
    }
  },
  components: { Logo },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: radial-gradient(#444, #53346d);
  font-family: "Comfortaa", sans-serif;
}

.main-content {
  max-width: 700px;
  margin: 0.5em auto 0;
  text-align: center;
}

.github {
  margin-top: 40px;
}

svg {
  display: inline-block;
}

.illustration {
  position: relative;
  align-self: end;
  margin: auto;
  height: 250px;
  width: 250px;
}

.boy,
.scenery,
.background-items,
.foreground-items {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

.scenery {
  transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.background-items {
  transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 100ms;
  top: 23px;
}

.foreground-items {
  transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 200ms;
  bottom: 20px;
}

.home-body .foreground-items {
  margin-left: -60px;
}

.outdoor-person .foreground-items {
  margin-right: -80px;
}

.boy {
  bottom: 25px;
  margin-right: -65px;
  z-index: 10;
}

.person-type > div {
  transform: scale(0);
  opacity: 0;
}

.person-type.active > div {
  transform: scale(1);
  opacity: 1;
}

.option-wrapper {
  display: flex;
  margin: 3em auto;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  padding: 5px;
  max-width: 300px;
  font-size: 12px;
  line-height: 1.2;
}
.option-wrapper .option {
  transition: all 200ms ease;
  padding: 10px 10px 8px;
  width: 50%;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}
.option-wrapper .option.active {
  background: #fff;
  color: #333;
  pointer-events: none;
}

aside.context {
  text-align: center;
  color: #fff;
}
aside.context a {
  text-decoration: none;
  color: #fff;
  padding: 3px 0;
  border-bottom: 1px dashed;
}
aside.context .explanation {
  max-width: 700px;
  margin: 4em auto;
}

footer {
  text-align: center;
  margin: 8em auto;
  width: 100%;
}
footer a {
  text-decoration: none;
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: transparent;
  border: 1px dashed #fff;
  color: #fff;
  margin: 5px;
}
footer a:hover {
  background: rgba(255, 255, 255, 0.1);
}
footer a .icons {
  margin-top: 12px;
  display: inline-block;
  font-size: 20px;
}
</style>