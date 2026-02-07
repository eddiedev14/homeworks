//? TAREA 01: ARRAY METHODS
//? Research and use all array methods

//* 1. Length: Hace referencia a una PROPERTIE de los arrays que permite obtener la longitud del mismo
const numbers = [1, 2, 3, 554, 2123, 667];
console.log(numbers.length); // 6

//* 2. at(): Permite obtener la posición especifica de un elemento en array. Cumple la feature de posiciones negativas
console.log(numbers.at(0)); // 1
console.log(numbers.at(2)); // 3
console.log(numbers.at(-1)); // 667 (last position)

//* 3. concat(): Permite concatenar dos o más arreglos y devolver su unión. Se aplica sobre un arreglo dado
const words = ["banana", "apple", "soccer", "programmer", "pizza"];
const concatArray = numbers.concat(words);
console.log(concatArray); //[1, 2, 3, 554, 2123, 667, "banana", "apple", "soccer", "programmer", "pizza"]

//* 4. constructor: Hace referencia a una PROPERTIE que devuelve la función que creó el prototipo del Array
console.log(numbers.constructor);

/*
    * 5. copyWithin(): Hace una copia de una parte de un array y la pega en otra posición del mismo array.
        ? Es un método mutador que sobreescribe el mismo arreglo (es decir no crea otro nuevo).
        ? Este método no modifica la LONGITUD DEL ARRAY, es decir si la copia no alcanza, se corta...
    
    * Sintaxis: array.copyWithin(target, start, end)
        - target: Posición desde donde se INICIA a PEGAR la copia
        - start (opcional): Posición donde se INICIA la copia. Si no se pasa inicia desde la posición 0
        - end (opcional): Posición donde se FINALIZA la copia. Si no se pasa es hastá la posición final. 
        ? end: No incluye la posición que se indica, es uno menos...
*/

numbers.copyWithin(1, 3, 5);
console.log(numbers); // [ 1, 554, 2123, 554, 2123, 667 ]

words.copyWithin(3, 0, 3);
console.log(words); // [ "banana", "apple", "soccer", "banana", "apple" ]

/*
    * 6. entries(): Devuelve a partir de un array un OBJETO ITERADOR, donde cada elemento es un array en el que:
        - Posición 0: índice del array original
        - Posición 1: valor contenido en esa posición en el array original
*/

const entriesIterator = words.entries();
for (const [index, value] of entriesIterator) {
  console.log(`Posición ${index}: ${value}`);
}

//* 7. every(): Método que retorna TRUE/FALSE si la condición especificada en la función que recibe se cumple para TODOS los elementos del array
console.log(numbers.every((number) => number >= 5)); // false
console.log(numbers.every((number) => number >= 0)); // true

/*
    * 8. fill(): Método que rellena las posiciones especificadas de un array con un valor en concreto
        ? El método sobreescribe el array original
        ? Se puede especificar posición inicial o final desde donde se empieza a rellenar el array con ese valor. Si no se pasa se rellena todo el array
        ? Al igual que copyWithin(), el valor de la posición final NO SE INCLUYE
*/

numbers.fill("Número Random", 2, 5);
console.log(numbers); // [ 1, 554, "Número Random", "Número Random", "Número Random", 667 ]

//* 9. filter(): Método que retorna un nuevo arreglo con los elementos que CUMPLAN la condición la condición especificada en la función que recibe
const ages = [5, 15, 30, 18, 60, 53, 8, 9];
const adultAges = ages.filter((age) => age >= 18);
console.log(adultAges); // [ 30, 18, 60, 53 ]

//* 10. find(): Método que busca el PRIMER ELEMENTO que CUMPLA la CONDICIÓN especificada en el array. Si no lo encuentra retorna undefined
console.log(ages.find((age) => age >= 18)); // 30
console.log(ages.find((age) => age === 7)); // undefined

//* 11. findIndex(): Método que busca el PRIMER ELEMENTO que CUMPLA la CONDICIÓN especificada en el array y RETORNA SU INDICE. Si no lo encuentra retorna -1
console.log(ages.findIndex((age) => age >= 18)); // 2
console.log(ages.findIndex((age) => age === 7)); // -1

