<template>
  <table class="table">
      <thead>
        <tr>
          <th v-for="encabezado in encabezados" v-bind:key="encabezado">{{ encabezado }}</th>
        </tr>
      </thead>
    <tbody>
        <tr v-for="profesor in datos" v-bind:key="profesor.Nombre">
          <td v-for="columna in columnas" v-bind:key="columna">{{profesor[columna]}} </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Tabla"
  ,props:["encabezados","datos","columnas"]
}
</script>

<style scoped>

</style>