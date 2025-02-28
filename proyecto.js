let continuar = true;

while (continuar) {
  // Precio base de la cotizaci??n (en Quetzales)
  let precio_base = 2000;
  
  // Valores de los recargos (en decimales que representan porcentajes)
  let edad_18 = 0.1;
  let edad_25 = 0.2;
  let edad_50 = 0.3;
  
  let casado_18 = 0.1;
  let casado_25 = 0.2;
  let casado_50 = 0.3;
  
  let hijos_recargo = 0.2;
  let propiedad_recargo = 0.35;
  let salario_recargo = 0.05;
  
  let recargo_total = 0;
  let precio_final = 0;
  
  let nombre = prompt("Ingrese su nombre o escriba 'Salir' para finalizar:");
  if (nombre.toUpperCase() === "SALIR") {
    continuar = false;
    break;
  }
  
  let edad = parseInt(prompt("??Cu??ntos a??os tiene? Ingrese solamente n??meros:"));
  if (edad < 18) {
    alert("Lo sentimos, el asegurado debe ser mayor de edad. No se realiza la cotizaci??n.");
    continue;
  }
  
  let casado = prompt("??Est?? casado actualmente? (Responda 'si' o 'no'):").toUpperCase();
  let edad_conyuge_numero = 0;
  if (casado === "SI") {
    edad_conyuge_numero = parseInt(prompt("??Qu?? edad tiene su esposo/a?"));
  }
  
  let hijos = prompt("??Tiene hijos o hijas? (Responda 'si' o 'no'):").toUpperCase();
  let cantidad_hijos = 0;
  if (hijos === "SI") {
    cantidad_hijos = parseInt(prompt("??Cu??ntos hijos tiene?"));
  }
  
  let propiedades = parseInt(prompt("??Cu??ntas propiedades posee? Ingrese un n??mero:"));
  let salario = parseFloat(prompt("Ingrese su salario mensual en Quetzales:"));
  
  // Recargo por edad del asegurado
  if (edad >= 18 && edad < 25) recargo_total += precio_base * edad_18;
  else if (edad >= 25 && edad < 50) recargo_total += precio_base * edad_25;
  else if (edad >= 50) recargo_total += precio_base * edad_50;
  
  // Recargo por edad del c??nyuge
  if (casado === "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) recargo_total += precio_base * casado_18;
    else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) recargo_total += precio_base * casado_25;
    else if (edad_conyuge_numero >= 50) recargo_total += precio_base * casado_50;
  }
  
  // Recargo por hijos
  if (cantidad_hijos > 0) recargo_total += cantidad_hijos * (precio_base * hijos_recargo);
  
  // Recargo por propiedades
  if (propiedades > 0) recargo_total += propiedades * (precio_base * propiedad_recargo);
  
  // Recargo por salario
  recargo_total += salario * salario_recargo;
  
  // C??lculo final
  precio_final = precio_base + recargo_total;
  
  // Mensajes de salida
  alert("Para el asegurado(a): " + nombre);
  alert("El recargo total ser?? de: Q." + recargo_total.toFixed(2));
  alert("El precio final de la cotizaci??n ser?? de: Q." + precio_final.toFixed(2));
}
