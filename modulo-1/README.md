## Módulo sobre lógica, lógica de programación y programación con JavaScript

- ¿Qué es la lógica en el contexto de la programación? Y explicar por qué es importante en el desarrollo web Frontend. 
    - Lógica es relacionar y organizar de manera cohesiva y coherente una sucesión de ideas y en el contexto de programación Lógica es la organización coherente de los pasos o intrucciones del programa para que sea ejecutado exitosamente.
- Definir el concepto de “algoritmo” y proporcionar un ejemplo sencillo de un algoritmo relacionado con la lógica de programación.
    - Un algoritmo es un procedimiento que se desarrolla por etapas, también puede entenderse como un conjunto de reglas que se deben seguir para cumplir con alguna tarea
    `Algoritmo para hacer una receta de cocina`
    - 
    Seleccionar la receta que se desea preparar
    Buscar en la cocina si estan los ingredientes necesarios
    Recolectar los ingredientes necesarios para la preparación
    Lavar los ingredientes
    Preparar los utensilios para cortar y almacenar los ingredientes
    Encender el fuego de la estufa 
    Poner ollas o cazuela al fuego
    Poner a cocinar los ingredientes que lo requieran según la receta
    Revolver los ingredientes que esten al fuego
    Retirar del fuego
    Servir

    
    
- ¿Qué son estructuras de control en la programación?, ¿Cuáles son los tipos de estructuras de control y las estructuras más comunes de cada tipo?, Describir al menos dos tipos de estructura de control, explicar por qué son importantes y proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend.
    - Las estructuras de control permiten controlar el flujo en que distintas instrucciones de un algoritmo se van a ejecutar, existen 3 tipos de estructuras de control 
        - Secuenciales 
        - Selectivas
        - Iterativas
        Las estructuras que permiten modificar el flujo de ejecución lo hacen a traves de las instrucciones `if`, `else`, `switch`, `while`, `do while` y `for`. 
        - Solucionemos el siguiente problema: `Leer dos valores numéricos enteros e indicar cuál es el mayor y cuál es el menor. Considerar que ambos valores son diferentes.`
         ```javascript
            let firstNumber = 16
            let secondNumber = 9

            if (firstNumber > secondNumber) {
            console.log(`El número mayor es ${firstNumber}`)
            } else {
            console.log(`El número mayor es ${secondNumber}`)
            }
        ```
