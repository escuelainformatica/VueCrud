<template>
  <FormularioProfesor @click="insertar" titulo="Eliminar" modo="eliminar" v-model="profesor"  ></FormularioProfesor>
</template>


<script>
import FormularioProfesor from "@/components/formularios/FormularioProfesor";

export default {
  name: "ProfesorEliminar",
  data() {
    return {
      profesor: {Rut: "", Nombre: "", Apellido: "", Edad: 0}
    }
  },
  methods: {
    eliminar: function () {
      alert("eliminar");
    }
  },
  components: {FormularioProfesor}
}
</script>

<style scoped>

</style>