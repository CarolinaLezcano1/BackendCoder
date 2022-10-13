class Usuario {
    constructor (nombre, apellido, mascotas, libros){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }
}

getFullName(){
    return `Hola ${this.nombre} ${this.apellido}!`;
}

addMascotas(mascota){
    let agregar = mascota;
    this.mascotas.push(agregar)
}

countMascotas(){
    return this.mascotas.length
}

addBook(nombre, autor){
    return this.libros.splice(0, 0 {nombre : nombre, autor : autor})
}

getBookNames(){
    return this.libros.map(prop => prop.nombre)
}

const usuario = new Usuario ("Elian", "Gonzalez", [{nombre: "El juego de las llaves"},{nombre: "Las hadas"}, ["Perro", "Gato"]])

//Obtener nombre completo
console.log(user.getFullName())

//Agregar mascota
usuario.addMascotas("Loro")
console.log(usuario)

//Contar mascota
console.log(usuario.countMascotas())

//Agregar libro
usuario.addBook("Libro3", "Libro4")
console.log(usuario)

//Obtener nombre de los libros
console.log(usuario.getBookNames())