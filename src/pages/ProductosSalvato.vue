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
                                    </thead>
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th>Total</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width"><b>Vaciar Carrito</b></a>
                                    <li class="nav-item">
                                        <router-link to="/pantallaRecibo" class="nav-link" active-class="active" id="grecibo">
                                           <b> Generar Recibo</b>
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
        <h1 id="titulo1" class="titulo1"><b>Nuestros Productos</b></h1>
        <h2 id="titulo2">SALVATOS</h2>
   </div>
 <div id="lista-cursos" class="bod">
        <ul> 
            <li>
                <div class="row" v-for="(productos, i) in productosVector" :key="i">
                    <div class="four columns">
                        <div class="card" id="salvatos">
                            <img src="../assets/salvato_clasico.jpg" class="imagen-curso u-full-width">
                            <div class="info-card">
                                <h4 ><b>{{productos.nombreProducto}}</b></h4>
                                <p >{{productos.descripcion}}</p>
                                <p  class="precio"><span >${{productos.precio}}</span></p>
                                <a @click="carrito" ref="agregar" href="#" class="u-full-width button-primary button input agregar-carrito"  :data-id=productos.id><b>Agregar Al Carrito</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>   
    </div>
</div>

</template>



<script>
/* eslint-disable */
import axios from 'axios'
import {ref} from 'vue'
export default {
    data: () => ({
      rating: 4,
    }),
  setup(){
    const productosVector = ref([])
    
    axios.get('https://databasejaa-default-rtdb.firebaseio.com/productos.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        console.log("nombre",res.data[id].nombreProducto)
        productosVector.value.push({
          id: res.data[id].id,
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
    const grecibo = document.querySelector('#grecibo')
console.log(totalCarrito);
let articuloCarrito = [];
let totalPedido = 0;
//agregar productos al carro
cargarEvento();
function cargarEvento(){
    console.log("Hola mundo")
    liProductos.addEventListener('click',agregarProductos);
    carrito.addEventListener('click',eliminarProducto);
    grecibo.addEventListener('click', agregarAlRecibo)
    vaciarCarritoBoton.addEventListener("click",()=>{
        console.log("boton");
        articuloCarrito=[];
        limpiarHTML();
        limpiarHtmlTotal();
    });
    
}
function agregarProductos(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement
        leerDatos(productoSeleccionado);
    }
}

//vaciar carro
/* function vaciarProducto(){
    articuloCarrito=[];
    limpiarHTML();
} */
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
            console.log("prodctos",producto.id)
        console.log("info",infoProductos.id)
            if(producto.id === infoProductos.id){

                console.log("precio",producto.precio.length);
                producto.cantidad++;
                producto.total = producto.cantidad * parseInt(producto.precio.substr(1,producto.precio.length));
                return producto;
            }else{
                limpiarHTML();
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
    const fila = document.createElement("tr");
    fila.innerHTML = `
    <td> <img src=${producto.imagen} width="90"></td>
    <td> ${producto.titulo} </td>
    <td> ${producto.precio} </td>
    <td> ${producto.cantidad} </td>
    <td> ${producto.total} </td>
    <td> <a href= "#" class="borrar-curso" data-id="${producto.id}">X</td>
    `;

    totalPedido = totalPedido + producto.total;

    
    filaTotal.innerHTML = `
    <td>Total Pedido: ${totalPedido} </td>
    `;const filaTotal = document.createElement('tr');
    /* Esta parte deberia ir en Detalles del pedido */
    contenedorCarrito.appendChild(fila);
    limpiarHtmlTotal();
    totalCarrito.appendChild(filaTotal);

 })
};


function limpiarHTML(){
    contenedorCarrito.innerHTML = "";
};
function limpiarHtmlTotal(){
    totalCarrito.innerHTML = "";
};

function agregarAlRecibo(){
    axios.post('https://databasejaa-default-rtdb.firebaseio.com/carro.json',articuloCarrito)
        .then(res=> console.log(res))
        .catch(error=> console.log(error))
};
/*function cards(){
    if(key===3){
    const nuevaColumnaCards = document.createElement('row');   
    }
}*/

 },
 
};
  
