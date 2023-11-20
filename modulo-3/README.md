## MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM

- ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación
web?
  - Es una interfaz que permite a programas y scripts acceder y actualizar el contenido, estilo y estructura de un documento web. 

- ¿Cuál es la diferencia entre el DOM y el HTML en una página web?
  - El DOM es la estructura de arbol que el navegador construye a partir de un documento HTML y que puede ser manipulado con JavaScript, mientras que HTML es aquello que se retorna como respesta de una petición WEB.

- ¿Porqué es importante entender y manipular el DOM en el desarrollo web Frontend?
  - La interacción con el DOM es aquello que permite definir el comportamiento de una página web cuando un usuario interactúa con ella y esta es la base del desarrollo Frontend. 

- ¿Qué son los eventos del DOM y cuál es su función en una página web?
  - Los eventos del DOM son señales o mensajes que se envían cuando algo sucede en una aplicación. La finalidad de los eventos es facilitar la interacción de los usuarios con una página web, permitiendo que estas respondan a sus acciones.

- Proporcionar ejemplos de eventos prácticos y comunes , como click ””, submit y load o
DOMContentLoad
  - MouseOver: Ocurre cuando el puntero del mouse se encuentra dentro o fuera de un elemento.
  - ClickEvent: Ocurre cuando se da clic a un elemento
  - KeyDown, Keypressed Events: Ocurre cuando se oprime o suelta una tecla del teclado.
  - Submit Event: Ocurre cuando un formulario es enviado.
  - Change event: Ocurre cuando el valor de un elemento input cambia.

- ¿Por qué es importante manejar eventos en la interacción usuario web y cómo se
añaden controladores de eventos a los elementos del DOM?

  - Los eventos favorecen la interaccion del usuario con la pagina web. Los event listeners es la funcionalidad que permite capturar los eventos sobre los elementos y manipular el comportamiento de los mismos.

- Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript.
  - GetElementById: Selecciona elementos por su id unico (id).
  - GetElementByClassName: Selecciona elementos por su nombre de clase (class).
  - Queryselector: Selecciona el primer elemento que coincide con un selector de CSS.

- ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript?
  - Se usa el metodo document.createElement(<nombre>) junto con otros metodos para agregar contenido (textContent), definir atributos (id o class) y agregar al DOM (appendChild).

- ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web
dinámicas e interactivas?
  - La manipulacion del DOM permite cambiar el contenido de una pagina web sin la necesidad de recargarla en su totalidad. Adicionalmente, la pagina puede ser configurada para que responda a las acciones de los usuarios, favoreciendo la interactividad.

- Explicar brevemente los conceptos event bubbling y event delegation en el contexto
de eventos del DOM
  - Event bubbling: Es una fase en la propagación de un evento en el DOM en la que dicho evento se sigue propagando hacia sus ancestros, hasta la raíz del documento.
  - Event Delegation: Es una técnica que consiste en agregar un event listener a un ancestro común de dos o mas elementos, en lugar de agregarlos a cada elemento de forma individual.

- ¿Por qué son relevantes los conceptos event bubbling y event delegation en la
gestión de eventos en páginas web con múltiples elementos interactivos?
  - Estas técnicas cobran importancia en la medida que permiten reducir la cantidad de event listeners necesarios para agregar interactividad a una página web, lo que facilita su mantenimiento y optimización.

