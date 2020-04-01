<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Cette saison Kodatech se passeras en équipe!<br>
      De la fight, de l'entraide, des coups dans le dos, cette saison nous promet de belles images!
    </p>
    <h3>Les teams</h3>
    <ul>
      <a href="/teamcoolkids">Team Cool Kids</a> |
      <a href="/Topinambour">Topinambour</a> |
      <a href="/P-AZ-per">P-AZ-per</a> |
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
