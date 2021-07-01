<template>
  <div>
      <Tabla :encabezados="encabezado" :datos="profesores" :columnas="columnas" />
  </div>
</template>

<script>
import Tabla from "@/components/Tabla";

const profesores=[
  {Rut:"1-2",Nombre:"john",Apellido:"Doe",Edad:22},
  {Rut:"3-4",Nombre:"john2",Apellido:"Doe",Edad:22},
];
// profesores[0] {Nombre:"john",Apellido:"Doe",Edad:22},
//profesores[0].Nombre // john
//profesores[0]["Nombre"] // john




export default {
  name: "ProfesoresTabla",
  components: {Tabla},
  data() {
    return {
      encabezado:["Rut","Nombre","Apellido","Edad"],
      columnas:["Rut","Nombre","Apellido","Edad"],
      profesores:profesores,
    }
  }
}
</script>

<style scoped>

</style>