<template>
  <FormularioProfesor @click="insertar" titulo="Insertar" modo="insertar" v-model="profesor"  ></FormularioProfesor>
</template>


<script>
import FormularioProfesor from "@/components/formularios/FormularioProfesor";

export default {
  name: "ProfesorInsertar",
  data() {
    return {
      profesor: {Rut: "", Nombre: "", Apellido: "", Edad: 0}
    }
  },
  methods: {
    insertar: function () {
      alert("insertar");
    }
  },
  components: {FormularioProfesor}
}
</script>

<style scoped>

</style>