
/* import { BIconEmojiAngryFill } from "bootstrap-vue"

methods:{
    data:{
        type = 0 (0 login, 1 registro, 2 recuperar)
        form:{email:"", password="", }
    }
    sendForm(){

    },
    computed:{
        emailvalidacion(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            }else{
                return true;
            }
        },
        validapassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
                return false;
                alert('la contraseña debe tener al menos una mayuscula, una minuscula y un número)
            }else{
                return true;
            }
        }, 
        title(){
            return (this.type==0)?'Login':(this.type=1)?'registro':'recuperar contraseña'
        }
    }
}
:class="{'error' :emailvalidacion}"
h3 {{(type===0)?'Login':'registro'}} o puede ser {{title}}
registro @click="type=1"
input v-if="type!=2"
input v-if="type===1"



<div id="pagos">  
<table id="pagos-tabla" class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Télefono</th>
      <th scope="col">Dirección</th>
      <th scope="col">Fecha de entrega</th>
      <th scope="col">Valor a pagar</th>
      <th scope="col">Pagado</th>
    </tr>
  </thead>
  <tbody>  
      <td><input type="checkbox"></td>
  </tbody>
</table>
</div>
*/