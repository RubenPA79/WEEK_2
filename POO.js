class Person {
    constructor(nombre, edad, ojos , pelo , altura , ) {
      this.nombre = nombre;
      this.altura = altura;
      this.ojos = ojos;
      this.pelo = pelo;
      this.edad = edad;
    }
  
    mayor() {
      if (this.edad < 18) {
        return `${this.nombre} es menor de edad con ${this.edad}`;
      } else if (this.edad > 18) {
        return `${this.nombre} es mayor de edad con ${this.edad}`;
      } else {
        return `${this.nombre} no respondo`;
      }
    }

  }
  
  // Crea una nueva instancia de la clase Person con los argumentos adecuados
  let Persona1 = new Person("Rubén", 19, "verdes" , "marron" , 1.78);
  
  console.log(Persona1.nombre);
  console.log(Persona1.edad);
  console.log(Persona1.ojos);
  console.log(Persona1.pelo);
  Persona1.mayor(19);
  
  // Llama al método `mayor` sin pasarle argumentos
  console.log(Persona1.mayor());
