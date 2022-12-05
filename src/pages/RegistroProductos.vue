<template>
  <div>
    <h3>Registro nuevos productos</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Información Productos</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombreProducto "
            type="text"
            class="form-control"
            placeholder="Nombre"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Precio</label>
          <input
            v-model="precio "
            type="number"
            class="form-control"
            placeholder="Precio"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Descripción</label>
          <input
            v-model="descripcion"
            type="text"
            class="form-control"
            placeholder="Descripción del producto"
          />
        </div>
        <button class="btn" @click="addProducto">
          Actualizar
        </button>
        <router-link to="/login" class="btn" active-class="active"
            >Volver</router-link>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable */
import {ref} from 'vue' //ref crea un objeto
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from 'axios'
export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    let encontroproducto=0
    const pro= []
    const nombreProducto = ref("")
    const precio  = ref("")
    const descripcion = ref("")
    
    function addProducto(){
      if(nombreProducto.value != '' && precio.value != ""){
        const persona = {
          
          nombreProducto :nombreProducto .value,
          precio :precio .value,
          descripcion :descripcion .value,
        }
        axios.get('https://databasejaa-default-rtdb.firebaseio.com/productos.json')
      .then(res=>{
        console.log(res);
        console.log(nombreProducto .value,"Nombre")
        console.log(descripcion .value,"clave")
      for(const id in res.data){
        console.log(res.data[id].nombreProducto, 'lo que necesito')
        console.log(nombreProducto.value)
        if(res.data[id].nombreProducto  === nombreProducto.value){
          console.log("Hola",pro);
        encontroproducto=1;
        }
        
      }
      console.log(encontroproducto,"Encontro")
      console.log(pro.length,"pro")
      if(encontroproducto == 1){
          alert("esta registrado")
          encontroproducto=0
        }else{
          pro.push({
              nombreProducto: nombreProducto.value,
              descripcion: descripcion.value,
            })
            this.nombreProducto="";
            this.precio="";
            this.descripcion="";
          axios.post('https://databasejaa-default-rtdb.firebaseio.com/productos.json',persona)
     .then(res=> console.log(res))
     .catch(error=> console.log(error))
     alert('Registro exitoso')
     }
        pro.splice(0,1);
        console.log("PruebaUsuarios",pro);
        
      }) 
      
      .catch(error => console.log(error))
        /* store.dispatch("addPersona", persona);
        router.push('/print') */
        console.log("leer")
      }
      
  }
          
  return{nombreProducto,descripcion,pro,precio,addProducto};
    }

};
</script>

<style>
.btn{
  background-color: #b53131;
  color: black;
  margin-right: 20px;
}
h3{
  margin-left: 30px;
}
</style>