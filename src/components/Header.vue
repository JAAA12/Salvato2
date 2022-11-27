<template>
  <nav class="navbar navbar-light nav-pills" style="background-color:  rgb(133, 7, 7)">
    <div class="container">
        <img src="../assets/Logosalvato.png" class="logosalvato">
      <div class="enlaces">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/inicio" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/productos" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contactanos" class="nav-link" active-class="active"
            >Ubicación</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/nosotros" class="nav-link" active-class="active"
            >Nosotros</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"
            ><img src="../assets/logoinicio.webp" class="logoinicio"></router-link
          >
        </li>
        <template>
        <li class="nav-item">
          <router-link to="/registroAdmis" class="nav-link" active-class="active"
            >Admi</router-link
          >
        </li>
           </template>     
      </ul>
    </div>
    </div>
  </nav>
</template>


<script>

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