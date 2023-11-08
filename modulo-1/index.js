/**
 * 1. Escribir un programa con JavaScript que resuelva el siguiente problema: Dada una lista (o array) de números enteros, encontrar el número más grande de la lista y mostrarlo en consola. No se debe usar la función Math.max(), ni .forEach(). 
 */

const findBigNumber = ( listOfNunbers ) => {
  if ( listOfNunbers.length === 0 ) return
  let bigNumber = listOfNunbers[0]
  for (let number = 0; number < listOfNunbers.length; number++) {
    if ( listOfNunbers[number] > bigNumber ) {
      bigNumber = listOfNunbers[number]
    }
  }
  console.log(`El número más grande es: ${bigNumber}`)
}

const numbers = [7, 2, 10, 15, 4, 8, 20];
findBigNumber(numbers)

/**
 * 2. Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma. Luego, escribir la misma función utilizando una función flecha (arrow function) y comparar ambas declaraciones. Llamar a ambas funciones con valores de ejemplo y mostrar los resultados en la consola del navegador
 */

const sum = ( a, b ) => {
  return a + b
}

const answer = sum(10, 3)
console.log(`El resultado de la suma es: ${answer}`)

/**
 * 3. Escribir una función en JavaScript que reciba un array de números como argumento y utilizar la función de array para calcular la suma de todos los números pares en el array. Luego, llamar a la función con un array de ejemplo y mostrar el resultado en la consola del navegador.
 */

const sumNumberList = ( list ) => {
  const answer = list.reduce((total, current) => {
    return total + current
  }, 0)
  return answer
}

const listOfNumbers = [1, 2, 3]
const total = sumNumberList(listOfNumbers)

console.log(`La suma de los elementos de la lista es: ${total}`)