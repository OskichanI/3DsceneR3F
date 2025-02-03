# 3DsceneR3F

Este proyecto proporciona una escena 3D interactiva desarrollada con React y Three.js utilizando React Three Fiber (R3F). Incluye varias funcionalidades y componentes que permiten una experiencia de usuario inmersiva y personalizable.

## Funcionalidades Principales

- **Escena 3D Interactiva**: Una escena 3D que permite la navegación y la interacción con diferentes objetos.
- **Componentes Dinámicos**: Componentes que se pueden escalar y personalizar fácilmente.
- **Animaciones**: Animaciones suaves y personalizables para los objetos en la escena.
- **Carga de Modelos 3D**: Soporte para cargar y visualizar modelos 3D en diferentes formatos.
- **Iluminación Personalizable**: Iluminación dinámica que se puede ajustar para diferentes efectos visuales.

## Estructura del Proyecto

```plaintext
3DsceneR3F/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── public/
│   ├── .DS_Store
│   └── ...
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── Scene.jsx
│   │   ├── ModelLoader.jsx
│   │   ├── AnimationController.jsx
│   │   ├── LightController.jsx
│   │   └── DynamicObject.jsx
│   ├── assets/
│   │   ├── models/
│   │   └── textures/
│   ├── hooks/
│   │   └── useAnimation.js
│   ├── main.jsx
│   ├── services/
│   │   ├── Api.js
│   │   └── ModelService.js
│   └── styles/
│       ├── Scene.css
│       ├── ModelLoader.css
│       ├── AnimationController.css
│       ├── LightController.css
│       └── DynamicObject.css
└── vite.config.js
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd 3DsceneR3F
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `npm run preview`: Previsualiza la aplicación construida.

## Uso

Para iniciar el proyecto en modo de desarrollo, ejecuta:

```bash
npm run dev
```

## Elementos en Desarrollo

- **Conexión de Datos**: Algunos componentes, como el cargador de modelos y el controlador de animaciones, están a la espera de ser conectados con los datos correctos.
- **Integración de API**: La integración completa con las APIs definidas en `ModelService` aún está en progreso.
- **Validación de Formularios**: La validación de formularios en componentes como `Login` está en desarrollo.

## Elementos Escalables y Dinámicos

- **Componentes Dinámicos**: Los componentes como `DynamicObject` y `LightController` están diseñados para ser altamente escalables y personalizables.
- **Animaciones**: El `AnimationController` permite agregar y controlar animaciones de manera dinámica.
- **Carga de Modelos**: El `ModelLoader` soporta múltiples formatos de modelos 3D, lo que lo hace muy flexible para diferentes tipos de escenas.
