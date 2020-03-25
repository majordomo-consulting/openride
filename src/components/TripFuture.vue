<template>
  <div>
    <div class="nextTripContainer" v-if="trip">
      <div class="tripContainer">
        <div class="tripTable"><TripFutureTable /></div>
      </div>
      <div style="text-align:right;"><h3>Your Upcoming Trips</h3></div>
    </div>
  </div>
</template>

<script>
import MapLive from '@/components/MapLive'
import TripFutureTable from '@/components/TripFutureTable'

export default {
  data() {
    return {
      trip: true
    }
  },
  components: {
    MapLive,
    TripFutureTable
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style>
.tripTable {
  width: 100%;
}
.tripMap {
  height: 200px;
  width: 100%
}
</style>