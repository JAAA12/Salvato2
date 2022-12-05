<template>
<div class='cuerpo'> 
<header class='encabezado'>
    <img class='imglogo' src="../assets/Logosalvato.png" alt="No carga">
 
         <div class="carrito two columns">
                <ul>
                    <li class="submenu">
                            <img src="../assets/carro.png" id="img-carrito">
                            <div id="carro">
                                    
                                <table id="lista-carrito" class="u-full-width">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                                    <li class="nav-item">
                                        <router-link to="/pantallaRecibo" class="nav-link" active-class="active" id="grecibo">
                                            Generar Recibo
                                        </router-link>
                                      </li>
                            </div>
                    </li>
                </ul>
            </div>
</header>

    <div class='carrusel'>
        <div class="carrusel-img">
            <ul class="img-carrusel">
                <li><img src="../assets/background2.jpg" alt="No cargó"></li>
                <li><img src="../assets/diapo3.png" alt="No cargó"></li>
                <li><img src="../assets/diapo2.png" alt="No cargó"></li>
                <li><img src="../assets/diapo1.png" alt="No cargó"></li>
            </ul> 
        </div>
   </div>
 <div id="lista-cursos" class="container">
        <h1 id="titulo1" class="titulo1">Nuestros Productos</h1>
        <h2>SALVATOS</h2>
         
        <div class="row" v-for="(productos, i) in productosVector" :key="i">
                    <div class="four columns">
                            <div class="card" id="salvatos">
                                <img src="../assets/salvato_clasico.jpg" class="imagen-curso u-full-width">
                                <div class="info-card">
                                    <h4 >{{productos.nombreProducto}}</h4>
                                    <p >{{productos.descripcion}}
                                    </p>
                                    <img src="../assets/estrellas.png">
                                    <p  class="precio">Regular<span class="u-pull-right ">${{productos.precio}}</span></p>
                                    <a @click="carrito" ref="agregar" href="#" class="u-full-width button-primary button input agregar-carrito"  data-id="2">Agregar Al Carrito</a>
                                </div>
                            </div>
                    </div>
                   
        </div>
        </div>
</div>

</template>



<script>
/* eslint-disable */
import axios from 'axios'
import {ref} from 'vue'
export default {
  setup(){
    const productosVector = ref([])
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/productos.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        productosVector.value.push({
          id: id,
          nombreProducto: res.data[id].nombreProducto,
          descripcion: res.data[id].descripcion,
          precio: res.data[id].precio,
        })
      }
    })
    .catch(error=> console.log(error))
    
    return {productosVector };
       
   
    },


    /* function agregarProducto(){
       const articuloCarrito = []
       console.log(articuloCarrito, 'muestra el vector')
    } */
  
 mounted(){
    const carrito = document.querySelector('#carro');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const totalCarrito = document.querySelector('#lista-carrito thead');
const vaciarCarritoBoton = document.querySelector('#vaciar-carrito');
const liProductos = document.querySelector('#lista-cursos');
console.log(totalCarrito);
let articuloCarrito = [];
let totalPedido = 0;
//agregar productos al carro
cargarEvento();
function cargarEvento(){
    console.log("Hola mundo")
    liProductos.addEventListener('click',agregarProductos);
    carrito.addEventListener('click',eliminarProducto);
    vaciarCarritoBoton.addEventListener('click',vaciarProducto);
}
function agregarProductos(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement
        leerDatos(productoSeleccionado);
    }
}

//vaciar carro
function vaciarProducto(){
    articuloCarrito=[];
    limpiarHTML();
}
//eliminar producto individual del carrito
function eliminarProducto(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const productoid = e.target.getAttribute('data-id');
        articuloCarrito = articuloCarrito.filter(producto =>producto.id !== productoid);
        llenarCarritoHTML();

    }
    
}
// objeto
function leerDatos(productos){
    const infoProductos = {
        imagen: productos.querySelector('img').src,
        titulo: productos.querySelector('h4').textContent,
        precio: productos.querySelector('.precio span').textContent,
        cantidad: 1,
        total: parseInt(productos.querySelector('.precio span').textContent.substr(1,productos.querySelector('.precio span').textContent.length)),
        id: productos.querySelector('a').getAttribute('data-id'),
    };

    //no repetir productos en el carrito
    console.log(infoProductos);
    const existe = articuloCarrito.some(producto =>producto.id === infoProductos.id);
    console.log("existe",existe);
    //validar si existe y aumentar cantidad y precio total
    if(existe){
        const cantidadTotal = articuloCarrito.map(producto =>{
            if(producto.id === infoProductos.id){
                console.log("precio",producto.precio.length);
                producto.cantidad++;
                producto.total = producto.cantidad * parseInt(producto.precio.substr(1,producto.precio.length));
                return producto;
            }else{
                return producto;
            }
        })
    }else{
        articuloCarrito = [...articuloCarrito,infoProductos];
    }

    //agregamos al vector
   
    console.log("vector",articuloCarrito);
    llenarCarritoHTML();
}


