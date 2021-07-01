<template>
  <div id="app" class="container-fluid">
    <Navegacion/>
    <div class="row">
      <div class="col-3">
        <MenuIzquierda></MenuIzquierda>
      </div>
      <div class="col-9">
          <router-view/>
      </div>

    </div>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="/">Ir a la casa</a>
    </div>-->

  </div>
</template>


<script>
import Navegacion from "@/components/Navegacion";
import MenuIzquierda from "@/components/MenuIzquierda";
export default {
  components: {MenuIzquierda, Navegacion}
}
</script>