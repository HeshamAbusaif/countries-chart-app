<template>
    <div>
        <p>{{country.data.name}}</p>
        <img v-bind:src="country.data.flag" />
        <div class="row">
          <div class="col">
            Population: 
            <p class="list-group-item">
              {{country.data.population}}</p>
          </div>
          <div class="col">
            Languages
            <ul class="list-group">
              <li v-for="(language, index) in country.data.languages" :key="index" class="list-group-item">
                {{language.name}}
              </li>
            </ul>
          </div>
          <div class="col">
              Currenceis
               <ul class="list-group">
                <li v-for="(currency, index) in country.data.currencies" :key="index" class="list-group-item">
                  {{currency.name}}
                </li>
              </ul>
          </div>
          <div class="col">
            Region
             <p class="list-group-item"> 
              {{country.data.region}} </p>
          </div>
          <div class="col">
            TimeZones
             <ul class="list-group">
                <li v-for="(time, index) in country.data.timezones" :key="index" class="list-group-item">
                  {{time}}
                </li>
              </ul>
          </div>
        </div>
        
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CountryDetail',
  components: {
  },
  props: ["countryName"],
  data() {
    return {
      country: [],
      countryCode: ''
    }
  },
  created() {
    this.getParams()
    this.getCountryDetails() 
  },
  methods: {
    getParams () {
      this.countryCode = this.$route.params.id
    },
    async getCountryDetails() {
      console.log(this.countryCode)
      try {
            this.country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${this.countryCode}`)
            console.log(this.country.data)
         } catch (e) {
                console.log(e.message)
         }
        return this.country
    }
  }
}
</script>

<style>
img {
  width: 200px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.list-group-item {
  margin-top: 20px;
}
</style>
