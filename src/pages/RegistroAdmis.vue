<template>
    <div>
      <h3>Registro</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos Administradores</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Nombre"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">E-mail</label>
            <input
              v-model="email"
              type="text"
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
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  export default {
    setup(){
      const storeAdmi = useStore()
      const routerAdmi = useRouter()
      const nombreAdmi = ref("")
      const emailAdmi = ref("")
      const passwordAdmi = ref("")
      
      function addPersonaAdmi(){
        if(nombreAdmi.value != '' && emailAdmi.value != ""){
          const Admi = {
            nombreAdmi:nombreAdmi.value,
            emailAdmi:emailAdmi.value,
            passwordAdmi:passwordAdmi.value
          }
          axios.post('https://databasejaa-default-rtdb.firebaseio.com/persona.json',Admi)
          .then(res=> console.log(res))
          .catch(error=> console.log(error))
          alert('Registro exitoso')
        }
      }
  
      return{nombreAdmi, emailAdmi, passwordAdmi, addPersonaAdmi}
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