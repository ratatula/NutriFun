Requerimientos funcionales de NutriFun

1. Registro de usuario
Este requerimiento permitirá que los usuarios se registren en la aplicación proporcionando un correo electrónico y una contraseña.
- Entradas: Correo electrónico, contraseña.
- Salidas: Confirmación de registro o mensaje de error en caso de datos inválidos.
- Precondiciones: El usuario no debe estar registrado previamente.
- Postcondiciones: El usuario queda registrado en la base de datos.

2. Inicio de sesión
Este requerimiento permitirá que los usuarios inicien sesión utilizando el correo electrónico y la contraseña registrados con anterioridad.
- Entradas: Correo electrónico, contraseña.
- Salidas: Acceso a la aplicación o mensaje de error en caso de datos incorrectos.
- Precondiciones: El usuario debe estar registrado en la aplicación.
- Postcondiciones: El usuario accede a la pantalla principal de la aplicación.

3. Contador de calorías
Este requerimiento permitirá que los usuarios registren los alimentos consumidos y la aplicación calculará el total de calorías ingeridas durante el día.
- Entradas: Tipo de alimento, cantidad consumida.
- Salidas: Calorías totales consumidas por día.
- Precondiciones: El usuario debe haber iniciado sesión.
- Postcondiciones: Los datos se guardan y se actualizan en el perfil del usuario.

4. Registro de Ejercicio
Este requerimiento permitirá que los usuarios registren los ejercicios realizados y la aplicación calculará las calorías quemadas.
- Entradas: Tipo de ejercicio, duración.
- Salidas: Calorías quemadas estimadas.
- Precondiciones: El usuario debe haber iniciado sesión.
- Postcondiciones: Los datos del ejercicio se guardan y las calorías quemadas se suman al balance diario.

5. Ayuno Intermitente
Este requerimiento permitirá que los usuarios activen el modo de ayuno intermitente y la aplicación llevará un registro de los tiempos de ayuno y alimentación.
- Entradas: Hora de inicio del ayuno.
- Salidas: Temporizador para mostrar el tiempo restante de ayuno.
- Precondiciones: El usuario debe haber iniciado sesión.
- Postcondiciones: Los tiempos de ayuno se registran en el perfil del usuario.

6. Foro Comunitario
Este requerimiento permitirá que los usuarios accedan a un foro donde pueden compartir recetas saludables y progresos, además de interactuar con otros usuarios.
- Entradas: Texto del mensaje (publicación).
- Salidas: Publicación en el foro visible para otros usuarios.
- Precondiciones: El usuario debe haber iniciado sesión.
- Postcondiciones: El mensaje se publica y es visible para los demás usuarios.

7. Personalización del Perfil
Este requerimiento permitirá que los usuarios personalicen su perfil con un avatar, nombre de usuario y otros detalles.
- Entradas: Imagen de perfil, nombre de usuario, bio.
- Salidas: Datos actualizados del perfil.
- Precondiciones: El usuario debe haber iniciado sesión.
- Postcondiciones: Los datos se actualizan en el perfil del usuario.

8. Historial de Actividades
Este requerimiento permitirá que los usuarios vean un historial de sus actividades anteriores, como calorías consumidas, ejercicios realizados y periodos de ayuno.
- Entradas: Ninguna (consulta de datos).
- Salidas: Lista de actividades registradas por el usuario.
- Precondiciones: El usuario debe haber iniciado sesión.
- Postcondiciones: Se muestra el historial de actividades almacenado.

9. Notificaciones
Este requerimiento enviará recordatorios al usuario, como notificaciones sobre el ayuno intermitente o metas de calorías.
- Entradas: Ninguna.
- Salidas: Notificaciones push en el dispositivo del usuario.
- Precondiciones: El usuario debe haber configurado las notificaciones.
- Postcondiciones: El usuario recibe las notificaciones configuradas.