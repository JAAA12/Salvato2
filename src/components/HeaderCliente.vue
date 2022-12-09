<template>
  <nav class="navbar navbar-light nav-pills" style="background-color:  rgb(133, 7, 7)">
    <div class="container">
        <img src="../assets/Logosalvato.png" class="logosalvato">
      <div class="enlaces">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" 
            >Inicio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/productos" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contactanos" v-if="Noverificar" class="nav-link" active-class="active"
            >Ubicación</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/nosotros" v-if="Noverificar" class="nav-link" active-class="active"
            >Nosotros</router-link
          >
        </li>
         
         <li class="nav-item">
          <router-link to="/registroAdmis" v-if="verificar" class="nav-link" active-class="active"
            >Registro Administrador</router-link
          >
        </li>
         <li class="nav-item">
          <router-link to="/pagos" v-if="verificar" class="nav-link" active-class="active"
            >Pagos</router-link
          >
        </li>  
        <li class="nav-item">
          <router-link to="/registroProductos" v-if="verificar" class="nav-link" active-class="active"
            >Registrar Productos</router-link
          >
        </li> 
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"
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
.container{
  margin:20px;
}
.nav-link{
  color:white;
  font-family: 'Times';
}
.nav-pills .nav-link.active,
.show>.nav-pills .nav-link{
    background: #b53131;
    text-decoration:none;
}
.nav-link:hover{
color :rgb(16, 14, 14);
}
.logosalvato{
  width: 60px;
 height:60px;
}
.logoinicio{
  width: 30px;
  height:30px;
}
</style>