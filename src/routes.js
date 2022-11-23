import FormData from './pages/FormData.vue'
import login from './pages/LoginRegistro.vue'
import Details from './pages/Details.vue'
import contactanos from './pages/ContactanosSalvato'
import inicio from './pages/InicioSalvato'
import nosotros from './pages/NosotrosSalvato'
import productos from './pages/ProductosSalvato'
import recuperacion from './pages/RecuperarContra'
import registroAdmis from './pages/RegistroAdmis'

export const routes = [
    {path:'/', component:FormData},
    {path:'/login', component:login},
    {path:'/details/:index', component:Details},
    {path:'/contactanos', component:contactanos},
    {path:'/inicio', component:inicio},
    {path:'/productos', component:productos},
    {path:'/nosotros', component:nosotros},
    {path:'/recuperacion', component:recuperacion},
    {path:'/registroAdmis', component:registroAdmis},
]