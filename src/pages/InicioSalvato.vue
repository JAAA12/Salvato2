<template>
    <!-- <div class='carrusel'>
         <div class="carrusel-img">
             <ul class="img-carrusel">
                 <li><img src="../assets/background2.jpg" alt="No cargó"></li>
                 <li><img src="../assets/background3.png" alt="No cargó"></li>
                 <li><img src="../assets/background4.png" alt="No cargó"></li>
                 <li><img src="../assets/background5.png" alt="No cargó"></li>
             </ul>
         </div>
     </div> -->
     <!-- <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/background5.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/background3.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/background4.png" class="d-block w-100">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
 
    <div class="contentItemsCarrusel">
        <div class="itemCarrusel" id="itemCarrusel-1" >
            <div class="tarjetaCarrusel" id="tarjetaCarrusel-1">
                <img src="../assets/background2.jpg">
            </div>
            <div class="flechasCarrusel" >
                <a href="#itemCarrusel-3">
                    <i class="fa-solid fa-chevron-left"></i>
                </a>
                <a href="#itemCarrusel-2">
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </div>
        <div class="itemCarrusel" id="itemCarrusel-2">
            <div class="tarjetaCarrusel" id="tarjetaCarrusel-2">
                <img src="../assets/background3.png">
            </div>
            <div class="flechasCarrusel">
                <a href="#itemCarrusel-1">
                    <i class="fa-solid fa-chevron-left"></i>
                </a>
                <a href="#itemCarrusel-3">
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </div>
        <div class="itemCarrusel" id="itemCarrusel-3">
            <div class="tarjetaCarrusel" id="tarjetaCarrusel-3">
                <img src="../assets/background4.png">
            </div>
            <div class="flechasCarrusel">
                <a href="#itemCarrusel-2">
                    <i class="fa-solid fa-chevron-left"></i>
                </a>
                <a href="#itemCarrusel-1">
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </div>

    <!--  <div class="barra">
         <div class="iconopan">
             <p style="color:white; font-family:'Times New Roman', Times, serif ; font-size:20px">Panes <br>
             Deliciosos y frescos</p>
         </div>
         <div class="iconotorta">
             <p style="color:white; font-family:'Times New Roman', Times, serif ; font-size:20px">Tortas <br>Suaves y saludables</p>
         </div>
         <div class="iconopostre">
             <p style="color:white; font-family:'Times New Roman', Times, serif ; font-size:20px">Detalles <br>
             Para repartir amor </p>
         </div>
     </div> -->
 
     <div id="lista-pro" class="container22">
         <h1 id="titulo2" class="titulo2"><b>"Se requiere una alimentación saludable para tener una salud envidiable"</b></h1>
         <h2>Productos</h2>
         <div class="row">
                     <div class="four columns">
                         <div class="carta" id="salvatos">
                                 <img src="../assets/pan_italianisimo.jpg" class="imagen-curso u-full-width">
                             <div class="info-carta">
                                     <h4>Panes</h4>
                                     <p>Variedad de panes a base de harina de avena, harina integral, harina de chia y linaza.
                                     </p>        
                             </div>
                         </div>
                     </div>
             
                     <div class="four columns">
                         <div class="carta">
                                 <img src="../assets/salvato_chocomani.jpg" class="imagen-curso u-full-width">
                             <div class="info-carta">
                                 <h4>Salvatos</h4>
                                 <p>Panes a base de harina de avena y arroz, de diferente y deliciosos sabores.</p>
                             </div>
                         </div> <!--.card-->
                     </div>
                
                     <div class="four columns">
                         <div class="carta">
                             <img src="../assets/torta_red.jpg" class="imagen-curso u-full-width">
                             <div class="info-carta">
                                 <h4>Tortas</h4>
                                 <p>Tortas a base de harina de arroz y harina de avena, que te hará alucinar.</p>
                             </div>
                         </div> <!--.card-->
                     </div>
                     
         </div><!--cierre-->
                 <div class="row">
                     <div class="four columns">
                         <div class="carta" id="salvatos">
                                 <img src="../assets/Cupcakes.jpeg" class="imagen-curso u-full-width">
                             <div class="info-carta">
                                 <h4>Cupcakes</h4>
                                 <p>Disfruta estos deliciosos muffins saludables de diferentes sabores.
                                 </p>        
                             </div>
                         </div>
                     </div>
             
                     <div class="four columns">
                         <div class="carta">
                                 <img src="../assets/jarcake_brownie.jpg" class="imagen-curso u-full-width">
                             <div class="info-carta">
                                 <h4>Jarcakes</h4>
                                 <p>Torta del sabor que desees en un jar para esos pequeños antojos.</p>
                             </div>
                         </div> <!--.card-->
                     </div>
                
                     <div class="four columns">
                         <div class="carta">
                             <img src="../assets/trocitos.jpg" class="imagen-curso u-full-width">
                             <div class="info-carta">
                                 <h4>Otros</h4>
                                 <p>También te ofrecemos trocitos de guayaba, alfajoles, brownies y harinas.</p>
                             </div>
                         </div> <!--.card-->
                     </div>
                 </div><!--cierre-->
             </div>
         
             <div class="div" style="text-align: center;">
                 <h2 style="display: flex; justify-content: center;">Puntos de distribución</h2>
                 <img src="../assets/holistica.png" style="display: block; margin: 0 auto;" alt="No cargó" class="dis">
             </div>
                 
        
             
 
 </template>
 
 <script>
 
 </script>
 
 <!-- arriba, derecha, abajo, izquierda -->
 <style>
 .tarjetaCarrusel img{
    width:100%;
    height: 100%;
 }

 i{
    color: white;
 }
 .contentItemsCarrusel{
    height: 600px;
    overflow: hidden;
 }
 @media screen and (max-width: 896px) {
    .contentItemsCarrusel{
        height: 250px;
    }
  }
 .itemCarrusel{
    height: 100%;
    position: relative;
   
 }
 .tarjetaCarrusel{
    height: 100%;
 }
 .flechasCarrusel{
    position: absolute;
    top:0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
 }
 #tarjetaCarrusel-1{
    background-color: chartreuse;
 }
 #tarjetaCarrusel-2{
    background-color: rgb(0, 229, 255);
 }
 #tarjetaCarrusel-3{
    background-color: rgb(255, 0, 247);
 }
 .container22{
     padding: 10px;
 }
 .info1, .info2, .info3,.info4,.info5{
     color:white;
     font-family:georgia;
 }
 .inicio{
     margin: 0;
     height: 1000px;
     width: 1283px;
     font-family: georgia;
 }
 
 
 .imglogo{
 width: 66.6px;
 height: 66.6px;
 margin-left: 80px;
 }
 
 .menu{
     padding: 20px 40px 10px 200px;
     font-size: 20px;
 }
 
 .submenu img{
     width: 40px;
     height: 40px;
 }
 
 a{
     text-decoration: none;
     color: black;
 }
 
 ul{
     list-style: none;
     display: flex;
     padding: 0;
 }
 /*barra*/
 .barra {
     
     background: #8f4007;; /* Old browsers */
     background: -moz-linear-gradient(left, #8f4007 7%, #8f4007 100%); /* FF3.6-15 */
     background: -webkit-linear-gradient(left, #8f4007 2%,#8f4007 100%); /* Chrome10-25,Safari5.1-6 */
     background: linear-gradient(to right, #8f4007 1%,#8f4007  100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#741d51', endColorstr='#e44e52',GradientType=1 ); /* IE6-9 */
     display: flex;
     justify-content:center;
     /*width:1343px;*/
 }
 .barra p{
     font-family:'times' ;
 }
 .iconopan{
     background-image:url(../assets/pancito.png);
     background-repeat: no-repeat;
     background-position: left;
     background-size: 35px 35px;
     margin: 10px 40px 10px 40px;
     margin-top: 30px;
     padding-left: 50px;
     text-align: center;
 }
 
 .iconotorta{
     background-image:url(../assets/rebanada.png);
     background-repeat: no-repeat;
     background-position: left;
     background-size: 48px 48px;
     margin: 10px 40px 10px 40px;
     margin-top: 30px;
     padding-left: 50px;
     text-align: center;
 }
 .iconopostre{
     background-image:url(../assets/postre2.png);
     background-repeat: no-repeat;
     background-position: left;
     background-size: 35px 35px;
     margin: 10px 40px 10px 40px;
     margin-top: 30px;
     padding-left: 50px;
     text-align: center;
 }
  /*carrito*/
 .titulo2{
     font-family: Baskerville Old Face;
     font-size: 3rem;
     text-align:center;
     align-content:center;
     margin: 100px 0 90px 0;
 }
 .submenu{
     margin-left: 20px;
     position: relative;
     padding: 20px 40px 10px 60px;
 }
   
 .submenu #carro{
     display: none;
 }
 
 .submenu:hover #carro{
     display:block;
     position: absolute;
     right:0;
     top:100%;
     z-index: 1;
     background-color: white;
     padding: 20px;
     min-height: 400px;
     min-width: 300px;
 }
 
 /*mostrador*/
 .carta img{
     width:300px;
     height:300px;
 }
 
 .info-carta img{
     width: 82px;
     height:13px;
     font-family: 'Georgia';
 }
 .info-carta{
     background: white;
     padding: 10px 20px 0 20px;
     width: 300px;
     height: 200px;
     font-size: 16px;
 }
 .info-carta h4{
     margin-bottom: 5px;
     font-size:20px;
 }
 
 .carta{
     padding:  20px 20px 0 20px;
 }
 /* .row1{
     display: flex;
     margin: 10px 118px 0 145px;
 } */
 /*Distribución*/
 .dis{
     height:300px;
     width:400px;
 }
 /*carrusel*/ 
 
 /* .carrusel{
     width: 100%;
  }*/
  /*
  .carrusel-img{
     overflow: hidden;
 }
 */
 /*
 .carrusel ul{
 /*    display: flex;
     width: 9000px;*/
     /*animation: cambio 15s infinite;  
     padding: 0px;
 }
 
 /*.carrusel img{
     max-width: 100%;
     height: 800px;   
     /*display: flex;
 }*/
 
 
 /*@keyframes cambio{
     0% {margin-left: 0;}
     20% {margin-left: 0;}
 
     25% {margin-left: -100%;}
     45% {margin-left: -100%;}
 
     50% {margin-left: -200%;}
     70% {margin-left: -200%;}
 
     75% {margin-left: -300%;}
     100% {margin-left: -300%;}
 }
 
 /*@media (min-width: 1343px){
     .encabezado{
     width: 1343px;
 }*/
/* .carrusel{
     width: 1200px;
  }
  .carrusel img{
     width: 1200px;
     height: 543px;
     padding-left:50px;  
 }
 /*carrusel*/ 
 
 /* .carrusel{
     width: 1343px;
  }
 .carrusel-img{
     overflow: hidden;
 }
 
 .carrusel ul{
     display: flex;
     width: 4000cm;
     animation: cambio 8s infinite;  
     padding: 0
 }
 
 .carrusel img{
     width: 1200px;
     height: 550px;   
 }
 
 
 @keyframes cambio{
     0% {margin-left: 0;}
     20% {margin-left: 0;}
 
     25% {margin-left: -100%;}
     45% {margin-left: -100%;}
 
     50% {margin-left: -200%;}
     70% {margin-left: -200%;}
 
     75% {margin-left: -300%;}
     100% {margin-left: -300%;}
 }
 */
 </style>
 <!--  -->