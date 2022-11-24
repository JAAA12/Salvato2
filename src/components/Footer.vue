<template>
  <div>
    <footer id="footer" class="footer">
      <div class="container2">
          <div class="row">
                  <div class="four columns">
                          <nav id="principal" class="menu">
                              <a class="enlace" href="#">Para tu Negocio</a>
                              <a class="enlace" href="#">Conviertete en Instructor</a>
                              <a class="enlace" href="#">Aplicaciones Móviles</a>
                              <a class="enlace" href="#">Soporte</a>
                          </nav>
                  </div>
                  <div class="four columns">
                          <nav id="secundaria" class="menu">
                              <a class="enlace" href="#">Temas</a>
                              <a class="enlace" href="#">¿Quienes Somos?</a>
                              <a class="enlace" href="#">Empleo</a>
                              <a class="enlace" href="#">Blog</a>
                          </nav>
                  </div>
                  <nav class="sociales">
                      <ul>
                          <li>
                              <a href="http://facebook.com" target="_blank">
                                  <img src="../assets/imgface.png" width="50" height="50">
                              </a>
                          </li>
                          <li>
                              <a href="http://instagram.com" target="_blank">
                                  <img src="../assets/imginsta.png" width="50" height="50">
                              </a>
                          </li>
                          <li>
                              <a href="https://www.whatsapp.com/" target="_blank">
                                  <img src="../assets/imgwhatsapp.png" width="50" height="50">
                              </a>
                          </li>
                      </ul>
                  </nav>
          </div>
      </div>
  </footer>
  </div>
</template>

<style>

.footer {
  background-color:rgb(113, 13, 13);
  border-top: rgb(113, 13, 13);/*utilizan para establecer de forma abreviada el valor de una o más propiedades individuales.*/
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
.footer .container {
  padding: 1rem;
}

.footer #principal a{
  color: rgb(255, 255, 255);
  font-family: 'Times';
  text-decoration: none;
  display: block;
  padding-top: .5rem;
}

.footer #secundaria a{
  color: rgb(255, 255, 255);
  font-family: 'Times';
  text-decoration: none;
  display: block;
  padding-top: .5rem;
}


.footer #principal a:hover 
{ 
  color: #000000; 
} 

.footer #secundaria a:hover 
{ 
  color: #000000; 
}

.sociales ul {
  display: flex;
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