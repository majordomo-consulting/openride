<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item="props">
        <tr>
            <td>{{ props.item.Name }}</td>
            <td>{{ props.item.PhoneNumber }}</td>
            <td>{{ props.item.GEN }}</td>
            <td>{{ props.item.Address }}</td>
            <td>{{ props.item.Town }}</td>
            <td>{{ props.item.SMOK }}</td>
            <td>{{ props.item.PREFGENDER }}</td>
            <td>{{ props.item.SCHEDULE }}</td>
            <td>{{ props.item.Notes }}</td>
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
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'Name',
        },
        { text: 'Phone #', value: 'PhoneNumber' },
        { text: 'Gender', value: 'GEN' },
        { text: 'Address', value: 'Address' },
        { text: 'Town', value: 'Town' },
        { text: 'Smoker?', value: 'SMOK' },
        { text: 'Gender Preference', value: 'PREFGENDER' },
        { text: 'Availability', value: 'SCHEDULE' },
        { text: 'Notes', value: 'Notes' },
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
        "https://api.airtable.com/v0/"+app_id+"/openrideDrivers",
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
