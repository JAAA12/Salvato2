<template>
  <div>
    <div class="card" v-if="recibo != undefined">
      <h5 class="card-header">{{ recibo.nombrePedido }}</h5>
      <div class="card-body">
        <div class="card-text">
          <p>Nombre : {{recibo.nombrePedido}}</p>
          <p>Télefono : {{recibo.telefono}}</p>
          <p>Hora de entrega : {{recibo.hora}}</p>
          <p>Fecha de entrega : {{recibo.fecha}}</p>
          <p>Forma de pagar : {{recibo.pago}}</p>
          <p>Despacho de producto : {{recibo.entrega}}</p>
        </div>
       
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/pagos" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
/* import {computed} from 'vue'
import {useStore} from 'vuex' */
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import axios from 'axios'

export default {
  setup(){
    /* const store = useStore() */
    const route = useRoute()
    const recibo = ref("")

   /*  const persona = computed(()=>{ */
      const index = route.params.index;
      /* return store.getters.getPersona(index);
    }) */
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/recibo/'+index+'.json')
    .then(res=>{
      console.log(res)
      recibo.value = res.data
    })
    .catch(error=>console.log(error))
    return{recibo}
  }
  // computed: {
  //   persona() {
  //     const index = this.$route.params.index;
  //     return this.$store.getters.getPersona(index);
  //   },
  // },
};
</script>