//tabla
function llenarCarritoHTML(){
    //borrar el HTML del contenedor
    limpiarHTML();
    limpiarHtmlTotal();
    totalPedido = 0;
 articuloCarrito.forEach(producto =>{
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td> <img src=${producto.imagen} width = "150%"> </td>
    <td> ${producto.titulo} </td>
    <td> ${producto.precio} </td>
    <td> ${producto.cantidad} </td>
    <td> ${producto.total} </td>
    <td> <a href= "#" class="borrar-curso" data-id="${producto.id}"> X </a> </td>
    `;

    totalPedido = totalPedido + producto.total;

    const filaTotal = document.createElement('tr');
    filaTotal.innerHTML = `
    <td> Total Pedido  ${totalPedido} </td>
    `;
    axios.post('https://databasejaa-default-rtdb.firebaseio.com/carro.json',producto)
        .then(res=> console.log(res))
        .catch(error=> console.log(error))
    contenedorCarrito.appendChild(fila);
    limpiarHtmlTotal();
    totalCarrito.appendChild(filaTotal);

 })
};


function limpiarHTML(){
    contenedorCarrito.innerHTML = '';
};
function limpiarHtmlTotal(){
    totalCarrito.innerHTML = '';
};

 },
 
};
  
</script>




<!-- arriba, derecha, abajo, izquierda -->
<style>
.cuerpo{
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: georgia;
}
.encabezado{
    display: flex;
    width: 100%;
    background: #f18d22;
    padding:0;
    
}
.imglogo{
width: 66.6px;
height: 66.6px;
margin-left: 80px;
}
/*store*/

.store{
    text-align: center;
    background: #8f0c07;
}
.store h1{
    color: black;
}
.store p{
    color: white;
    font-size: 10px;
    margin-bottom: 5px;
}

/*Carrito*/
.offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
.submenu img{
    width: 40px;
    height: 40px;
}
.submenu{
    margin-left: 20px;
    position: relative;
    padding: 20px 40px 10px 60px;
}
  
.submenu #carro{
    display: none;
    margin:20px;
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

#grecibo{
    margin: 5px;
    text-align: center;
    border: 1px solid #8f0c07;
    background-color: #8f0c07;
    
}

a{
    text-decoration: none;
    color: black;
}

h2{
   width: 1000px;
   height: 43.75px;
   margin: 0 423px;
   font-size: 2.5rem;
}
.titulo1{
  font-size: 3rem;
  margin: 30px 450px;
  width:1000px;
}
.container{
    width: 1343px;
    margin: 0;
    padding: 0;
}
.card img{
    width:300px;
    height:300px;
}

.info-card img{
    width: 82px;
    height:13px;
    font-family: 'Georgia';
}
.info-card{
    background: white;
    padding: 10px 20px 10px 20px;
    width: 300px;
    height: 260px;
    font-size: 16px;
}
.info-card h4{
    margin-bottom: 5px;
    font-size:20px;
}
.precio{
    margin: 10px 0 5px 0;
    font-size: 20px;
}
.precio span{
  margin-left: 105px;
 
  font-weight: bold;
}

.button{
    /*margin: 10px 0 10px 20px;
    padding: 0 30px 0 30px;*/
    display: inline-block;
    text-decoration: none;
  height: 38px;
     color: white;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #8f0c07;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #8f0c07;
}
.card{
    margin: 20px;
    border: 1px solid black
}
.row{
   display: flex;
   margin: 20px 118px 20px 410px;
}
/*carrusel*/ 

 .carrusel{
    width: 100%;
 }
.carrusel-img{
    overflow: hidden;
}

.carrusel ul{
    display: flex;
    width: 4000cm;
    animation: cambio 15s infinite;  
    padding: 0
}

.carrusel img{
    max-width: 100%;
    height: 800px;   
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

@media (min-width: 1343px){
    .encabezado{
    width: 1920px;
}
.carrusel{
    width: 1343px;
 }
 .carrusel img{
    width: 1343px;
    height: 543px;   
}
.row{
   display: flex;
   margin: 20px 118px 20px 170px;
}
h2{
   width: 1600px;
   height: 43.75px;
   margin: 0 175px;
   font-size: 2.5rem;
   text-align: center;
}

/*Columnas*/

.u-full-width {
  width: 100%;
  box-sizing: border-box; }
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box; }
.u-pull-right {
  float: right; }
.u-pull-left {
  float: left; }
}

</style>
<!-- git init
git add .
git commit -m "cualquier nombre"
git remote add origin link
git push -u origin master 
browser
git clone link-->