</script>




<!-- arriba, derecha, abajo, izquierda -->
<style>
#titulo2{
    margin-bottom: 40px;
}

#img-carrito{
    margin-top: 18px;
    margin-left: 900px;
}
.cuerpo{
    margin: 0px;
    height:auto;
    width: 1343px;
    font-family: georgia;
}
.encabezado{
    display: flex;
    margin-bottom:0px;
    margin-top:0px;
    width: 100%;
    height: 100px;
    background: #8f4007;
    padding:0px;
    
}
.imglogo{
    margin-top: 25px;
width: 50px;
height: 50px;
margin-left: 80px;
}
/*store*/

.store{
    text-align: center;
    background: #8f3b07;
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
    padding: 10px 100px 10px 80px;
}
  
.submenu #carro{
    display: none;
    margin-right:90px;
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
/*puse*/
th,
td {
  padding: 12px 20px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1; }
th:first-child,
td:first-child {
  padding-left: 0; }
th:last-child,
td:last-child {
  padding-right: 0; }
/*.container:after,*/
/*.row:after,*/
.u-cf {
    content: "";
    display: table;
    clear: both; }
    button,
    .button {
      margin-bottom: 1rem; }
    input,
    textarea,
    select,
    fieldset {
      margin-bottom: 1.5rem; }
    pre,
    blockquote,
    dl,
    figure,
    table,
    p,
    ul,
    ol,
    form {
      margin-bottom: 2.5rem; }
    th {
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
    }
    
/*hasta acá*/


a{
    text-decoration: none;
    color: black;
}

h2{
   width: 1000px;
   height: 60px;
   margin-left: 109px;
  margin-right: 200px;
   font-size: 2.5rem;
   text-align: center;
   font-family: 'Times New Roman', Times, serif;
}
.titulo1{
  font-size: 50px;
  margin-top: 80px;
  margin-left: 100px;
  margin-right: 20px;
  width:1000px;
  height: 100px;
}
.bod ul li{
    display:flex;
    margin:0px;
    margin-left: 90px;
    padding: 0px;
}
body {
    margin: 0px;
}
.bod{
   margin-left: 1px;
   margin-right: 1px;
   margin-top: 20px;
   margin-bottom: 40px;
   /*width: 1343px;
   height: 1343px;*/
   display: flex;
}
.row {
    display: flex;
    margin: 0px;
}
.card img{
    width:300px;
    height:300px;
}

.info-card  {
    padding: 10px 20px;
}

.info-card p, 
.card h4 {
    margin-bottom: 5px;
}
.info-card .precio {
    font-size: 18px;
    margin-top: 10px;
    font-family: "time";
}
.info-card .precio span {
    font-weight: 700px;
    font-size: 22px;
    font-family: "time";
}

.precio{
    margin: 60px 20px 40px 20px;
    font-size: 20px;
}
.precio span{
  margin-left: 5px;
 
  font-weight: bold;
}

.button{
    /*margin: 10px 0 10px 20px;
    padding: 0 30px 0 30px;*/
    font-family: 'Times';
    display: inline-block;
    text-decoration: none;
    height: 38px;
    width: auto;
    color: white;
    text-align: center;
    font-size: 11px;
    font-weight: 60px;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ffffff;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #8f4007;
}
.button:hover{
    background-color: #e79600;
    color:black;
    text-decoration:none;
}
.card{
    margin: 20px;
    width: 302px;
    height: 550px;
    border: 1px solid black
}

#grecibo{
    font-family: 'Times';
    display: inline-block;
    text-decoration: none;
    height: 38px;
    width: auto;
    color: white;
    text-align: center;
    font-size: 11px;
    font-weight: 60px;
    line-height: 18px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ffffff;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #8f4007;
    
}
#grecibo:hover{
    background-color: #e79600;
    color:black;
    text-decoration:none;
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


</style>
<!-- git init
git add .
git commit -m "cualquier nombre"
git remote add origin link
git push -u origin master 
browser
git clone link-->
