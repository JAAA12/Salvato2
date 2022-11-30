<template>
<div>
    <h1>Detalles Del Pedido</h1>
    <div class="form-group">
        <label for="formInput">Nombre</label>
        <input 
        v-model="nombrePedido"
        type="text"
        class="form"
        placeholder="Nombre">
    </div>
    <div class="form-group">
        <label for="formInput">Teléfono</label>
        <input 
        v-model="telefono"
        type="text"
        class="form"
        placeholder="Celular">
    </div>
    <div class="form-group">
        <label for="formInput">Fecha De Entrega</label>
        <input 
        v-model="fecha"
        type="date"
        class="form"
        placeholder="DD/MM/AA">
    </div>
    <div class="form-group">
        <label for="formInput">Hora De Entrega</label>
        <input 
        v-model="hora"
        type="time"
        class="form"
        placeholder="Hora">
    </div>
    <div class="form-group">
        <label for="select">Seleccione Método De Pago</label>
        <select name="form" id="metodo-pago" v-model="pago">
            <option value="transferencia">Transferencia</option>
            <option value="efectivo">Efectivo</option>
        </select>
    </div>
    <div class="form-group">
        <label for="sele">Seleccione Modo De Entrega</label>
        <select name="form" id="metodo-entrega" v-model="entrega">
            <option value="domicilio">Domicilio</option>
            <option value="tienda">Se adquiere en punto salvato</option>
        </select>
    </div>
    <button class="btn" @click="generaRecibo">
            Pedir
          </button>

</div>

</template>

<script>
/* eslint-disable */
import {ref} from 'vue' //ref crea un objeto
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from 'axios'
export default{
setup(){
    const store = useStore()
    const router = useRouter()
    const hora = ref("")
    const fecha = ref("")
    const entrega = ref("")
    const pago = ref("")
    const nombrePedido = ref("")
    const telefono = ref("")
    
    function generaRecibo(){
      if(hora.value != '' && fecha.value != ""){
        const recibo = {
          nombrePedido:nombrePedido.value,
          telefono:telefono.value,
          hora:hora.value,
          fecha:fecha.value,
          entrega:entrega.value,
          pago:pago.value
        }
      /*  store.dispatch("addPersona", persona);
        router.push('/print')*/
        axios.post('https://databasejaa-default-rtdb.firebaseio.com/recibo.json',recibo)
        .then(res=> console.log(res))
        .catch(error=> console.log(error))
      }else{
        alert('Ingrese todos los datos')
      }
    }

    return{hora, fecha,entrega,pago, telefono,nombrePedido,generaRecibo}
}
    
}
</script>

<style>

</style>