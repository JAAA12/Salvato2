<template>
  <div>
    <footer id="footer" class="footer">
      <div class="container3">
          <div class="colu">
                  <div class="four columns">
                          <nav id="principal" class="menu">
                              <a class="enlace" href="#"><b>Nombre Empresa: </b><br> Pastelería Salvato<br></a>
                              <a class="enlace" href="#"><b>Dirección: </b><br> Cra 35 #35-10 <br>Bucaramanga<br></a>
                              
                              <a class="enlace" href="#"><b>Correo: </b><br> salvato@gmail.com<br></a>
                          </nav>
                  </div>
                  
                  <nav class="sociales">
                
                          <li>
                              <a href="https://www.facebook.com/salvato.bga" target="_blank">
                                  <img src="../assets/imgface.png" width="50" height="50">
                              </a>
                          </li>
                          <li>
                              <a href="https://www.instagram.com/salvato_bga/" target="_blank">
                                  <img src="../assets/imginsta.png" width="50" height="50">
                              </a>
                          </li>
                          <li>
                              <a href="https://api.whatsapp.com/message/MY3HG5ZB6U47C1?autoload=1&app_absent=0" target="_blank">
                                  <img src="../assets/imgwhatsapp.png" width="50" height="50">
                              </a>
                          </li>
                     
                  </nav>
                  <div class="four columns">
                    <nav id="secundaria" class="menu">
                        <a class="enlace" href="#"><b>Abierto:</b>
                          <br> Lunes a Sábado <br> 8am-6pm</a>
                        <a class="enlace" href="#"><b>Lugares:</b> <br> Pedidos en área <br> 
                           Metropolitana de Bucaramanga<br></a>
                    </nav>
            </div>
          </div>
      </div>
  </footer>
  </div>
</template>

<style>

.footer {
  background-color:	rgb(204, 112, 37);
  border-top: 	rgb(204, 112, 37);/*utilizan para establecer de forma abreviada el valor de una o más propiedades individuales.*/
  padding-top: 3rem;/*establece el espacio de relleno requerido en la parte superior del elemento*/
  bottom:-100%;/*especifica parte de la posición de un elemento (posicionado - es decir, con una posición determinada por código).*/
  width: 100%;/*especifica la anchura del area de contenido de un elemento.*/
  box-shadow: 0px -18px 36px -16px rgba(0,0,0,0.52);/*permite proyectar una sombra difuminada desde el marco de casi cualquier elemento.*/
  padding: 3rem 0;/*establece el espacio de relleno requerido por todos los lados de un elemento.*/
  margin-top: 40px;
}
.footer .contenedor {
  display: grid;/*especifica si un elemento es tratado como block or inline element y el diseño usado por sus hijos, como flow layout(Diseño de Flujo), grid(Cuadricula) o flex(Flexible). Formalmente la propiedad display establece los tipos de visualización interna y externa de un elemento.*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );/*define el nombre de las líneas y las funciones de tamaño de línea de grid columns.*/
  grid-gap: 1rem;/*nos permite determinar los espaciados entre los elementos.*/
}
.footer .container3 {
  padding: 2px;
}

.footer #principal a{
  color: rgb(255, 255, 255);
  font-family: 'Times';
  text-decoration: none;
  display: block;
  padding-top: .5rem;
  text-align: center;
  margin-right:150px;
}

.footer #secundaria a{
  color: rgb(255, 255, 255);
  font-family: 'Times';
  text-decoration: none;
  display: block;
  padding-top: .5rem;
  text-align: center;
  margin-left:150px;
}

.footer #principal a:hover 
{ 
  color: #000000; 
} 

.footer #secundaria a:hover 
{ 
  color: #000000; 
}

.sociales li {
  display: flex;
  margin:20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: flex-end;
  /* justify-content: center;
  justify-content: space-around; */
  /* justify-content: space-between; */
  flex:1 0 auto;
  list-style: none;
}
.sociales ul li {
  margin-right: 1rem;
}
.sociales ul li:last-of-type {
  margin-right: 0;
}

.sociales ul li a {
  text-decoration: none;
  padding: 2px 5px;
}

.sociales ul li span{
  display: none;
}

footer,
menu,
nav
{
  display: block;
}

.colu {
  display: flex;
  margin: 20px 20px 0px 100px;
}
.menu {
  padding: 0px 45px 0px 0px;
  padding-left: 50px;
  font-size: 20px;
}
/* Larger than mobile */
@media (min-width: 400px) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {}

/* Larger than tablet */
@media (min-width: 750px) {}

/* Larger than desktop */
@media (min-width: 1000px) {}

/* Larger than Desktop HD */
@media (min-width: 1200px) {}
</style>