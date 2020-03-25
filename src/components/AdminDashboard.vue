<template>
  <div>
    <v-container>
      <h2 class="pt-5">Administration Dashboard</h2>
      <h3>Appointments</h3>
      <v-row>
          <span @click="appointmentsDay = !appointmentsDay" class="pa-2">
          <v-switch
            v-model="daySwitch"
            :disabled="disabled"
            :readonly="readonly"
            :loading="loading"
            :flat="flat"
            :inset="inset"
            :error="error"
            :success="success"
            :color="color"
            label="Today"
          ></v-switch>
          </span>
          <span @click="appointmentsWeek = !appointmentsWeek" class="pa-2">
          <v-switch
            v-model="weekSwitch"
            :disabled="disabled"
            :readonly="readonly"
            :loading="loading"
            :flat="flat"
            :inset="inset"
            :error="error"
            :success="success"
            :color="color"
            label="Week"
          ></v-switch>
          </span>
          <span @click="appointmentsMonth = !appointmentsMonth" class="pa-2">
          <v-switch
            v-model="monthSwitch"
            :disabled="disabled"
            :readonly="readonly"
            :loading="loading"
            :flat="flat"
            :inset="inset"
            :error="error"
            :success="success"
            :color="color"
            label="Month"
          ></v-switch>
          </span>
          <span @click="appointmentsYear = !appointmentsYear" class="pa-2">
          <v-switch
            v-model="yearSwitch"
            :disabled="disabled"
            :readonly="readonly"
            :loading="loading"
            :flat="flat"
            :inset="inset"
            :error="error"
            :success="success"
            :color="color"
            label="Year"
          ></v-switch>
          </span>
      </v-row>
      <v-row>
        <v-col>
          <span class="pa-2">
            <router-link to="/newPickup" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Schedule a Pickup</span>
                </span>
              </button>
            </router-link>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="pa-2">
            <router-link to="/adminAllClients" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>All Clients</span>
                </span>
              </button>
            </router-link>
          </span>
          <span class="pa-2">
            <router-link to="/clientRegister" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Add a Client</span>
                </span>
              </button>
            </router-link>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="pa-2">
            <router-link to="/adminAllDrivers" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>All Drivers</span>
                </span>
              </button>
            </router-link>
          </span>
          <span class="pa-2">
            <router-link to="/driverRegister" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Add a Driver</span>
                </span>
              </button>
            </router-link>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="pa-2">
            <router-link to="/adminBilling" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Billing</span>
                </span>
              </button>
            </router-link>
          </span>
          <span class="pa-2">
            <router-link to="/adminActivity" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Activity</span>
                </span>
              </button>
            </router-link>
          </span>
          <span class="pa-2">
            <router-link to="/adminDB" :key="$route.fullPath">
              <button type="button" class="white--text v-btn v-btn--depressed theme--light v-size--small primary">
                <span class="v-btn__content">
                  <span>Manage DB</span>
                </span>
              </button>
            </router-link>
          </span>
        </v-col>
      </v-row>
    </v-container>
    <AdminAppointmentsDay v-if="appointmentsDay" />
    <AdminAppointmentsWeek v-if="appointmentsWeek" />
    <AdminAppointmentsMonth v-if="appointmentsMonth" />
    <AdminAppointmentsYear v-if="appointmentsYear" />
  </div>
</template>

<script>
import AdminAppointmentsDay from '@/components/AdminAppointmentsDay'
import AdminAppointmentsWeek from '@/components/AdminAppointmentsWeek'
import AdminAppointmentsMonth from '@/components/AdminAppointmentsMonth'
import AdminAppointmentsYear from '@/components/AdminAppointmentsYear'

export default {
  data() {
    return {
      appointmentsDay: true,
      appointmentsWeek: false,
      appointmentsMonth: false,
      appointmentsYear: false,
      daySwitch: true,
      weekSwitch: false,
      monthSwitch: false
    }
  },
  components: {
    AdminAppointmentsDay,
    AdminAppointmentsWeek,
    AdminAppointmentsMonth,
    AdminAppointmentsYear
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style>

</style>
