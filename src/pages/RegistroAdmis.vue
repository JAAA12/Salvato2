<template>
  <div>
    <h3 class="registroH3">Registro</h3>

    <div id="cuadro" class="card">
      <div class="card-body">
        <h5 class="card-title">Datos Administradores</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombreAdmi"
            type="text"
            class="form-control"
            placeholder="Nombre"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">E-mail</label>
          <input
            v-model="emailAdmi"
            type="text"
            class="form-control"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Contraseña</label>
          <input
            v-model="passwordAdmi"
            type="password"
            class="form-control"
            placeholder="Contraseña"
          />
        </div>
        <button style="color:white" class="btn" @click="addPersonaAdmi">
          Registrarse
        </button>
        <router-link to="/login" style="color:white" class="btn" active-class="active"
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
        axios.post('https://databasejaa-default-rtdb.firebaseio.com/Admi.json',Admi)
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
.registroH3{
  margin-top: 30px;
  margin-left: 580px;
  font-family: 'Times New Roman', Times, serif;
}
#cuadro{
  margin-left: 350px;
}
.btn{
  margin:5px;
  background-color: #923a17;
  color: white;
  margin-right: 20px;
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
  height: 300px;
}
#cuadro{
  width: 600px;
  height: 350px;
}
</style>