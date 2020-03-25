<template>
  <div>
    <div class="nextTripContainer" v-if="trip">
      <div class="tripContainer">
        <div class="tripTable"><TripHistoryTable /></div>
      </div>
      <div style="text-align:right;"><h3>Your Past Trips</h3></div>
    </div>
  </div>
</template>

<script>
import MapLive from '@/components/MapLive'
import TripHistoryTable from '@/components/TripHistoryTable'

export default {
  data() {
    return {
      trip: true
    }
  },
  components: {
    MapLive,
    TripHistoryTable
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