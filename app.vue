<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<style>
@import '/node_modules/animate.css/animate.css';
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');

.text-fancy {
  font-family: "Forum", serif;
  font-weight: 400;
  font-style: normal;
}

h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h4 {
  display: block;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h5 {
  display: block;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h6 {
  display: block;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

p {
  margin-bottom: 2em;
}

</style>

<script setup>
const language = ref("at");
const provideLanguage = provide("language", language);

onMounted(() => {
  useColorMode().preference = 'light';
  console.log(useColorMode())
})
</script>
