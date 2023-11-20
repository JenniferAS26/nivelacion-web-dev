## MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS ASINCRONÍAS Y PETICIONES HTTPS)

- Definir brevemente el concepto de localStorage y sessionStorage.
    - LocalStorage y sessionStorage son opciones de almacenamiento en los navegadores web, que permiten almacenar datos en forma de llave valor.

- Describir las diferencias claves entre local Storage y sessionStorage.
  - Las principales diferecias radican en la persistencia y el alcance; los datos almacenados en el localStorage se mantienen si se cierra el navegador y son accesibles desde cualquier pestaña o ventana. Mientras que los datos del sessionStorage solo se mantienen mientras la pestaña o el navegador estén abiertos y solo son accesibles desde allí.

- ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de capacidad?
  - Permiten almacenar datos de manera simple, usando los mismos métodos (setItem, getItem, removeItem y clear)
- ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?
  - Las promesas son objetos que representan el estado de una operación que se ejecuta de manera asíncrona (Pending, fulfilled o rejected) y su respectivo valor resultante. 
- Explica el concepto de asincronía en programación y cómo las promesas ayudan a
manejar operaciones asincrónicas.
  -  Aincronismo es la capacidad de un programa para realizar tareas de forma independiente al flujo secuencial del mismo y tambien de manera concurrente, es decir, varias tareas pueden estar en proceso al mismo tiempo.
- Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación
asincrónica, como una solicitud de red.
  - 
- ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?
  - Un JSON server tiene como finalidad simular una Web API que implementa todos los metodos HTTP (GET, POST, DELETE, PATCH, PUT), a partir de un documento JSON sobre el que se realizan todas la operaciones.
- ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?
  - JSON Server es una solución que permite generar un backend de manera rápida, facilitando la realización de pruebas durante el desarrollo y la resolución de problemas antes de llevar el código a entornos productivos.

- ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().
y las palabras claves async/await.
  - Sintaxis: then() es un método que puede ser encadenado a una promesa y toma dos callback como parámetros (onFulfilled, para cuando se completa satisfactoriamente y onRejected en el caso contrario). async/await usa la palabra clave 'async' para definir una funcion asincrona y 'await' para pausar la ejecución hasta que la promesa ha sido resuelta.
  - Facilidad para leer el codigo: Con then(), se puede llegar a una estructura llamada callback hell, lo que hace el código más dificil de mantener.
  - Manejo de errores: Con 'then()' los errores se manejan usando un bloque 'catch()' por separado u otro bloque 'then()' En el caso de async/await se realiza a traves de bloques try/catch.
- Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar
solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.
  - Instalar JSON Server
```npm install -g json-server```
  - Crear un archivo db.json que contenga lo siguiente:
```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
  - Iniciar el JSON server:
``` json-server --watch db.json ```
  - Realizar peticiones a la API:  Al hacer una petición a http://localhost:3000/posts/1, se obtiene como respuesta:
``` { "id": 1, "title": "json-server", "author": "typicode" } ```
  - Usando una herramienta como Postman, se pueden hacer peticiones de tipo GET, para obtener datos, POST, para agregar nuevos registros, PUT/PATCH para realizar modificaciones y DELETE para eliminar registros.

- Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes
HTTP en JavaScript.
  - Manejo de errores: 'fetch' no considera las respuestas 400 o 500 como errores, mientras que 'axios' rechaza aquellas respuestas por fuera del rango de los 200.
  - Sintaxis: 'fetch' es nativo del navegador, retorna promesas y usa 'then()' para manejar la respuesta obtenida. 'axios' es una libreria de terceros que soporta el uso de 'async/await'.
  - Interceptors: Permiten interceptar y modificar una peticion o respuesta de manera global. 'fetch' no los soporta por defecto. 'axios' los soporta a traves de 'axios.interceptors.request.use', permitiendo modificar la peticion antes de ser enviada.

- ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?
  - Las peticiones HTTP son el mecanismo para integrar el frontend con una API Web, además permiten obtener recursos necesarios para una aplicación web, tales como HTML, CSS y archivos JavaScript.
- Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y
POST.
  - Fetch:
GET
```
fetch('https://example.com/persons/1')
  .then(response => response.json())
  .then(data => console.log('GET Response (fetch):', data))
  .catch(error => console.error('Error:', error));
```
POST
```
fetch('https://example.com/persons', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    lastname: 'Doe'
  }),
})
  .then(response => response.json())
  .then(data => console.log('POST Response (fetch):', data))
  .catch(error => console.error('Error:', error));
```

  - Axios

GET
```
axios.get('https://example.com/persons/1')
  .then(response => console.log('GET Response (Axios):', response.data))
  .catch(error => console.error('Error:', error));
```
POST
```
axios.post('https://example.com/persons', {
  title: 'John',
  lastname: 'bar',
})
  .then(response => console.log('POST Response (Axios):', response.data))
  .catch(error => console.error('Error:', error));
```


- Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo
web.
  - Evita errores inesperados que podrian hacer que la aplicación se rompa.
  - Permite proporcionar más información sobre un eventual error al usuario.
  - Favorece la estabilidad de la aplicación, anticipando posibles errores y garantizando que la aplicación siga funcionando aún cuando algo ha salido mal.
  - Al generar registros basados en errores que han sido manejados adecuadamente, se facilita la depuración de la aplicación, ya que resulta más sencillo encontrar la causa raíz de un error.

- Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.
  - El método 'catch' se usa en el manejo de errores que ocurren en cualquier punto de la cadena de promesas.
  - Agregar un segundo 'then()', permite que el primero se encargue del curso normal de la aplicación, mientras que el segundo, toma el control en caso de error.

- Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar
una solicitud de red.
  - EL siguiente codigo muestra como realizar manejo de errores cuando se realiza una petición usando Axios

```
axios.get('https://example.com')
  .then(response => {
    // Manejo de respuesta exitosa
  })
  .catch(error => {
    if (error.response) {
      // Manejo de errores cuando se realiza la petición, pero el servidor respondió con un código diferente a 2XX
    } else if (error.request) {
      // Manejo de error, cuando al realizar la petición, no se recibe respuesta.
    } else {
      // Este bloque de código se ejecuta cuando hubo un problema al realizar la petición.
    }
  });

```