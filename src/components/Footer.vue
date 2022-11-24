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
                                  <img src="img/imgface.png" width="50" height="50">
                              </a>
                          </li>
                          <li>
                              <a href="http://instagram.com" target="_blank">
                                  <img src="img/imginsta.png" width="50" height="50">
                              </a>
                          </li>
                          <li>
                              <a href="https://www.whatsapp.com/" target="_blank">
                                  <img src="img/imgwhatsapp.png" width="50" height="50">
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
  display: grid;/*especifica si un elemento es tratado como block or inline element y el diseño usado por sus hijos, como flow layout(Diseño de Flujo), grid(Cuadricula) o flex(Flexible). Formalmente la propiedad display establece los tipos de visualización interna y externa de un elemento.*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );/*define el nombre de las líneas y las funciones de tamaño de línea de grid columns.*/
  grid-gap: 1rem;/*nos permite determinar los espaciados entre los elementos.*/
}
.footer .container2 {
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
</style>