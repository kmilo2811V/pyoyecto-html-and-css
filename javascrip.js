// const ListContacts = [1, false, "hola", [1, 2, 3, 4, [1, 2, 4, 5, 6]]];
// const objeto1 = { id: 1, name: "Juliana" };
// const objeto2 = { id: 2, name: "Carlos" }; 

// variable para guardar mis contactos

// const ListContacts2 = ["neider urbano", "maria benitez"];  primera lista
const ListContacts2 = [
{ id: 1, name: "Juliana", mascotas: {mascota1:"perro", mascota2:"gato"}},
{ id: 2, name: "Carlos" },
{ id: 3, name: "Carlos" },
];
// console.log(ListContacts2[1]);

// Crea una función para añadir un nuevo contacto a una lista


function guardarContacto(newContact) {
ListContacts2.push(newContact);
};

guardarContacto({ id: 4, name: "edgardo" });
console.log(ListContacts2);

// hay dos formas de hacerlo

// function guardarContacto(id, name, apellido) {
//     const newContact = { 
//         id: id,
//         name: name,
//         apellido: apellido,
//     }
//     ListContacts2.push(newContact);
// }
// guardarContacto(5, "juan", "castellanos");
// console.log(ListContacts2);


// Crea una función para borrar un contacto existente de la lista
function deleteContactById(id) {
// .pap
// .filter
// for each 
// for
ListContacts2.filter((Contacts2) => {
    if (Contacts2.id !== id) {
         console.log(Contacts2);

        //  return contacts2;
    // es otra manera de retornar
    }
    });
}
    deleteContactById(1);
    // console.log(ListContacts2.length);


// Crea una función para imprimir en consola los contactos presentes en la lista
function printContacts(contacts2) {
  contacts2.forEach(contact => {
    console.log(`Nombre: ${contact.name}, Teléfono: ${contact.phone}`);
  });
}
// Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️




