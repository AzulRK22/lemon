# Lemon Restaurant Web App

## Descripción

Lemon es una aplicación web para un restaurante que permite a los usuarios navegar por las secciones de la página, explorar el menú, realizar reservas en línea y más. El proyecto está basado en React y se ha desarrollado en varias fases, con la funcionalidad de **Home** y **Reservations** ya completada. Los usuarios pueden hacer reservas, ver el menú y conocer más acerca del restaurante.

## Secciones

1. **Home**: Página principal con información general y enlaces a otras secciones.
2. **About**: Información sobre el restaurante, su historia y visión (pendiente de implementación).
3. **Menu**: Menú del restaurante con opciones para ver los platos disponibles (pendiente de implementación).
4. **Reservations**: Sistema de reservas en línea donde los usuarios pueden seleccionar la fecha, hora y número de personas para hacer una reserva.
5. **Order Online**: Opción para hacer pedidos en línea (pendiente de implementación).
6. **Login**: Área de inicio de sesión para los usuarios (pendiente de implementación).

### Funcionalidades Completadas

- **Home**: Página de bienvenida con enlaces a las secciones disponibles.
- **Reservations**: Los usuarios pueden realizar una reserva seleccionando la fecha, hora, el número de personas y la ocasión.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **React**: Framework principal para la creación de la interfaz de usuario.
- **React Router**: Para la navegación entre las diferentes secciones de la aplicación.
- **CSS**: Estilos personalizados para el diseño y la presentación.
- **Jest y React Testing Library**: Herramientas para las pruebas unitarias y de integración.
- **Fetch API**: Para obtener la disponibilidad de los horarios y enviar los datos de reserva.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AzulRK22/lemon.git

2. Navega al directorio del proyecto:
    cd lemon
   
4. Instala las dependencias:
    npm install
   
5. Inicia el servidor de desarrollo:
    npm start
    Esto abrirá la aplicación en http://localhost:3000.


## Estructura del proyecto

El proyecto tiene la siguiente estructura:

lemon/
├── public/
│   └── index.html            # Plantilla HTML principal
├── src/
│   ├── components/
│   │   ├── Header.js         # Barra de navegación
│   │   ├── Home.js           # Componente de la página principal
│   │   ├── Menu.js           # Componente del menú (pendiente)
│   │   ├── About.js          # Componente de la sección 'About' (pendiente)
│   │   ├── Reservations.js   # Componente de reservas (completado)
│   │   ├── Login.js          # Componente de inicio de sesión (pendiente)
│   │   └── OrderOnline.js    # Componente de pedidos en línea (pendiente)
│   ├── api.js                # Funciones para interactuar con la API (por ejemplo, obtener horarios de reserva)
│   ├── App.js                # Componente principal que maneja las rutas
│   ├── index.js              # Punto de entrada principal
│   ├── setupTests.js         # Configuración de las pruebas
├── package.json
├── README.md
└── .gitignore

## Screenshots

   ### Home
   ![Home Screenshot](images/home.png)
   ### Reservations
   ![Home Screenshot](images/home.png)

## Contrubuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes alguna mejora en mente, por favor sigue estos pasos para colaborar en el proyecto:

1. **Haz un fork del repositorio**:
   - Dirígete a la página del repositorio en GitHub.
   - Haz clic en el botón **Fork** en la esquina superior derecha.

2. **Clona el repositorio**:
   - Clona el repositorio en tu máquina local usando el comando:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
3. Crea una nueva rama para tus cambios:
    En tu terminal, navega a la carpeta del proyecto.
    Crea una nueva rama para la funcionalidad o corrección de errores en la que vas a trabajar:
    git checkout -b feature/nueva-funcionalidad
4. Realiza tus cambios:
    Modifica, agrega o elimina archivos según sea necesario.
    Asegúrate de seguir las buenas prácticas y de escribir pruebas si es necesario.
    Realiza un commit de tus cambios:
    git commit -am "Descripción de lo que hiciste"
5. Sube los cambios a tu repositorio:
    Sube la rama con los cambios a tu repositorio remoto en GitHub:
    git push origin feature/nueva-funcionalidad
6. Abre un Pull Request:
    Dirígete al repositorio original en GitHub y abre un pull request para que tu rama sea revisada y fusionada con el repositorio principal.
    Proporciona una descripción clara y detallada de lo que has hecho en el pull request para facilitar la revisión.

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## **Contact**
For more details or to collaborate on this project, please contact:  
https://www.azulrk.com
