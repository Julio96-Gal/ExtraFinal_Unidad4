Descripcion del problema 
El problema que se desea resolver con este programa es calcular la cotización de un seguro basado en diferentes factores de riesgo. En otras palabras, se busca determinar el costo final de un seguro para una persona dependiendo de sus características personales y financieras.
Objetivo del Programa:
El programa calcula el precio final de un seguro a partir de una tarifa base (Q.2000) y le suma diferentes recargos que dependen de ciertos factores de riesgo. El usuario ingresa sus datos personales y el sistema calcula cuánto debe pagar.
Factores de Riesgo y Recargos:
1.	Edad del asegurado:
o	Si tiene entre 18 y 25 años, se le suma un 10% del precio base.
o	Si tiene entre 25 y 50 años, se le suma un 20%.
o	Si tiene más de 50 años, se le suma un 30%.
2.	Estado civil (Cónyuge):
o	Si el asegurado está casado, también se evalúa la edad de su cónyuge y se aplica un recargo similar al de la edad del asegurado.
3.	Cantidad de hijos:
o	Se aplica un recargo del 20% del precio base por cada hijo.
4.	Cantidad de propiedades:
o	Se aplica un 35% del precio base por cada propiedad que tenga el asegurado.
5.	Salario del asegurado:
o	Se aplica un 5% del salario mensual del asegurado como recargo.
Lógica del Programa:
•	El programa solicita los datos del usuario mediante prompt().
•	Evalúa cada uno de los factores de riesgo y calcula los recargos correspondientes.
•	Suma todos los recargos al precio base para obtener el precio final de la cotización.
•	Muestra el resultado al usuario.
•	Permite realizar múltiples cotizaciones hasta que el usuario escriba "Salir".
En resumen, este programa automatiza el cálculo de un seguro
Que podriamos mejorar: 
-	El código tiene muchas repeticiones en la forma en que se calculan los recargos, lo que hace que sea más difícil de mantener y actualizar. (se puede mejorar estructura)
-	Funciones automatizadas 
-	Permitir más flexibilidad en los datos ingresados
-	Mejorar la visualización de los resultados se puede usar console.log() para un formato más ordenado.
