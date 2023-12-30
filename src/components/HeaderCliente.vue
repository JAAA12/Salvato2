<template>
  <nav id="barraHeader" class="navbar navbar-light nav-pills" style="background-color:  rgb(204, 112, 37)">
    <div class="container">
        <img src="../assets/Logosalvato.png" class="logosalvato">
      <div class="enlaces">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" id="navegar" class="nav-link" active-class="active" 
            >Inicio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/productos" id="navegar" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contactanos" id="navegar" v-if="Noverificar" class="nav-link" active-class="active"
            >Ubicación</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/nosotros" id="navegar" v-if="Noverificar" class="nav-link" active-class="active"
            >Nosotros</router-link
          >
        </li>
         
         <li class="nav-item">
          <router-link to="/registroAdmis" id="navegar" v-if="verificar" class="nav-link" active-class="active"
            >Registro Administrador</router-link
          >
        </li>
         <li class="nav-item">
          <router-link to="/pagos"  id="navegar" v-if="verificar" class="nav-link" active-class="active"
            >Pagos</router-link
          >
        </li>  
        <li class="nav-item">
          <router-link to="/registroProductos" id="navegar" v-if="verificar" class="nav-link" active-class="active"
            >Registrar Productos</router-link
          >
        </li> 
        <li class="nav-item">
          <router-link to="/login" id="navegar" class="nav-link" active-class="active"
            ><img src="../assets/logoinicio.webp" class="logoinicio"></router-link
          > 
          </li>
      </ul>
    </div>
    </div>
  </nav>
</template>


<script>

export default {
  data(){
    return{
        valornumero:this.$store.state.perfil,
        mostrarN:this.$store.state.mostrar,
        Nomostrar:this.$store.state.Nomostrar,
    }
  },
  computed: {
     verificar(){
      return this.$store.state.mostrar;
    },
    Noverificar(){
      return this.$store.state.Nomostrar;
    }
  },
  mounted(){
    console.log(this.mostrarN,"mostrarrrr")
    this.$forceUpdate();
  }
  
};

</script>


<style>
#barraHeader{
  margin:0px;
}
.navbar {
  font-family: 'Times New Roman';
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: .5rem 1rem;
  margin:0px;
}
.container{
  font-family: 'Times New Roman';
  margin-bottom:0px;
  margin-top:0px;
  /*margin:0px;
  padding: 0px;
  width: 100%;*/
}
.nav-link{
  color:white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
}
.nav-pills #navegar.active,
.show>.nav-pills #navegar{
    background: 	#BD5724;
    text-decoration:none;
}
#navegar:hover{
  background: 	#bd572498;
  color:aliceblue;
}
.logosalvato{
  width: 60px;
 height:60px;
}
.logoinicio{
  width: 30px;
  height:30px;
}
/* Diseño para celulares */
/*#columna1, #columna2, #columna3 {
	float:none;
	width:100%;
}

/* Diseño para tabletas */ 
/*@media screen and (min-width: 800px) {
	#columna1, #columna2 {
		float:left;
		width:50%;
	}
}

/* Diseño para PC */ 
/*@media screen and (min-width: 1025px) {
	#columna1, #columna2, #columna3 {
	float:left;
	width:33%;
}
}*/
</style>