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

// Crea una nueva instancia de la clase Person con los argumentos adecuados
let Persona1 = new Person("Rubén", 19, "verdes", "marrón", 1.78, 70);

console.log(Persona1.nombre);
console.log(Persona1.edad);
console.log(Persona1.ojos);
console.log(Persona1.pelo);

// Llama al método `mayor` sin pasarle argumentos
console.log(Persona1.mayor());

// Llama al método `CalcularIMC` sin argumentos
Persona1.CalcularIMC();
