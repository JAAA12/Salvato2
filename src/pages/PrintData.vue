<template>
  <div>
    <h3>Lista de invitados</h3>

    <ul class="list-group">
      <li v-for="(persona, i) in personas" :key="i"  class="list-group-item">
        <router-link :to="`/details/${persona.id}`">{{
          persona.nombre
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
  setup(){
    const personas = ref([])
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/persona.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        personas.value.push({
          id: id,
          nombre: res.data[id].nombre,
          email: res.data[id].email,
          aporte: res.data[id].aporte
        })
      }
    })
    .catch(error=> console.log(error))
    return {personas};
  }
  /* computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  }, */
};
</script>