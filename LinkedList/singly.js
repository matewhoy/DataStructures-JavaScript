/* 1 --> 2 --> 3 --> 4 --> 5 --> null; 6

//Asi seria la estructura
let singlyLinkedList = {
    head: {
        value:1,
        next: {
            value: 2,
            next: {
                value: 3,
                next:{
                    value: 4,
                    next: null 
                }
            }
        }
    }
} */

class LinkedList {
  // AL INSTANCIAR LA CLASE SE EJECUTA EL BOB CONTRUCTOR
  // BOB EL CONSTRUCTOR RECIBE UN VALOR
  constructor(val) {
    // LA CABEZA DE LA LISTA APUNTA AL VALOR
    // QUE NOS MANDARON
    this.head = {
      value: val,
      next: null, // EL SIGUIEN APUNTA A NADA
    };

    // LA COLA APUNTA A LA CABEZERA
    this.tail = this.head;

    // EL LARGO INICIA EN 1
    this.length = 1;
  }

  append(val) {
    // INSTANCIAMOS EL NODO

    const newNode = new Nodo(val);

    // ANIDA AL HEAD EL NUEVO NODO
    this.tail.next = newNode;

    // GUARDAMOS EL NUEVO NODO EN LA COLA
    this.tail = newNode;

    // AUMENTAMOS LA LISTA EN 1
    this.length++;

    console.log(this);
  }

  prepend(val) {
    // GENERAMOS UN NUEVO NODO
    const newNode = new Nodo(val);

    // SU NEXT APUNTA A LA CABEZA
    newNode.next = this.head;

    // LA CABEZA ES EL NUEVO NODO CON LOS DATOS ANTERIORES
    this.head = newNode;

    // EL LARGO AUMENTA
    this.length++;

    return this;
  }

  insert(index, val) {
    // SI EL INDEX QUE ME PASAN ES MAYOR
    // AL TAMAÑO DE MI LISTA
    if (index >= this.length) {
      // AÑADE AL FINAL DE LA LISTA
      // EL NUEVO VALOR
      return this.append(val);
    }

    // CREAMOS UN NUEVO NODO
    const newNode = new Nodo(val);

    const firstPointer = this.getTheIndex(index - 1);

    const holdingPointer = firstPointer.next;

    firstPointer.next = newNode;

    newNode.next = holdingPointer;
  }

  getTheIndex(i) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != i) {
      currentNode = currentNode.next;

      counter++;
    }

    return currentNode;
  }
}

const list = new LinkedList(1);
