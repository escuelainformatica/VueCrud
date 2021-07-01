<template>
  <div>
    <form>
      <br>
      <h1>{{ titulo }}</h1>
      <div class="form-group">
        <label >Rut</label>
        <input type="text" class="form-control"  v-if="modo==='insertar'"
               v-model="value.Rut" @input="actualizarCampo($event.target.value,'Rut')">
        <input type="text" class="form-control"  readonly="readonly" v-if="modo!=='insertar'"
               v-bind:value="value.Rut">
      </div>
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" class="form-control"  v-if="modo!=='eliminar'"
               v-model="value.Nombre" @input="actualizarCampo($event.target.value,'Nombre')">

        <input type="text" class="form-control"  readonly="readonly" v-if="modo==='eliminar'">
      </div>
      <div class="form-group">
        <label >Apellido</label>
        <input type="text" class="form-control"  v-if="modo!=='eliminar'"
               v-model="value.Apellido" @input="actualizarCampo($event.target.value,'Apellido')">

        <input type="text" class="form-control"  readonly="readonly" v-if="modo==='eliminar'">
      </div>
      <div class="form-group">
        <label >Edad</label>
        <input type="text" class="form-control"  v-if="modo!=='eliminar'"
               v-model="value.Edad" @input="actualizarCampo($event.target.value,'Edad')">

        <input type="text" class="form-control"  readonly="readonly" v-if="modo==='eliminar'">
      </div>
      <button type="button" class="btn btn-primary" @click="clickBoton">{{titulo}}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioProfesor",
  props:["titulo","modo","value"], // value es para obtener los datos de v-model this.value
  methods:{
    actualizarCampo(valor,columna) {
      this.value[columna]=valor;
      this.$emit('input', this.value);
    },
    clickBoton() {
      this.$emit('click','');
    }
  }
}
</script>

<style scoped>

</style>