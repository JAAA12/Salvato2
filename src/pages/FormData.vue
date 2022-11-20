<template>
  <div>
    <h3>Registrarse</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Cliente</h5>

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
    const nombre = ref("")
    const email = ref("")
    const password = ref("")
    
    function addPersona(){
      if(nombre.value != '' && email.value != ""){
        const persona = {
          nombre:nombre.value,
          email:email.value,
          password:password.value
        }
        /* store.dispatch("addPersona", persona);
        router.push('/print') */
        axios.post('https://databasejaa-default-rtdb.firebaseio.com/persona.json',persona)
        .then(res=> console.log(res))
        .catch(error=> console.log(error))
        alert('Registro exitoso')
      }
    }

    return{nombre, email, password, addPersona}
  }
  // data() {
  //   return {
  //     nombre: "",
  //     email: "",
  //     aporte: "",
  //   };
  // },
  // methods: {
  //   addPersona() {
  //     if (this.nombre != "" && this.email != "") {
  //       const persona = {
  //         nombre: this.nombre,
  //         email: this.email,
  //         aporte: this.aporte,
  //       };
  //       this.$store.dispatch("addPersona", persona);
  //       this.$router.push('/print')
  //     }
  //   },
  // },
};
</script>

<style>
.btn{
  background-color: #b53131;
  color: black;
}
h3{
  margin-left: 30px;
}
</style>