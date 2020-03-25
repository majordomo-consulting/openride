<template>
  <div>
    <div style="text-align:right;"><h3>Your next trip</h3></div>
    <div class="nextTripContainer" v-if="trip">
      <div class="tripContainer">
        <div class="tripTable"><TripNextTable /></div>
        <div class="tripMap"><MapLive /></div>
      </div>
    </div>
  </div>
</template>

<script>
import MapLive from '@/components/MapLive'
import TripNextTable from '@/components/TripNextTable'

export default {
  data() {
    return {
      trip: true
    }
  },
  components: {
    MapLive,
    TripNextTable
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