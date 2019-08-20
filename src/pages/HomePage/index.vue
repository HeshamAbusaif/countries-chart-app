<template>
    <div>
        <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
        <thead>
            <tr>
        <th class="th-sm">Country

        </th>
        <th class="th-sm">Top Currency

        </th>
        <th class="th-sm">Top Language

        </th>
        <th class="th-sm">Action

        </th>
        
        </tr>
    </thead>
    <tbody>
    <tr v-for="(country, index) in countries.data" :key="index">
        <td>
            {{ country.name }}
        </td>
        <td>
            {{ country.currencies[0].name }}
        </td>
        <td>
            {{ country.languages[0].name }}
        </td>
        <td>
                  <router-link :to="{
                        name: 'country',
                        params: {
                        id: country.alpha3Code
                        },
                    }">View More</router-link>
        <td>
        </td>

        </tr>
    </tbody>
    <tfoot>
        <tr>
        <th>Country
        </th>
        <th>Currency
        </th>
        <th>Language
        </th>
        <th>Action
        </th>
        </tr>
    </tfoot>
    </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        axios
    },
    data() {
        return {
            countries: [],
            page: 10
            
        }
    },
    created() {
         this.getCountries()
    },
    methods: {
        async getCountries() {
            try {
                this.countries = await axios.get('https://restcountries.eu/rest/v2/all')
            } catch (e) {
                console.log(e.message)
            }
            return this.countries.data
        }
    }
}
</script>

<style>
</style>
