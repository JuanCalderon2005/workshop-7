function Cliente(nombre, email, clave, direccion, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.direccion = direccion;
    this.telefono = telefono;
}
Cliente.prototype.realizarPedido = function() {
    console.log("Se realizó un pedido para el cliente:", this.nombre);
}
Cliente.prototype.verHistorialPedidos = function() {
    console.log("Se visualizó el historial de pedidos para el cliente:", this.nombre);
}
Cliente.prototype.autenticacion = function() {
    console.log("Se autenticó al cliente:", this.nombre);
}

 function Restaurante(nombre){
    this.nombre = nombre;
}


 function RestauranteDigital(nombre, menuQR) {
    Restaurante.call(this,nombre)
    this.menuQR = menuQR;
}
RestauranteDigital.prototype = Object.create(Restaurante.prototype)
RestauranteDigital.prototype.constructor = RestauranteDigital
RestauranteDigital.prototype.agregarPlato = function() {
    console.log("Se agregó un plato al menú del restaurante digital:", this.nombre);
}
RestauranteDigital.prototype.actualizarPlato = function() {
    console.log("Se actualizó un plato del menú del restaurante digital:", this.nombre);
}



function RestauranteFisico(nombre, direccion, menuFisico) {
    Restaurante.call(this,nombre)
    this.direccion = direccion;
    this.menuFisico = menuFisico;
}
RestauranteFisico.prototype = Object.create(Restaurante.prototype)
RestauranteFisico.prototype.constructor = RestauranteFisico
RestauranteFisico.prototype.agregarPlato = function() {
    console.log("Se agregó un plato al menú del restaurante físico:", this.nombre);
}
RestauranteFisico.prototype.actualizarPlato = function() {
    console.log("Se actualizó un plato del menú del restaurante físico:", this.nombre);
}
RestauranteFisico.prototype.eliminarPlato = function() {
    console.log("Se eliminó un plato del menú del restaurante físico:", this.nombre);
}


function Pedido(cliente, restaurante, detallesPedido) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.detallesPedido = detallesPedido;
}
Pedido.prototype.actualizarEstado = function() {
    console.log("Se actualizó el estado del pedido");
}
Pedido.prototype.calcularTotal = function() {
    console.log("Se calculó el total del pedido");
}


function Plato(nombre, precio, ingredientes) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
}
Plato.prototype.obtenerInfo = function() {
    console.log("Se obtuvo información del plato:", this.nombre);
}


function Menu(plato){
    this.plato = plato;
}


function MenuQR(plato, URL) {
    Menu.call(this,plato)
    this.URL = URL;
}
MenuQR.prototype = Object.create(Menu.prototype)
MenuQR.prototype.constructor = MenuQR
MenuQR.prototype.generarQR = function() {
    console.log("Se generó un código QR para el plato:", this.plato.nombre);
};


function MenuFisico(plato) {
    Menu.call(this,plato)
}
MenuFisico.prototype = Object.create(Menu.prototype)
MenuFisico.prototype.constructor = MenuFisico
MenuFisico.prototype.impresion = function() {
    console.log("Se imprimió el menú físico");
}
MenuFisico.prototype.visualizacion = function() {
    console.log("Se visualizó el menú físico");
}


function Repartidor(nombre, email, clave, vehiculo, disponibilidad) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
}
Repartidor.prototype.aceptarEnvio = function() {
    console.log("El repartidor", this.nombre, "aceptó un envío");
}
Repartidor.prototype.actualizarUbicacion = function() {
    console.log("Se actualizó la ubicación del repartidor", this.nombre);
}
Repartidor.prototype.completarEntrega = function() {
    console.log("El repartidor", this.nombre, "completó una entrega");
}
Repartidor.prototype.autenticacion = function() {
    console.log("Se autenticó al repartidor:", this.nombre);
}
Repartidor.prototype.actualizarEstado = function() {
    console.log("Se actualizó el estado del repartidor:", this.nombre);
}