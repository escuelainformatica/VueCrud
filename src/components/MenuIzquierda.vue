<template>
  <div>
  <br>
  <ul class="list-group">
    <MenuIzquierdaSubItem titulo="menu1" vinculo="#" icono="edit" />
    <MenuIzquierdaSubItem titulo="menu1" vinculo="#" icono="edit" />
    <MenuIzquierdaSubItem titulo="menu1" vinculo="#" icono="edit" />
    <MenuIzquierdaSubItem titulo="menu1" vinculo="#" icono="edit" />
  </ul>
  </div>
</template>

<script>
import MenuIzquierdaSubItem from "@/components/menu/MenuIzquierdaSubItem";
export default {
  name: "MenuIzquierda",
  components: {MenuIzquierdaSubItem}
}
</script>

<style scoped>

</style>