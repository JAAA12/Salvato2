<template>

  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->
  
      <!-- Icon -->
      <div class="logoImg">
        <img src="@/assets/Logosalvato.png" id="icon" alt="User Icon" />
      </div>
  
      <!-- Login Form -->
      <form v-on:submit.prevent="login">
      
          <select  name="LeaveType" class="form-control" id="perfil" v-model="key" >
              <option value="" disabled>Seleccione Rol</option>
              <option :value="true">Cliente</option>
              <option :value="false">Administrador</option>
          </select>
          <h1 v-if="key">Hola</h1>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="nombre">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
  <!--       <input type="validar" id="validar" class="fadeIn third" name="login" placeholder="Validar" v-model="password">
   -->      <button class="btn ingresar" v-on:click="onchange()" @click="buscarUsuario">
            Ingresar
          </button>
      </form>
  
      <!-- Remind Passowrd -->
      <div id="formFooter">
      <p class="registro">¿No tienes cuenta? <router-link to="/" id="link" class="nav-link" active-class="active"
              ><b>Registrarse</b></router-link
            ></p>
        <router-link to="/recuperacion" id="link" class="nav-link" active-class="active"
              ><b>Recuperar contraseña</b></router-link>
      </div>
  
    </div>
  </div>
    
  </template>
  
  
  
  <script>
  /* eslint-disable */
  import {ref} from 'vue' //ref crea un objeto
  import axios from 'axios'
  import {useRouter} from 'vue-router'
  
  
  export default {
    name: 'LoginRegistro',
      props:{
      mainStyle: String,
      inputStyle: String,
      },
      
    setup(){
      const router=useRouter()
      const usuarios = []
      const nombre = ref("")
      const password = ref("")
      
      function buscarUsuario(){
        
          /* store.dispatch("addPersona", persona);
          router.push('/print') */
          axios.get('https://databasejaa-default-rtdb.firebaseio.com/persona.json')
          .then(res=>{
            console.log(res);
            console.log(nombre.value,"Nombre")
            console.log(password.value,"clave")
          for(const id in res.data){
  
            if(res.data[id].nombre === nombre.value && res.data[id].password === password.value){
              console.log("Hola",usuarios);
              usuarios.push({
                id: id,
                nombre: res.data[id].nombre,
                password: res.data[id].password,
              })
            }
          }
          console.log("PruebaUsuarios",usuarios);
          if(usuarios.length >= 1){
            alert("Usuario y contraseña correctos")
            router.push("/inicio")
            
          }else{
            alert("Usuario y contaseña incorrecto")
          }
          usuarios.splice(0,1);
          console.log("PruebaUsuarios",usuarios);
          }) 
          .catch(error => console.log(error))
          
      }
      
  return{nombre,password,usuarios,buscarUsuario};
    
  },
  data(){
        return{
          key: "",
          valornumero:this.$store.state.perfil,
          mostrarN:this.$store.state.mostrar,
        }
      
    },
    
    methods: {
      onchange: function() {
        console.log(this.key,"key")
        console.log(this.mostrarN,"mostrar")
        console.log(this.valornumero,"mostrarnum")
        if(this.key==true){
          console.log(this.key)
          this.$store.state.perfil=true,
          this.$store.state.mostrar=false,
          console.log(this.$store.state.mostrar,"admi")
          
        }
        else{
          console.log(this.key)
          this.$store.state.perfil=false,
          this.$store.state.mostrar=true,
          console.log(this.$store.state.mostrar,"admifalse")
          this.$forceUpdate();
        }
      },
    }
  };
    
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
  
  </script>
  
  
  
  <style>
  .logoImg{
    margin:20px;
  }
  .ingresar{
    margin: 10px;
  }
  .registro{
    margin-bottom:5px;
    
  }
  #link{
    color: black;
  }
  #link:hover{
    color :rgb(151, 29, 29);
    }
  #perfil{
     background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    height:58px;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
  }
  
  #formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
  }
  
  #formFooter {
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 20px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
  }
  
  
  
  /* TABS */
  
  /*h2.inactive {
    color: #cccccc;
  }
  
  h2.active {
    color: #0d0d0d;
    border-bottom: 2px solid #5fbae9;
  }*/
  
  
  
  /* FORM TYPOGRAPHY*/
  
  input[type=button], input[type=submit], input[type=reset]  {
    background-color: #56baed;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  
  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
    background-color: #39ace7;
  }
  
  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
  
  input[type=text] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }
  
  input[type=text]:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }
  
  input[type=text]:placeholder {
    color: #cccccc;
  }
  input[type=password] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }
  
  input[type=password]:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }
  
  input[type=password]:placeholder {
    color: #cccccc;
  }
  
  
  
  /* ANIMATIONS */
  
  /* Simple CSS3 Fade-in-down Animation */
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  
  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  
  .fadeIn {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;
  
    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;
  
    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
  }
  
  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  
  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  
  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  
  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }
  
  /* Simple CSS3 Fade-in Animation */
  .underlineHover:after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
  }
  
  .underlineHover:hover {
    color: #0d0d0d;
  }
  
  .underlineHover:hover:after{
    width: 100%;
  }
  
  
  
  /* OTHERS */
  
  *:focus {
      outline: none;
  } 
  
  #icon {
    width:10%;
  }
  
  
  </style>