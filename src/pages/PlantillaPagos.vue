<template>
  <div>
    <h3>Lista de pagos</h3>

    <ul class="list-group">
      <li v-for="(recibo, i) in recibo1" :key="i"  class="list-group-item">
        <router-link :to="`/details/${recibo.id}`" >{{
          recibo.fecha
        }}</router-link>
        <input type="checkbox" name="confirmar" id="confirmar" >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
  setup(){
    const recibo1 = ref([])
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/recibo.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        recibo1.value.push({
          id: id,
          nombrePedido: res.data[id].nombrePedido,
          telefono: res.data[id].telefono,
          hora: res.data[id].hora,
          fecha: res.data[id].fecha,
          pago: res.data[id].pago,
          entrega: res.data[id].entrega
        })
      }
    })
    .catch(error=> console.log(error))
    return {recibo1};
  }
  /* computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  }, */
};
</script>
<style>
#confirmar{
  margin-left: 20px;
}
</style>