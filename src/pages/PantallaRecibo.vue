<template>
<div id="recibo" src="js/jspdf.min.js">
    <h1>Detalles Del Pedido</h1>
                           <div id="carro">
                                    
                                <table id="lista-carrito" class="u-full-width">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(carro, j) in producto" :key="j">
                                <td> {producto.imagen} </td>
                                <td> {{producto[0].titulo}} </td>
                                <td> {{producto[0].precio}} </td>
                                <td> {{producto[0].cantidad}} </td>
                                <td> {{producto[0].total}} </td>
                                <td> <a href= "#" class="borrar-curso" data-id="{producto.id}"> X </a> </td>
                                    </tbody>
                                </table>
                            </div>
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
    <button class="btn" @click="generaRecibo"> Pedir</button>
   


</div>

</template>

<script >
/* eslint-disable */
import jsPDF from 'jspdf'
import {ref} from 'vue' //ref crea un objeto
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import axios from 'axios'

export default{

    name: 'pdf',
    
   
setup(){
    const store = useStore()
    const route = useRoute()
    const hora = ref("")
    const fecha = ref("")
    const entrega = ref("")
    const pago = ref("")
    const nombrePedido = ref("")
    const telefono = ref("")
    const datos = []
    
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
      axios.get('https://databasejaa-default-rtdb.firebaseio.com/recibo.json')
      .then(res=>{
        console.log(res);
        console.log(nombrePedido .value,"Nombre")
        
      for(const id in res.data){
        console.log(res.data[id].nombrePedido)
        console.log(nombrePedido.value)
        var pdf = new jsPDF();
        datos.push({
              nombrePedido: nombrePedido.value,
              telefono: telefono.value,
              hora: hora.value,
              fecha: fecha.value,
              entrega: entrega.value,
              pago: pago.value

              

            })
        

            
        }
        console.log("hola mundo",datos[0]) 
            datos.splice(1);
            pdf.text(10,10,'' + [datos[0].nombrePedido] + [datos[0].telefono] + [producto[0]]);
            console.log(datos,"infomacion")
            pdf.save('Prueba.pdf');
    
                console.log("datos",datos.nombrePedido.value)
                console.log(recibo)
        
      })
      
    }
    

   /*  const persona = computed(()=>{ */
     const producto = ref([])
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/carro.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        producto.value.push({
          id: id,
          titulo: res.data[id].titulo,
          precio: res.data[id].precio,
          cantidad: res.data[id].cantidad
        })
      }
    })
    .catch(error=> console.log(error))
   

    

    return{hora, fecha,entrega,pago, telefono,nombrePedido,generaRecibo, producto} 
}
    
}
</script>

<style>

</style>