<script setup>
import TimeDisplay from './TimeDisplay.vue';
import WeatherData from './WeatherData.vue'

</script>

<template>
  <div class="greetings">
    <h1>MyCompany Inc. IT consulting </h1>
    <TimeDisplay/>
    <WeatherData />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
