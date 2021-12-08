<template>
  <div id="vue-app">
    <LinksDataComponent>
        <LinkComponent linkForSocialMedia="" pathForImage=""/>
    </LinksDataComponent>
  </div>
</template>

<script>

import LinksDataComponent from './components/LinksDataComponent.vue'
import LinkComponent from './components/LinkComponent.vue'

export default {
  name: 'App',
  components: {
    LinksDataComponent,
    LinkComponent
  }
}
</script>

<style>
#vue-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
