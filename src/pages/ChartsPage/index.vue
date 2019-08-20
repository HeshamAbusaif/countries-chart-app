<template>
      <div id="app">
        <div class="container">
          <div class="row">
            <div class="col">
              <visualisation :chartCountryNames="chartCountryNames"></visualisation>
            </div>
            <div class="col">
                 <div class="card mb-3"
                    v-for="(countryForm,index) in countryForms" :key="index">
                    <div class="card-body">
                      <span class="float-right" style="cursor:pointer" @click="deleteCountry(index)">
                        X
                      </span>
                      <h4 class="card-title">
                        Add Country
                      </h4>
                      <div class="employee-form">
                        <select class="custom-select custom-select-lg mb-3" v-model="currentRegion" v-on:change="getCountries()">
                            <option v-for="(region, index) in regions" v-bind:value="region" :key="index">
                              {{region.region}}
                            </option>
                          </select>
                          <select class="custom-select custom-select-lg mb-3" v-on:change="addSelectedCountryToChart($event)"> 
                              <option v-for="(country, index) in countriesRegion" :key="index" >
                                {{country.name}}
                              </option>
                          </select>
                      </div>
                    </div>
                  </div>
                   <button class="btn btn-success mt-5 mb-5" @click="addNewCountry()">
                      Add Country
                   </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <script>
    /* eslint-disable */
    import Visualisation from './../../components/Visualisation.vue';
    import axios from 'axios'

    export default {
      name: 'app',
      components: {
        Visualisation
      },
      data() {
          return {
              selected: null,
              countries: [],
              regions: [],
              currentRegion: '',
              countriesRegion: [],
              countryForms: [
                {
                  name: '',
                  population: ''
                }
              ],
              chartCountryNames: [],
              countriesData: [],
              currentCountry: '',

          }
      },
      created() {
         this.fetchCountries()
      },
      methods: {
        async fetchCountries() {
            try {
              this.countries = await axios.get('https://restcountries.eu/rest/v2/all')
              this.getRegions()
            } catch (e) {
              console.log(e.message)
            }
          return this.countries.data
        },
        getRegions() {
           const map = new Map();
           for (const country of this.countries.data) {
                if(!map.has(country.region)){
                    map.set(country.region, true);
                    this.regions.push({region: country.region});
                }
            }
        },
        getCountries() {
          this.countriesRegion = this.countries.data.filter(item=>{
            return item.region === this.currentRegion.region
          })
        },
        addNewCountry() {
          this.countryForms.push({
            name: '',
            population: ''
          })
        },
        deleteCountry(index) {
          this.countryForms.splice(index,1)
          this.chartCountryNames.splice(index,1)
        },
        addSelectedCountryToChart(event){
          this.chartCountryNames.push(event.target.value)
        },
      }
    }
    </script>
    <style>

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 20px;
    }
    
    .row {
      margin-bottom: 30px;
    }
    </style>