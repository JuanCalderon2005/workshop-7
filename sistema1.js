function Persona(nombre, email, clave){
    this.nombre = nombre;
    this.emial = email;
    this.clave = clave;
}
 
function Usuario(nombre, email, productosAcumulados, clave){
    Persona.call(this,nombre,email,clave);
    this.productosAcumulados = productosAcumulados;
}
Usuario.prototype = Object.create(Persona.prototype)
Usuario.prototype.constructor = Usuario;
Usuario.prototype.acumularPuntos = function(){
    console.log("Se acumularon puntos al usuario:", this.nombre);
}
Usuario.prototype.canjearPuntos = function(){
    console.log("Se canjearon puntos del usuario:", this.nombre);
}


function Producto(nombre, puntosNecesarios, cantidadDisponible, stock){
    this.nombre = nombre;
    this.puntosNecesarios = puntosNecesarios;
    this.cantidadDisponible = cantidadDisponible;
    this.stock = stock;
}
Producto.prototype.obtenerInformacion = function(){
    console.log("Se obtuvo información del producto:", this.nombre);
}

function ProductoFisico(nombre, puntosNecesarios, cantidadDisponible, precio, stock){
    Producto.call(this,nombre,puntosNecesarios,cantidadDisponible,stock);
    this.precio = precio;
}
ProductoFisico.prototype = Object.create(Producto.prototype);
ProductoFisico.prototype.constructor = ProductoFisico;
ProductoFisico.prototype.actualizarStock = function(){
    console.log("Se actualizó el stock del producto físico:", this.nombre);
}
ProductoFisico.prototype.enviarProducto = function(){
    console.log("Se envió el producto físico:", this.nombre);
}


function ProductoDigital(nombre, puntosNecesarios, url, cantidadDisponible, stock){
    Producto.call(this,nombre,puntosNecesarios,cantidadDisponible,stock);
    this.url = url;
}
ProductoDigital.prototype = Object.create(Producto.prototype);
ProductoDigital.prototype.constructor = ProductoDigital;
ProductoDigital.prototype.descargar = function(){
    console.log("Se descargó el producto digital:", this.nombre);
}
ProductoDigital.prototype.obtenerProductoEmail = function(){
    console.log("Se obtuvo el producto digital por email:", this.nombre);
}


function Actividad(tipo, puntosOtorgados){
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
}
Actividad.prototype.completarActividad = function(){
    console.log("Se completó la actividad:", this.tipo);
}

function categoriaDeProducto(nombre, descripcion){
    Producto.call(this,nombre, puntosNecesarios, cantidadDisponible, stock)
    this.descripcion = descripcion;
}
categoriaDeProducto.prototype = Object.create(Producto.prototype)
categoriaDeProducto.prototype.constructor = categoriaDeProducto
categoriaDeProducto.prototype.listaProductos = function(){
    console.log("Esta es la lista des productos",this.nombre);
}


function OrdenDeCanje(usuario, producto, fecha){
    this.usuario = usuario;
    this.producto = producto;
    this.fecha = fecha;
}
OrdenDeCanje.prototype.confirmarOrden = function(){
    console.log("Se confirmó la orden para el producto:", this.producto.nombre);
}
OrdenDeCanje.prototype.cancelarOrden = function(){
    console.log("Se canceló la orden de canje para el producto:", this.producto.nombre);
}


function Administrador(nombre, email, clave){
    Persona.call(this,nombre, email, clave )
}
Administrador.prototype=Object.create(Persona.prototype)
Administrador.prototype.constructor = Administrador
Administrador.prototype.agregarProducto = function(){
    console.log("Se agregó un nuevo producto a la tienda");
}
Administrador.prototype.modificarProducto = function(){
    console.log("Se modificó un producto en la tienda");
}
Administrador.prototype.eliminarUsuario = function(){
    console.log("Se eliminó un usuario de la tienda");
}
