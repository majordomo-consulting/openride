<template>
  <div>
    <v-container>
      <h2 class="pt-5">Driver Dashboard</h2>
      <v-row>
        <v-col>
          <span class="pa-2">
            <router-link to="/clientProfile" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small secondary">
                <span class="v-btn__content">
                  <span>Update Profile</span>
                </span>
              </button>
            </router-link>
          </span>
        </v-col>
        <v-col style="text-align:right;">
          <span @click="driverSupport = !driverSupport" class="pa-2">
            <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small secondary">
              <span class="v-btn__content">
                <span>Support</span>
              </span>
            </button>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="pa-2">
            <router-link to="/tripFuture" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Upcoming Trips</span>
                </span>
              </button>
            </router-link>
          </span>
          <span class="pa-2">
            <router-link to="/tripHistory" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Past Trips</span>
                </span>
              </button>
            </router-link>
          </span>
        </v-col>
      </v-row>
    </v-container>
    <TripNext />
    <DriverSupport v-if="driverSupport" />
  </div>
</template>

<script>
import DriverSupport from '@/components/DriverSupport'
import TripNext from '@/components/TripNext'

export default {
  data() {
    return {
      driverSupport: false
    }
  },
  components: {
    DriverSupport,
    TripNext
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style>

</style>