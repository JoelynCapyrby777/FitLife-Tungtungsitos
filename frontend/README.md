# FitLife 🚀

**Pues es el front de la app jejejeje.**

**Este documento sirve como guía central para entender la arquitectura, las decisiones de diseño y el flujo de trabajo del proyecto.**

## 1. Filosofía y Principios Clave

* **Arquitectura Basada en Componentes:** La UI está dividida en componentes pequeños y reutilizables.
* **Sistema de Diseño Centralizado:** Se utiliza un sistema de diseño basado en **Variables de CSS** (`<span class="selected">:root</span>` en `<span class="selected">index.css</span>`) para mantener la consistencia visual.
* **Nomenclatura BEM en CSS:** Se aplica la metodología BEM (`<span class="selected">Bloque__Elemento--Modificador</span>`) para escribir CSS modular y sin colisiones.
* **Separación de Responsabilidades:** La estructura de carpetas está organizada por función para que el código sea predecible y fácil de encontrar.
* **Manejo de Estado Global con Context API:** Se utiliza el Context de React para gestionar el estado global (como las notificaciones Toast) de una manera limpia.

## 2. 📁 Estructura del Proyecto

```
src/
├── api/          # Lógica para la comunicación con el backend.
├── assets/       # Archivos estáticos como logos.
├── components/   # Componentes reutilizables de la UI.
│   ├── layout/   # Componentes que definen la estructura (Header, Footer, Layout).
│   └── ui/       # "Ladrillos" básicos de la UI (Button, Input, Spinner).
├── context/      # Proveedores de Context para el estado global (ToastContext).
├── pages/        # Componentes que representan páginas completas (LoginPage).
├── routes/       # Configuración de las rutas (AppRoutes).
└── types/        # Definiciones de tipos e interfaces de TypeScript.

```

## 3. Componentes Reutilizables

### Componentes UI (`<span class="selected">/ui</span>`)

* **Input** **: Campo de texto con etiqueta flotante animada y estado de error visual.**
* **Button** **: Botón personalizable con estados de **`<span class="selected">hover</span>`, `<span class="selected">disabled</span>` y un `<span class="selected">Spinner</span>` integrado para `<span class="selected">isLoading</span>`.
* **Alert** **: Componente para notificaciones "Toast" de éxito, error, etc.**
* **Spinner** **: Animación de carga para indicar procesos en segundo plano.**
* **FormContainer** **: Contenedor estilizado para agrupar formularios.**

### Componentes de Layout (`<span class="selected">/layout</span>`)

* **Header** y  **Footer** **: Encabezado y pie de página de la aplicación.**
* **Layout** **: Componente que define la "cáscara" de la aplicación, renderizando el **`<span class="selected">Header</span>`, `<span class="selected">Footer</span>` y el contenido de la página actual a través de un `<span class="selected"><Outlet /></span>`.

## 4. Cómo empezar

**Clona el repositorio:**

```
git clone [https://github.com/JoelynCapyrby777/FitLife-Tungtungsitos.git](https://github.com/JoelynCapyrby777/FitLife-Tungtungsitos.git)

```

**Dirígete a la raíz del front:**

```
cd frontend

```

**Instala las dependencias:**

```
npm install

```

**Inicia el servidor de desarrollo:**

```
npm run dev
```

## 5. 🛠️ Tecnologías

* **React** con **TypeScript**
* **Vite**
* **React Router** para la navegación
* **[Mas tecnologías ki pondre al rato]**

## 6. 👥 Contribuciones

1. Vete a tu rama (**OJO CON TRABAJAR EN MAIN** 😡) (`git checkout nombre-de-tu-rama`).
2. Haz tus cambios y commitea (`git commit -m 'feat: Añade nueva funcionalidad'`).
3. Sube tus cambios a tu rama (`git push origin feature/nombre-de-tu-rama`).
4. Crea un Pull Request.
5. Luego el jefazo verá ki show, si está bien o nadota.
