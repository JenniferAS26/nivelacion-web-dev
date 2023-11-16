
## MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN
- ¿Qué significa HTML y cuál es su función en el desarrollo web?
    - Las siglas HTML significan "HyperText Markup Language", la función principal de este es estructurar el contenido
- ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas esenciales.
    - La siguiente es la estructura básica de un documento HTML
    ```HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        
        </body>
        </html>
    ```
    - Las etiquetas básicas son: 
        - <!DOCTYPE html> que define la versión del HTML
        - <html> nos indica el contendor principal de la página
        - <head> contiene los metadatos, enlaces y elementos que no se ven directamente en la página
        - <title> con esta etiqueta podemos definir el titulo de la página
        - <body> Es la etiqueta donde se renderiza toda el contenido de la página
- ¿Qué es CSS y cuál es su propósito en el desarrollo web?
    - CSS significa en español Hojas de Estilo en Cascada o en inglés Cascading Style Sheets, su principal propósito es definir la apariencia visual de los elementos HTML en términos de estilo, color, tamaño, etc
- ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al meno s tres tipos de selectores CSS y cómo la especificidad afecta a la aplicación de estilos en un proyecto de desarrollo web Frontend. Proporcionar ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver conflictos de estilos.
    - Los selectores son patrones de elementos y otros términos le indican al navegador que elementos del HTML se está seleccionando para aplicarles alguna regla especifica
    - La especificidad es la manera en la que los navegadores deciden cuando una regla tiene la misma importancia cual de estas reglas se aplicará.
    ```CSS
        div {
            width: 80px;
            height: 80px;
            border-radius: 10px;
            background-color: palevioletred;
        }

        .square {
            background-color: paleturquoise;
        }
    ```
- Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado usar y por qué.
    - Los estilos en linea (inline) son los estilos que aplicamos directamente en el elemento HTML utilizando el atributo `style`
    ```HTML
        <div style="background-color: palevioletred; border-radius: 50%;"></div>
    ```
    - Los estilos internos (embedded) son los que aplicamos a través de la etiqueta `<style>` y la ubicamos dentro de la etiqueta `<head>`
    ```HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./styles.css">
        <style>
            div {
            width: 150px;
            height: 150px;
            color: green;
            display: grid;
            place-items: center;
            }
        </style>
        </head>
        <body>
            <div style="background-color: palevioletred; border-radius: 50%; color: bisque;">Inline</div>
        <div>Embedded</div>
        </body>
        </html>
    ```
    ![App Screenshot](https://res.cloudinary.com/dkd5jyxby/image/upload/v1700174700/Screenshot_2023-11-16_174210_w03qkb.png)
    - Estilos externos (external) son los estilos que guardamos de manera separada utilizando archivos con la extensión `.css` y los podemos enlazar a través de la etiqueta `<link>` dentro de la etiqueta `<head>`
    ```HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./styles.css">
        <style>
            div {
                width: 150px;
                height: 150px;
                color: green;
                display: grid;
                place-items: center;
            }
        </style>
        </head>
        <body>
            <div style="background-color: palevioletred; border-radius: 50%; color: bisque;">Estilos en linea</div>
            <div>Embedded</div>
            <div id="square">External</div>
        </body>
        </html>
    ```
    ```CSS
        #square {
            width: 100px;
            height: 100px;
            background-color: paleturquoise;
            color: blue;
            font-size: 22px;
        }
    ```
    ![App Screenshot](https://res.cloudinary.com/dkd5jyxby/image/upload/v1700175199/Screenshot_2023-11-16_175306_yxxuil.png)
- ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?
    - Flexbox es un modelo de diseño de CSS que nos permite crear diseños más flexibles, sobre todo cuando intentamos distribuir elementos en un contendor
- Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles.
    - Al contendor padre debemos dotarlo con las siguientes propiedades
        - `display: flex`: con esta propiedad dotamos al contenedor de propiedades flexibles
        - `flex-direction`: nos permite establecer la dirección principal del contenido ya sea fila `row` o columna `column` y sus versiones reversas
        - `justify-content`: nos permite alinear el contendido a lo largo del eje pricipal 
        - `align-items`: nos permite alinear el contendido a lo largo del eje transversal 
- ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?
    - Es un modelo bidimensional para crear diseños en CSS, su principal diferencia con flexbox es que éste maneja un model unidimensional
- Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.
    ```HTML
        <body>
            <div style="background-color: palevioletred; border-radius: 50%; color: bisque;">Estilos en linea</div>
            <div>Embedded</div>
            <div id="square">External</div>
            <div></div>
            <div></div>
            <div></div>
        </body>
    ```
    ```CSS
        body {
            width: 100%;
            height: 100%;
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(3, 150px);
            grid-template-rows: auto;
            gap: 20px;
        }
    ```
    ![](https://res.cloudinary.com/dkd5jyxby/image/upload/v1700176701/Screenshot_2023-11-16_181751_qxpjqw.png)
- ¿Qué significa el diseño responsivo en el contexto del desarrollo web?
    - Con diseño responsivo nos referimos a la practica de crear nuestros sitios web de manera adaptable a diferentes tipos de dispositivos con sus diferentes tamaños 
- Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.
    - Media Queries
    - Imagenes flexibles 
    - Medidas relativas (rem, em)
