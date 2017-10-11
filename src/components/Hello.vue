<template>
  <div class="hello">
    <h2>{{message}}</h2>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  props: {
    str: String
  },
  computed: {
    message () {
      return 'Hell.vue ' + (this.str || 'World') + '!!'
    }
  }
}
</script>

<style>
.Hello{
  text-align: center;
}
</style>