//* 12. findLast(): Método que busca el ÚLTIMO ELEMENTO que CUMPLA la CONDICIÓN especificada en el array. Si no lo encuentra retorna undefined
console.log(ages.findLast((age) => age >= 18)); // 53
console.log(ages.findLast((age) => age === 7)); // undefined

//* 13. findLastIndex(): Método que busca el ÚLTIMO ELEMENTO que CUMPLA la CONDICIÓN especificada en el array y RETORNA SU INDICE. Si no lo encuentra retorna -1
console.log(ages.findLastIndex((age) => age >= 18)); // 5
console.log(ages.findLastIndex((age) => age === 7)); // -1

/*
    * 14. flat(): Método que aplana un array, es decir permite eliminar arrays anidados -> [1, 2, [3, [4, 5, [6]]]] (3 niveles de anidación)
        ? No muta el array original, en cambio, DEVUELVE UNO NUEVO
        ? Sintaxis -> array.flat(depth)
            - depth: Cuántos niveles de anidación se desean eliminar (number o Infinity). Por defecto es 1
*/

const nestedArray = [1, 2, [3, [4, 5, [6]]]];
const flatArray1 = nestedArray.flat(1);
const flatArray2 = nestedArray.flat(2);
const flatArray3 = nestedArray.flat(3);

console.log(flatArray1); // [ 1, 2, 3, [ 4, 5, [ 6 ] ] ]
console.log(flatArray2); // [ 1, 2, 3, 4, 5, [ 6 ] ]
console.log(flatArray3); // [ 1, 2, 3, 4, 5, 6 ]

/*
    * 15. forEach(): Ejecuta la función especificada por cada elemento del array
        ? Un forEach no retorna ningun dato
        ? Recibe como argumento en primera posición el valor del elemento, y como segundo y opcional su indice
*/

words.forEach((word, index) => console.log(`Posición ${index}: ${word}`));

//* 16. includes(): Método que retorna TRUE/FALSE si el array INCLUYE el elemento especificado (FUNCIONA SOLO PARA PRIMITIVOS)
const randomPrimitiveArray = ["hola", 3, 5, true, false, true, null, undefined];
console.log(randomPrimitiveArray.includes(null)); // true
console.log(randomPrimitiveArray.includes(true)); // true
console.log(randomPrimitiveArray.includes(5)); // true
console.log(randomPrimitiveArray.includes("como estas")); // false

/*
    * 17. indexOf(): Busca la POSICIÓN/INDICE del PRIMER elemento que encuentra con dicho VALOR PRIMITIVO (SOLO PRIMITIVOS)
        ? Puede recibir un segundo argumento opcional que le indica la posición DESDE LA QUE INICIA A BUSCAR
        ? Si no lo encuentra retorna -1
*/

console.log(randomPrimitiveArray.indexOf(true)); // 3
console.log(randomPrimitiveArray.indexOf("como estas")); // -1

/*
    * 18. lastIndexOf(): Busca la POSICIÓN/INDICE del ÚLTIMO elemento que encuentra con dicho VALOR PRIMITIVO (SOLO PRIMITIVOS)
        ? Puede recibir un segundo argumento opcional que le indica la posición DESDE LA QUE INICIA A BUSCAR
        ? Si no lo encuentra retorna -1
*/

console.log(randomPrimitiveArray.lastIndexOf(true)); // 5
console.log(randomPrimitiveArray.lastIndexOf("como estas")); // -1

// * 19. Array.isArray(): Devuelve TRUE/FALSE si el argumento es un Array o no.
console.log(Array.isArray(randomPrimitiveArray)); // true
console.log(Array.isArray("string")); // false

// * 20. join(): A partir de un ARRAY crea un STRING, donde cada posición está separada por el caracter especificado
console.log(words.join(" -- ")); // "banana -- apple -- soccer -- banana -- apple"

