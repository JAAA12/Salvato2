<template>
    <nav class="navbar navbar-light nav-pills" style="background-color:  rgb(133, 7, 7)">
      <div class="container">
        <ul class="nav">
        <li class="nav-item">
            <img src="../assets/Logosalvato.png" class="logosalvato">
          </li>
          <li class="nav-item">
            <router-link to="/productos" class="nav-link" active-class="active"
              >Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactanos" class="nav-link" active-class="active"
              >Ubicación</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros" class="nav-link" active-class="active"
              >Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros" class="nav-link" active-class="active"
              >Cerrar Sesión</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  <style>
  .nav-pills .nav-link.active,
  .show>.nav-pills .nav-link{
      background: #b53131;
      color: black; 
  }
  .logosalvato{
    width: 60px;
    height:60px
  }
  .logoinicio{
    width: 30px;
    height:30px
  }
  </style>