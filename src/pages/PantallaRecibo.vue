<template>
<div id="recibo" src="js/jspdf.min.js">
<div id="carro">
                                    
                                <table id="lista-carrito" class="u-full-width">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(carro, i) in producto" :key="i" >
                                    <td> {{producto}} </td>
                                    <td> {{producto.precio}} </td>
                                    <td> {{producto.cantidad}} </td>
                                    
                                    <td> <a href= "#" class="borrar-curso" data-id="${producto.id}"/>X</td>
                                    </tbody>
                                    
                                </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                                    <li class="nav-item">
                                        <router-link to="/pantallaRecibo" class="nav-link" active-class="active" id="grecibo">
                                            Generar Recibo
                                        </router-link>
                                      </li>
                            </div>
    <h1 class="tituloDetalles">Detalles Del Pedido</h1>
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
            <option value="Transferencia">Transferencia</option>
            <option value="Efectivo">Efectivo</option>
        </select>
    </div>
    <div class="form-group">
        <label for="sele">Seleccione Modo De Entrega</label>
        <select name="form" id="metodo-entrega" v-model="entrega">
            <option value="Domicilio">Domicilio</option>
            <option value="Tienda">Se adquiere en punto salvato</option>
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
    const producto = ref([])
    
    
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
        var logo = new Image()
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

            logo.src = '../assets/Logosalvato.png'

            pdf.text(10,10, 'Nombre del Cliente: ' + [datos[0].nombrePedido] + '\n' +
            'Teléfono: ' + [datos[0].telefono] + '\n' +
            'Fecha de Entrega: ' + [datos[0].fecha] + '\n'+
            'Hora de Entrega: ' + [datos[0].hora] + '\n' +
            'Método de Pago: ' + [datos[0].pago] + '\n' + 
            'Método de Entrega: ' + [datos[0].entrega],
            {align:'left',lineHeightFactor: 2,maxWidth:150});

            console.log(datos,"infomacion")
            pdf.setFontSize(70)
            pdf.setFont('times new roman')

            pdf.save('Prueba.pdf');
    
                console.log("datos",datos.nombrePedido.value)
                console.log(recibo)    
      })
    }  
    
    
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/carro.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        producto.value.push({
          /* id: res.data.object, */
          id: res.data[id].data[id].titulo,
          titulo: res.data
         
        })
        console.log(producto)
      }
    })
    .catch(error=> console.log(error))
    
   

    return{hora, fecha,entrega,pago, telefono,nombrePedido,generaRecibo, producto} 
},

 
    
}
</script>

<style>
li{
  list-style: none;
}
#recibo{
  margin-left: 50px;
}
.tituloDetalles{
  margin-top: 40px;
}
</style> 