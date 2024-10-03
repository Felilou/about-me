<template>
  <ul class="list-group">
    <li v-for="day in timeTable" class="list-group-item">
      <div class="d-flex">
        <div class="me-auto">{{ day.day }}</div>
        <div>{{ day.time }}</div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const timeTable = [
  {
    day: "Montag",
    time: "14-18"
  },
  {
    day: "Dienstag",
    time: "14-18"
  },
  {
    day: "Mittwoch",
    time: "14-18"
  },
  {
    day: "Donnerstag",
    time: "14-18"
  },
  {
    day: "Freitag",
    time: "14-18"
  },
  {
    day: "Samstag",
    time: "14-18"
  },
  {
    day: "Sonntag",
    time: "14-18"
  }
]
</script>

<style></style>
