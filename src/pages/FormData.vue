<template>
  <div>
    <h3>A&ntilde;adir invitados</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Invitado</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Armando Agudelo"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">E-mail</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="aagudelo@elemail.com"
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
          A&ntilde;adir
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
</style>