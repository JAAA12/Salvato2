<template>
  <div>
    <h3>Registro</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Cliente</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre "
            type="text"
            class="form-control"
            placeholder="Nombre"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">E-mail</label>
          <input
            v-model="email "
            type="email"
            class="form-control"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Contraseña"
          />
        </div>
        <button class="btn" @click="addPersona">
          Registrarse
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
    let encontro=0
    const unica= []
    const nombre = ref("")
    const email  = ref("")
    const password = ref("")
    
    function addPersona(){
      if(nombre.value != '' && email.value != ""){
        const persona = {
          nombre :nombre .value,
          email :email .value,
          password :password .value
        }
        axios.get('https://databasejaa-default-rtdb.firebaseio.com/persona.json')
      .then(res=>{
        console.log(res);
        console.log(nombre .value,"Nombre")
        console.log(password .value,"clave")
      for(const id in res.data){
        console.log(res.data[id].nombre, 'lo que necesito')
        console.log(nombre.value)
        if(res.data[id].nombre  === nombre.value){
          console.log("Hola",unica);
        encontro=1;
        }
        
      }
      console.log(encontro,"Encontro")
      console.log(unica.length,"Unica")
      if(encontro == 1){
          alert("esta registrado")
          encontro=0
        }else{
          unica.push({
              nombre: nombre.value,
              password: password.value,
            })
            this.nombre="";
            this.email="";
            this.password="";
          axios.post('https://databasejaa-default-rtdb.firebaseio.com/persona.json',persona)
     .then(res=> console.log(res))
     .catch(error=> console.log(error))
     alert('Registro exitoso')
     }
        unica.splice(0,1);
        console.log("PruebaUsuarios",unica);
        
      }) 
      
      .catch(error => console.log(error))
        /* store.dispatch("addPersona", persona);
        router.push('/print') */
        console.log("leer")
      }
      
  }
          
  return{nombre,password,unica,email,addPersona};
    }

};
</script>

<style>
.btn{
  background-color: #914f12;
  color: black;
  margin-right: 20px;
}
h3{
  margin-left: 30px;
}
</style>