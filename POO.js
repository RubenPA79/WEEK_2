class Person {
    constructor(nombre, yearOfBirth, ojos, pelo, altura, peso, hobbies) {
      this.nombre = nombre;
      this.yearOfBirth = yearOfBirth;
      this.ojos = ojos;
      this.pelo = pelo;
      this.altura = altura;
      this.peso = peso;
      this.hobbies = hobbies;
    }
  
    // Método que calcula la edad basado en el año de nacimiento
    edad() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.yearOfBirth;
    }
  
    // Método que nos dice si somos mayores de edad o no
    mayor() {
      let age = this.edad();
      if (age < 18) {
        return `${this.nombre} es menor de edad con ${age}`;
      } else {
        return `${this.nombre} es mayor de edad con ${age}`;
      }
    }
  
    // Método que calcula el índice de masa corporal
    CalcularIMC() {
      let IMC = this.peso / (this.altura * this.altura);
      let redondeo = parseFloat(IMC.toFixed(2));
  
      if (redondeo < 18.5) {
        console.log("Peso insuficiente");
      } else if (redondeo >= 18.5 && redondeo <= 24.9) {
        console.log("El peso es normal");
      } else if (redondeo >= 25 && redondeo <= 29.9) {
        console.log("Sobrepeso");
      } else if (redondeo >= 30 && redondeo <= 34.9) {
        console.log("Obesidad clase I");
      } else if (redondeo >= 35 && redondeo <= 39.9) {
        console.log("Obesidad clase II");
      } else if (redondeo >= 40) {
        console.log("Obesidad Mórbida");
      }
    }

    //Metodo  printAll muestra atributos de clase persona  y valor del atributo con " - "

    printALL() {
        for (let propiedad in this) {
          console.log(`${propiedad} - ${this[propiedad]}`);
        }
}

// Metodo de array de Hobbyes

printHobbies(){
    let hobby = ["nadar" , "correr" , "tennis"];
    
    for(let i =0 ; i < hobby.length ; i++){

        console.log(hobby[i]);
    }


}







  }
  
  // Crear una instancia de la clase
  const Persona1 = new Person("Rubén", 1978, "marrones", "negro", 1.75, 70);
  
  // Llamar a las propiedades y métodos
  console.log(Persona1.nombre); // Rubén
  console.log(Persona1.edad()); // Calcula y muestra la edad
  console.log(Persona1.ojos);   // marrones
  console.log(Persona1.pelo);   // negro
  
  // Llamar al método mayor
  console.log(Persona1.mayor()); // Determina si es mayor de edad
  
  // Llamar al método CalcularIMC
  Persona1.CalcularIMC(); // Calcula y muestra el IMC en la consola


  //llamar al metodo prinAll

Persona1.printALL();

//llamar al metodo printHobbyes

Persona1.printHobbies();




//-------------------------------------------------------------------------------
/*class Person {
  constructor(nombre, yearOfBirth, ojos, pelo, altura, peso, hobbies) {
    this.nombre = nombre;
    this.yearOfBirth = yearOfBirth;
    this.ojos = ojos;
    this.pelo = pelo;
    this.altura = altura;
    this.peso = peso;
    this.hobbies = hobbies; // Atributo de hobbies como un array
  }

  // Método que calcula la edad basado en el año de nacimiento
  edad() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  // Método que nos dice si somos mayores de edad o no
  mayor() {
    let age = this.edad();
    if (age < 18) {
      return `${this.nombre} es menor de edad con ${age}`;
    } else {
      return `${this.nombre} es mayor de edad con ${age}`;
    }
  }

  // Método que calcula el índice de masa corporal
  CalcularIMC() {
    let IMC = this.peso / (this.altura * this.altura);
    let redondeo = parseFloat(IMC.toFixed(2));

    if (redondeo < 18.5) {
      console.log("Peso insuficiente");
    } else if (redondeo >= 18.5 && redondeo <= 24.9) {
      console.log("El peso es normal");
    } else if (redondeo >= 25 && redondeo <= 29.9) {
      console.log("Sobrepeso");
    } else if (redondeo >= 30 && redondeo <= 34.9) {
      console.log("Obesidad clase I");
    } else if (redondeo >= 35 && redondeo <= 39.9) {
      console.log("Obesidad clase II");
    } else if (redondeo >= 40) {
      console.log("Obesidad Mórbida");
    }
  }

  // Método que muestra todos los atributos y sus valores
  printALL() {
    for (let propiedad in this) {
      console.log(`${propiedad} - ${this[propiedad]}`);
    }
  }

  // Método que imprime las aficiones (hobbies)
  printHobbies() {
    for (let i = 0; i < this.hobbies.length; i++) {
      console.log(this.hobbies[i]);
    }
  }
}

// Crear una instancia de la clase con hobbies
const Persona1 = new Person("Rubén", 1978, "marrones", "negro", 1.75, 70, ["nadar", "correr", "tenis"]);

// Llamar a los métodos
console.log(Persona1.nombre); // Rubén
console.log(Persona1.edad()); // Calcula y muestra la edad
console.log(Persona1.ojos);   // marrones
console.log(Persona1.pelo);   // negro

// Llamar al método mayor
console.log(Persona1.mayor()); // Determina si es mayor de edad

// Llamar al método CalcularIMC
Persona1.CalcularIMC(); // Calcula y muestra el IMC en la consola

// Llamar al método printALL
Persona1.printALL();

// Llamar al método printHobbies
Persona1.printHobbies();
*/
