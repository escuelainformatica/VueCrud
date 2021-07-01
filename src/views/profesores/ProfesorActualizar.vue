<template>
  <FormularioProfesor @click="actualizar" titulo="Actualizar" modo="actualizar" v-model="profesor"  ></FormularioProfesor>
</template>

<script>
import FormularioProfesor from "@/components/formularios/FormularioProfesor";

export default {
  name: "ProfesorActualizar",
  data() {
    return {
      profesor: {Rut: "", Nombre: "", Apellido: "", Edad: 0}
    }
  },
  methods: {
    actualizar: function () {
      alert("actualizar");
    }
  },
  components: {FormularioProfesor}
}
</script>

<style scoped>

</style>