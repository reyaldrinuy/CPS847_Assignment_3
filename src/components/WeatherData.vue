<script>
const BASE = 'https://api.openweathermap.org/data/2.5/weather?';
const BASE_COORD = 'https://api.openweathermap.org/geo/1.0/direct?';
export default {
  data: () => ({
    lat: null,
    lon: null,
    apiKey: 'df9ba21deea7c960a8b102b10aa450cb',
    temp: null
  }),

  created() {
    // setInterval(this.fetchData(), 2000)
    this.fetchData()
  },

  methods: {
    async fetchData() {

      if (this.lat == null) {
        // Getting the coordinates
        const cor_url = `${BASE_COORD}q=Paris, Ontario, 124&appid=${this.apiKey}`
        const cors = await (await fetch(cor_url)).json()
        this.lat = cors[0]['lat']
        this.lon = cors[0]['lon']
        console.log('Got cors')
      }
      
      // Getting the temperature
      const url = `${BASE}lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`
      const res = await (await fetch(url)).json()
      this.temp = res['main']['temp']
    }
  }
}
</script>

<template>
  <h3> Paris, Ontario Temp: {{ temp }} C</h3>
</template>

<style scoped>
h3 {
  font-weight: 300;
  color: white;
  font-size: 1.2rem;
  top: 10px;
  text-align: left;
}
</style>