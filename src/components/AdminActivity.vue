<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item="props">
        <tr>
            <td>{{new Date(props.item.Date).toLocaleString()}}</td>
            <td>{{ props.item.ClientName }}</td>
            <td>{{ props.item.DriverName }}</td>
            <td>{{ props.item.Origin }}</td>
            <td>{{ props.item.Destination }}</td>
            <td>DIRECTIONS</td>
            <td>{{ props.item.Details }}</td>
            <td>CANCEL</td>
        </tr>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  computed: {},
  data() {
    return {
      headers: [
        {
          text: 'Date',
          align: 'start',
          sortable: true,
          value: 'Date',
        },
        { text: 'Client Name', value: 'ClientName' },
        { text: 'Driver Name', value: 'DriverName' },
        { text: 'Pickup Location', value: 'Origin' },
        { text: 'Destination', value: 'Destination' },
        { text: 'Directions', value: 'directions' },
        { text: 'Details', value: 'Details' },
        { text: 'Cancel Trip', value: 'cancel' },
      ],
      items: []
    }
  },
  mounted() {
      this.loadItems(); 
  },
  methods: {
    loadItems() {
      
      // Init variables
      var self = this
      var app_id = "appkP1ek1DJZ5zKkh";
      var app_key = "keyrQfYtjBY4aFNmI";
      this.items = []
      axios.get(
        "https://api.airtable.com/v0/"+app_id+"/openrideAppointments",
        { 
          headers: { Authorization: "Bearer "+app_key } 
        }
      ).then(function(response){
        self.items = response.data.records.map((item)=>{
          return {
              id: item.id,
              ...item.fields
          }
        })
      }).catch(function(error){
        console.log(error)
      })
    }
  }
}
</script>
