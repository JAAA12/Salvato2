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
      <div class="cliente" v-if="(key)">
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="nombre">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
      </div>
      <div class="Administrador" v-if="(key===false)" >
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="nombreAdmi">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="passwordAdmi">
      </div>
  <!--       <input type="validar" id="validar" class="fadeIn third" name="login" placeholder="Validar" v-model="password">
   -->      <button class="btnIngresar" @click="buscarUsuario">
            Ingresar
          </button>
      </form>
  
      <!-- Remind Passowrd -->
      <div id="formFooter">
      <p class="registro">¿No tienes cuenta? <router-link to="/registro" id="enla" class="nav-link" active-class="active"
              ><b>Registrarse</b></router-link
            ></p>
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
      
    setup()
    {
      const router=useRouter()
      const usuarios = []
      const nombre = ref("")
      const password = ref("")
      /*admi*/
     /* const storeAdmi = useStore()
      const routerAdmi = useRouter()*/
      const admis=[]
      const nombreAdmi = ref("")
      /*const emailAdmi = ref("")*/
      const passwordAdmi = ref("")
      return{nombre,password,usuarios,nombreAdmi,passwordAdmi,admis,router};
    },

  data()
  {
    return{
      key: "",
      valornumero:this.$store.state.perfil,
      mostrarN:this.$store.state.mostrar,
    }
  },
    
    methods: {
      onchange: function() 
      {
        console.log(this.key,"key")
        console.log(this.mostrarN,"mostrar")
        console.log(this.valornumero,"mostrarnum")
        if(this.key===true)
        {
          console.log(this.key)
          this.$store.state.perfil=true,
          this.$store.state.mostrar=false,
          this.$store.state.Nomostrar=true,
          console.log(this.$store.state.mostrar,"admi")
          
        }
        else
        {
          console.log(this.key)
          this.$store.state.perfil=false,
          this.$store.state.mostrar=true,
          this.$store.state.Nomostrar=false,
          console.log(this.$store.state.mostrar,"admifalse")
          this.$forceUpdate();
        }
      },
      buscarUsuario: function()
      {
        /* store.dispatch("addPersona", persona);
        router.push('/print') */
          console.log(this.key,"esta afuera")
        if(this.key===true)
          {
            console.log("key CLIENTE",this.key)
            axios.get('https://databasejaa-default-rtdb.firebaseio.com/persona.json')
            .then(res=>{
            console.log(res,"resusuario");
            console.log(this.nombre,"Nombre")
            console.log(this.password,"clave")
            for(const id in res.data)
            {
              if(res.data[id].nombre === this.nombre && res.data[id].password === this.password)
              {
                console.log("Hola",this.usuarios);
                this.usuarios.push
                ({
                  id: id,
                  nombre: res.data[id].nombre,
                  password: res.data[id].password,
                })
              }
            }
            console.log("PruebaUsuarios",this.usuarios);
            if(this.usuarios.length >= 1)
            {
              alert("Usuario y contraseña correctos")
              this.router.push("/")
              this.onchange()
            }
            else
            {
              alert("Usuario y contaseña incorrecto")
            }
            this.usuarios.splice(0,1);
            console.log("PruebaUsuarios",this.usuarios);
            }) 
            .catch(error => console.log(error))
          }/*cierre de if CLIENTE*/
        /*es Admi*/
        else
        {
          console.log("key ADMINISTRADOR",this.key)
          axios.get('https://databasejaa-default-rtdb.firebaseio.com/Admi.json')
          .then(resAdmi=>{
            console.log(resAdmi,"resadmi");
            console.log(this.nombreAdmi,"Nombre Admi")
            console.log(this.passwordAdmi,"clave Admi")
            for(const idAdmi in resAdmi.data)
            {

              if(resAdmi.data[idAdmi].nombreAdmi === this.nombreAdmi && resAdmi.data[idAdmi].passwordAdmi === this.passwordAdmi)
              {
                console.log("HolaAdmi",this.admis);
                this.admis.push
                ({
                  idAdmi: idAdmi,
                  nombreAdmi: resAdmi.data[idAdmi].nombreAdmi,
                  passwordAdmi: resAdmi.data[idAdmi].passwordAdmi,
                })
              }
            }
          console.log("PruebaAdmi",this.admis);
          if(this.admis.length >= 1)
          {
            alert("Admi y contraseña correctos")
            this.router.push("/") 
            this.onchange()
          }
          else
          {
            alert("Admi y contaseña incorrecto")
          }
          this.admis.splice(0,1);
          console.log("PruebaAdmi",this.admis);
          }) 
          .catch(error => console.log(error))
        }/*cierre de else ADMINITRADOR*/
      }/*cierre de FUNCIÓN*/
    }/*cierre de METHODS*/
  };/*cierre de EXPORTDEFAULT*/
    
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
 
  .btnIngresar{
    color:white;
    font-family: 'Times New Roman', Times, serif;
    margin: 5px;
    margin-top: 30px;
    height: 35px;
    width: 250px;
    text-align: center;
    border: 1px solid #8f4007;
    font-size: 18px;
    background-color: #8f4007;
    border-radius: 4px;
  border: 1px solid #ffffff;
  }
  .btnIngresar:hover{
    background-color: #e79600;
    color:black;
    text-decoration:none;
}
  .logoImg{
    margin:20px;
  }
  .ingresar{
    margin: 10px;
  }
  .registro{
    margin-bottom:5px;
    
  }
  #enla{
    color:rgb(0, 0, 0);
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
  }
  #enla:hover{
    color:rgb(163, 93, 14);
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
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
    margin-top: 50px;
    margin-bottom: 50px;
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