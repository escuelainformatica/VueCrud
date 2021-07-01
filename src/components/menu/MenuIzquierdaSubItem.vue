<template>
  <li class="list-group-item"><a :href="vinculo">{{titulo}}</a></li>
</template>

<script>
export default {
  name: "MenuIzquierdaSubItem",
  props:['titulo','vinculo','icono']
}
</script>

<style scoped>

</style>