![estructuras](https://disenowebakus.net/imagenes/articulos/estructuras-de-control.jpg)
- Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.
    - Las variables ante de ECMAScript 6 se declaraban con la palabra reservada `var`
    - Uno de los problemas más grande que se presentaba era que esta variable era muy insegura y por esto se podía reescribir casi en cualquer parte de nuestro código
- ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una.
    - Existe tres maneras de declarar funciones en JavaScript, `declaración de función`, `expresión de función` y `función flecha`
    ```javascript
        /* Función convencional */
        function saludar() {
            console.log('Hola)
        } 
        /* Expresión de función */
        let saludar = function() {
            console.log('Hola)
        }
        /* Función flecha */
        const saludar = () => {
            console.log('Hola)
        }
    ```
- ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones. 
    - Las funciones nos permiten reutilizar fragmentos de código 
    - Las funciones facilitan la legibilidad del código
    - Facilita la depuración y mantenimiento del código
    - Las funciones flecha permiten definit de manera compacta una función convencional y mejoran significativamente la legibilidad del código
- ¿Cuál es la diferencia entre parámetro y argumento? 
    - Usualmente el término parámetro a menudo se usa para referirse a la variable en la declaración, el parámetro es la representación simbolica de un valor
    - El término argumento se usa para referise al valor que se envia, argumento es el valor como tal.
- Definir el concepto de Callback y proporcionar un ejemplo práctico. 
    - Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
    - [fuente: MDN](https://developer.mozilla.org/)
    ```javascript
       function sayHi(name) {
        alert("Hello " + name);
        }

        function userEntry(callback) {
        let name = prompt("Please enter your name");
        callback(name);
        }

        userEntry(sayHi);
    ```
- ¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones? Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.
    - El término `hoisting` es un término usado para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. 
    - El hosting solo aplica a variables declaradas con `var`
    ```javascript
        console.log(x); 
        var x = 5; 
    ```
- Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre este concepto. Indicar, también, cómo se declaran estas estructuras de datos. 
    - Un objeto en términos generales es una estructura de datos que permita organizar y almacenar información de una manera eficiente. Estan constituidos por una colección de pares llamadas llve-valor o key-value en ingles, un objeto puede almacenar diferentes tipos de datos, string, number, etc
     ```javascript
        const person = {
            name: 'Jennifer,
            age: '29'
        }
    ```
- ¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto? 
    - Las propiedades son los pares llave-valor que permiten almacenar los datos.
    - Los métodos son una especie de funciones que están realcionadas a los objetos y permiten realizar acciones o realizar ciertas operaciones sobre los datos del objeto, a estos métodos se accede con la notación de punto
- Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.
    - Existe la notación de punto para acceder a una propiedad por ejemplo `person.name`, esta es la forma más común y sencilla para acceder a las propiedades de un objeto.
    - También existe la notación de corchetes `person['name']`, esta notación se usa para acceder de manera dinámica a propiedades cuyos names no se conozcan de antemano, com por ejemplo los datos de una API
- ¿Existe alguna forma de recorrer las propiedades de un objeto? En caso negativo, explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar una situación en la cual sea muy útil recorrer las propiedades de un objeto. 
    - Existen diversas maneras de recorrer objetos pero entre las más comunes está hacerlo por medio de ciclos tales como `for...in` y  `Object.keys()`
    - La utilidad de recorrer objetos se hace más evidente a la hora de trabajar con datos dinámicos como objetos JSON provenientes de una API
    ```javascript
        /* for...in */
        const person = {
            name: 'Jennifer,
            age: '29'
        };

        for (const key in person) {
        console.log(`Llave: ${key}, Valor: ${person[key]}`);
        }

        /* Object.keys() */
        const person = {
            name: 'Jennifer,
            age: '29'
        };

        const properties = Object.keys(person);

        for (const key of properties) {
        console.log(`Propiedad: ${key}, Valor: ${person[key]}`);
        }
    ```
- ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar? 
    - La utilidad de los objetos en la progamación es inmensa, entre algunas se encuentra encapsulamiento de datos, interacción con el DOM, organización de datos.
    - En JavaScript los objetos tienen la capacidad de almacenar una gran gama de tipos de datos tales como
        - Datos primitivos, como strings, números, booleanos, etc
        - Objetos 
        - funciones
        - Arrays
- ¿Qué es un array en JavaScript y por qué son esenciales? 
    - Los arrays son estructuras de datos que usamos para almacenar colecciones de datos de manera organizada, son escenciales en la programación por su capacidad de almacenar datos de manera ordenada, su flexibilidad al poder almacenar diferentes tipos de datos en una misma estructura, los arrays son ideales para realizar operaciones que requieran repetición, poseen métodos y propiedades incorporadas, son ideales para representar listas de elementos, y también se pueden utilizar para construir estructuras de datos mucho más complejas, tales como matrices
- ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo. 
    - Podemos acceder a un elemento dentro de un array utilizando los corchetes y accediendo al inidice numerico de ese elemento, el indice comienza desde la posición cero
    ```javascript
        const clothes = ['shirt', 'skirt', 'jeans']
        const firstItem = clothes[0]
        console.log(firstItem)
    ```
- Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web. 
    - Las funcions de los arrays también son conocidas como métodos de los arrays, algunos de los más utilizados son
        - .map(): este método transforma un array en otro bajo cierta condición
        - .filter(): este método devuelve otro array que contiene algunos de los items del array original basado en cierta condición
        - .find(): cuando aplicamos este método sobre un array nos va a devolver el primer item que coincida con cierta condición dada
- Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array
    ```
        const productList = [
            { id: 1, name: "Smartphone", price: 500 },
            { id: 2, name: "Laptop", price: 1200 },
            { id: 3, name: "Auriculares", price: 100 },
            { id: 4, name: "Tablet", price: 350 },
        ];

        const productListNames = productList.map((product) => product.name);
        console.log(productListNames); // ["Smartphone", "Laptop", "Auriculares", "Tablet"]

        const expensiveProducts = productList.filter((product) => product.price >= 500);
        console.log(expensiveProducts);
        /*
            [
                { id: 1, nombre: "Smartphone", precio: 500 },
                { id: 2, nombre: "Laptop", precio: 1200 },
            ]
        */
    ```









