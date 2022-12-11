<template>
  <div>
    <h3>Registro nuevos productos</h3>

    <div id="cuadro2" class="card">
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
        <button style="color:white" class="btn" @click="addProducto">
          Actualizar
        </button>
        <router-link to="/login" style="color:white" class="btn" active-class="active"
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
    let cantidad= 0
    const total=1
    
    function addProducto(){
      
      
      if(nombreProducto.value != '' && precio.value != ""){
        axios.get('https://databasejaa-default-rtdb.firebaseio.com/productos.json')
      .then(res=>{
      for(const id in res.data){
        cantidad=cantidad+1   
         
      }
      console.log(cantidad,"cantidad")
      const persona = {
          id:cantidad,
          nombreProducto :nombreProducto .value,
          precio :precio .value,
          descripcion :descripcion .value,
        }
        axios.get('https://databasejaa-default-rtdb.firebaseio.com/productos.json')
      .then(res=>{
        
      for(const id in res.data){
     

        if(res.data[id].nombreProducto  === nombreProducto.value){
          
        encontroproducto=1;
        }
        
      }
      console.log(encontroproducto,"Encontro")
      console.log(pro.length,"pro")
      if(encontroproducto === 1){
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
    })
        
      }
      
  }
          
  return{nombreProducto,descripcion,pro,precio,addProducto,cantidad,total};
    }

};
</script>

<style>
.btn{
  background-color: #923a17;
  margin-right: 20px;
  margin:5px;
  font-family: 'Times New Roman', Times, serif;
}
.btn:hover{
  background-color: #e7a429;
}
h3{
  margin-left: 30px;
}
.card-body{
  width: 600px;
  height: 400px;
}
#cuadro2{
  width: 600px;
  height: 400px;
}
</style>