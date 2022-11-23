<template>
<div>
    <h1>Detalles Del Pedido</h1>
    <div class="form-group">
        <label for="formInput">Fecha De Entrega</label>
        <input 
        v-model="fecha"
        type="text"
        class="form"
        placeholder="DD/MM/AA">
    </div>
    <div class="form-group">
        <label for="formInput">Hora De Entrega</label>
        <input 
        v-model="hora"
        type="text"
        class="form"
        placeholder="Hora">
    </div>
    <div class="form-group">
        <label for="select">Seleccione Método De Pago</label>
        <select name="form" id="metodo-pago">
            <option>Transferencia</option>
            <option>Efectivo</option>
        </select>
    </div>
    <div class="form-group">
        <label for="sele">Seleccione Modo De Entrega</label>
        <select name="form" id="metodo-entrega">
            <option>Domicilio</option>
            <option>Se adquiere en punto salvato</option>
        </select>
    </div>
</div>

</template>

<script>

</script>

<style>

</style>