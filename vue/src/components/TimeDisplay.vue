<script>
import { formatWithOptions } from 'date-fns/fp'
import { eo } from 'date-fns/locale'
export default {
  data: () => ({
    currentDate: null
  }),
  created() {
    setInterval(this.getDateTime, 100);
  },
  methods: {
    getDateTime() {
      this.currentDate = formatWithOptions({ locale: eo },'yyyy-MM-dd\' \'HH:mm:ss')(new Date())
      // this.currentDate = formatWithOptions(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ssXX')
    }
  }
}
</script>

<template>
    <h3> {{ currentDate }}</h3>
</template>

<style scoped>
h3 {
  font-weight: 600;
  color: white;
  font-size: 1.2rem;
  top: 10px;
  text-align: left;
}
</style>