// * 21. keys(): Devuelve a partir de un array un OBJETO ITERADOR, donde cada elemento es los indices del ARRAY
for (const key of randomPrimitiveArray.keys()) {
  console.log(`Indice ${key}`);
}

// * 22. map(): Realiza TRANSFORMACIONES sobre arreglos y RERTORNA uno nuevo a partir de su FUNCION RECIBIDA
const uppercaseWords = words.map((word) => word.toUpperCase());
console.log(uppercaseWords); // [ "BANANA", "APPLE", "SOCCER", "BANANA", "APPLE" ]

/*
    * 23. Array.from(): Se ejecuta sobre la clase Array, permite crear un nuevo array a partir de cualquier objeto (string, sets, etc.) que tenga .length
        ? Sintaxis: Array.from(iterable, mapFn?, thisArg?)
            - iterable: Objeto a partir del cual se quiere reconstruir un array
            - mapFn: Función de mapeo que se quiere aplicar a cada elemento (Opcional)
            - thisArg: Valor a usar como this en el map funcion (Opcional)
*/

const vowels = "aeiouáéíóú";
const uppercaseVowels = Array.from(vowels, (vowel) => vowel.toUpperCase());
console.log(uppercaseVowels);

/*
    * 24. flatMap(): Método que primero TRANSFORMA cada elemento (MAP) y luego lo APLANA (siempre con flat(1))
        ? Devuelve un arreglo nuevo
        ? No acepta depth (siempre hace flat(1))
*/

const flatMapArray = numbers.flatMap((number) =>
  isNaN(number) ? [number, "No existe el doble"] : [number, number * 2],
);
console.log(flatMapArray); // [1, 2, 554, 1108, "Número Random", "No existe el doble", "Número Random", "No existe el doble", "Número Random", "No existe el doble", 667, 1334]

// * 25. Array.of(): Método aplicado sobre la clase Array, que permite crear un nuevo array a partir de los valores pasados como ARGUMENTOS
const months = Array.of("January", "February", "March", "April");
console.log(months); // [ "January", "February", "March", "April" ]

// * 26. pop(): Elimina el ÚLTIMO ELEMENTO del array. No recibe argumento. Retorna el elemento eliminado
console.log(months.pop()); // April
console.log(months); // [ "January", "February", "March" ]

// * 27. push(): Agrega un elemento AL FINAL DEL ARREGLO
months.push("December");
console.log(months); // [ "January", "February", "March", "December" ]

/*
    * 28. reduce(): Funcion REDUCTORA -> A partir de un array lo reduce a un SOLO VALOR (numero, string, objeto, array, etc)
        ? Recibe dos argumentos:
            - Funcion reductora, que toma como parametros, en primer lugar el acumulador y luego el valor actual.
            ? OJO: LA FUNCIÓN SIEMPRE DEBE DE RETORNAR EL ACUMULADOR
            - Valor inicial del acumulador
*/

const priceProductsInCart = [500, 700, 200, 100, 500, 300];
const cartTotal = priceProductsInCart.reduce(
  (total, price) => total + price,
  0,
);
console.log(cartTotal); // 2300

const word = ["E", "d", "d", "i", "e", "S", "a", "n", "t", "i", "a", "g", "o"];
const letterCount = word
  .map((letter) => letter.toLowerCase())
  .reduce((objCounter, letter) => {
    if (!objCounter[letter]) objCounter[letter] = 0;
    objCounter[letter]++;
    return objCounter;
  }, {});

console.log(letterCount);
/* {
  e: 2,
  d: 2,
  i: 2,
  s: 1,
  a: 2,
  n: 1,
  t: 1,
  g: 1,
  o: 1,
} */

// * 29. reduceRight(): Reduce un array a UN SOLO VALOR, pero RECORRE EL ARRAY DE DERECHA A IZQUIERDA
const nums = [1, 2, 3];
const left = nums.reduce((acc, n) => acc - n);
const right = nums.reduceRight((acc, n) => acc - n);

console.log(left); // ((1 - 2) - 3) = -4
console.log(right); // (3 - 2) - 1 = 0

