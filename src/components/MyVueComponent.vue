<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Type here a message: <input v-model="msg">
    <h3>{{ counter}}</h3>
    <my-poly-component :text="msg" v-on:kick="handleEvent"></my-poly-component>
  </div>
</template>

<script>
export default {
  name: 'MyVueComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0
    }
  },
  methods: {
    handleEvent: function (event) {
      console.log('Event from Polymer Component')
      this.counter = this.counter + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
