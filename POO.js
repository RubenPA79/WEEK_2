

class Person {
    constructor(nombre, edad, ojos, pelo, altura, peso) {
      this.nombre = nombre;
      this.altura = altura;
      this.ojos = ojos;
      this.pelo = pelo;
      this.edad = edad;
      this.peso = peso;
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
  
    CalcularIMC() {
      let IMC = this.peso / (this.altura * this.altura);
      let redondeo = parseFloat(IMC.toFixed(2)); // Convierte el string a número
  
      // Comparaciones usando rangos
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
  }
  

  
  console.log(Persona1.nombre);
  console.log(Persona1.edad);
  console.log(Persona1.ojos);
  console.log(Persona1.pelo);
  
  // Llama al método mayor sin pasarle argumentos
  console.log(Persona1.mayor());
  
  // Llama al método CalcularIMC sin argumentos
  Persona1.CalcularIMC();
  

