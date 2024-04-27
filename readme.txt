1.- Configuración inicial:
Tener Node.js instalado en el sistema.
Crea una base de datos en PostgreSQL con las columnas especificadas: Nombre, Rut, Curso y Nivel.
2.- Instalación del paquete “pg”:
Abrir una terminal y navegar hasta la ubicación de tu proyecto.
Ejecutar el siguiente comando para instalar el paquete “pg”:
npm install pg
3.- Conexión a la base de datos:
Crear un archivo always_music.js para manejar la conexión a la base de datos.
4.- Funciones asíncronas para cumplir con los requerimientos:
Crear un archivo estudiantes.js donde implementar las funciones requeridas.

No entiendo la verdad practicamente nada.

2do Intento por seguir requerimientos.

1.- Obtener argumentos desde la línea de comandos:
En Node.js, puedes acceder a los argumentos pasados por línea de comandos utilizando el objeto process.argv. Este objeto es un array que contiene los argumentos de invocación de la línea de comandos.
El primer elemento (process.argv[0]) contiene la ruta completa al ejecutable de Node, y el segundo elemento (process.argv[1]) contiene la ruta completa del archivo JavaScript en ejecución (tu programa).

2.-Interacción con la base de datos:
Utiliza el paquete “pg” para conectarte a la base de datos PostgreSQL.
Crea funciones asíncronas para realizar las operaciones requeridas (registro, consulta, actualización y eliminación de estudiantes) utilizando los argumentos proporcionados desde la consola.

3.- Suferencia de ejecución
Ejecutar tu programa desde la consola con los comandos adecuados, como node app.js registrar Juan 12345678 A1 Avanzado.

2do Desafio complementario desarrollo.

1.- Configuración inicial:
Asegúrate de tener Node.js instalado en tu sistema.
Clona el repositorio del proyecto o crea una nueva carpeta para tu aplicación.

2.- Instalación de dependencias:
Abre una terminal y navega hasta la ubicación de tu proyecto.
Ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install pg

3.- Conexión a la base de datos usando Pool:
Crea un archivo ejemplobd.js para manejar la conexión a la base de datos utilizando la clase Pool.

4.- Consultas con texto parametrizado y captura de errores:
Crea un archivo estudiantes.js donde implementarás las funciones requeridas.
Utiliza consultas con texto parametrizado y captura los posibles errores.

5.- Ejecución desde la línea de comandos:
En tu archivo principal (por ejemplo, index.js), procesa los argumentos pasados desde la línea de comandos y llama a las funciones correspondientes.

6.- Prueba tu aplicación:
Ejecuta tu programa desde la consola con los comandos adecuados, como node index.js agregar Sebas '123456789' 'A7' 'Principiante'.