// * 30. reverse(): Invierte un arreglo. SOBREESCRIBE el arreglo original
months.reverse();
console.log(months);

// * 31. shift(): Elimina el PRIMER ELEMENTO de un array. Retorna el elemento eliminado
months.shift();
console.log(months);

//* 32. slice(): Permite SELECCIONAR elementos de un array para hacer COPIAS, permite valores positivos y negativos
const firstTwoMonths1 = months.slice(1);
const firstTwoMonths2 = months.slice(-2);
console.log(firstTwoMonths1);
console.log(firstTwoMonths2);

//* 32. some(): Retorna TRUE/FALSE si ALGUNO de los elementos del array cumple la CONDICIÓN
console.log(priceProductsInCart.some((price) => price >= 1000)); // false
console.log(priceProductsInCart.some((price) => price >= 500)); // true

/*
    * 33. sort(): ORDENA un arreglo a partir de una función de comparación. USA TIMSORT O(n * log n)
        ? Se ordena basado en pares, normalmente llamados (a, b)
        ? Si se quiere ordenar ASCENDENTEMENTE se hace la comparación de A respecto a A
        ? Si se quiere ordenar DESCENDENTEMENTE se hace la comparación de B respecto a A
        ? Si se quiere ordenar numbers se usa (-), si se quiere strings (localCompare())
        ? SOBREESCRIBE el array original
*/

priceProductsInCart.sort((a, b) => a - b);
words.sort((a, b) => b.localeCompare(a));

console.log(priceProductsInCart); // [ 100, 200, 300, 500, 500, 700 ]
console.log(words); // [ "soccer", "banana", "banana", "apple", "apple" ]

/*
    * 34. splice(): Permite AÑADIR/ELIMINAR ELEMENTOS EN POSICIONES CONCRETAS DEL ARREGLO
        ? Sintaxis: array.splice(index, count, item1, ....., itemX)
            - index: Indice a partir del cual se van a añadir/eliminar los elementos
            - count: Número de elementos que se van a eliminar (Si se quiere añadir se pone 0)
            - items: separados como argumentos, son los items que se van a añadir en esa posicion (si se quiere elimnar no se colocan)
*/

// Añadir
words.splice(1, 0, "pizza", "burguer", "hot dog");
console.log(words); // [ "soccer", "pizza", "burguer", "hot dog", "banana", "banana", "apple", "apple" ]

// Eliminar
words.splice(3, 2);
console.log(words); // [ "soccer", "pizza", "burguer", "banana", "apple", "apple" ]

// * 35. toReversed(): Invierte un arreglo igual que .reverse(), pero RETORNA UN NUEVO ARREGLO

// * 36. toSorted(): Ordena un arreglo igual que .sort(), pero RETORNA UN NUEVO ARREGLO

// * 37. toSpliced(): Añade o elimina elementos igual que .splice(), pero RETORNA UN NUEVO ARREGLO

// * 38. toString(): Convierte un arreglo a un string separando cada elemento por comas (,)
const wordsStr = words.toString();
console.log(wordsStr); // soccer,pizza,burguer,banana,apple,apple

// * 39. unshift(): Agrega un elemento al INICIO del arreglo
words.unshift("keyboard");
console.log(words); // [ "keyboard", "soccer", "pizza", "burguer", "banana", "apple", "apple" ]

// * 40. values(): Devuelve a partir de un array un OBJETO ITERADOR, donde cada elemento es el valor correspondiente en el array
for (const value of randomPrimitiveArray.values()) {
  console.log(`Valor: ${value}`);
}

/*
    * 41. with(): Método que permite ACTUALIZAR el VALOR del array en un INDICE en CONCRETO.
        ? Sintaxis: array.with(index, value)
            - index: Indice del elemento que se pretende ACTUALIZAR
            - value: Valor que va a reemplazar el valor original
        ? NO MODIFICA EL ARREGLO ORIGINAL... RETORNA UN NUEVO ARREGLO
*/

const modifiedWords = words.with(0, "Keyboard & Mouse");
console.log(modifiedWords);
