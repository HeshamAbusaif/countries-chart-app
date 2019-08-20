 <template>
              <chart :chart-data="datacollection"></chart>
    </template>
    <script>
    import Chart from "./../chart.js";
    export default {
      components: {
        Chart
      },
      props: ['chartCountryNames'],
      data() {
        return {
          datacollection: null
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {
          this.datacollection = {
            labels: this.chartCountryNames,
            datasets: [
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: this.countriesPopultion
              }
            ]
          };
        },
        async getCountryPopultion() {
          try {
            this.chartCountryNames.forEach( async (country) => {
            let res =  await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            this.countriesPopultion.push(res.popultion)
            })
          } catch (e) {

          }
        }
      }
    };
    </script>
    <style>
    
      #line-chart {
        width: 800px!important;
        height: 600px!important;
        margin: 0 auto;
      }
    
    </style>