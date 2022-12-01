import login from './pages/LoginRegistro.vue'
import registro from './pages/RegistroUsuario.vue'
import Details from './pages/Details.vue'
import contactanos from './pages/ContactanosSalvato'
import inicio from './pages/InicioSalvato'
import nosotros from './pages/NosotrosSalvato'
import productos from './pages/ProductosSalvato'
import recuperacion from './pages/RecuperarContra'
import registroAdmis from './pages/RegistroAdmis'
import pantallaRecibo from './pages/PantallaRecibo'
import header from './components/HeaderCliente'
import pagos from './pages/PlantillaPagos'
import registroProductos from './pages/RegistroProductos'


export const routes = [
    {path:'/login', component:login},
    {path:'/', component:registro},
    {path:'/details/:index', component:Details},
    {path:'/contactanos', component:contactanos},
    {path:'/inicio', component:inicio},
    {path:'/productos', component:productos},
    {path:'/nosotros', component:nosotros},
    {path:'/recuperacion', component:recuperacion},
    {path:'/registroAdmis', component:registroAdmis},
    {path:'/pantallaRecibo',component:pantallaRecibo},
    {path:'/header', component:header},
    {path:'/pagos', component:pagos},
    {path:'/registroProductos', component:registroProductos},
]