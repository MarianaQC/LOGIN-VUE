# 🔐 Sistema de Login con Vue.js + TypeScript

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)

**Un proyecto educativo para aprender Vue.js 3, TypeScript y manejo de autenticación con localStorage**

[🚀 Demo](#-cómo-ejecutar) • [📖 Documentación](#-conceptos-básicos) • [🎯 Características](#-características)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Características](#-características)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Cómo Ejecutar](#-cómo-ejecutar)
- [📖 Conceptos Básicos](#-conceptos-básicos)
  - [Vue.js 3](#vuejs-3)
  - [TypeScript](#typescript)
  - [Vue Router](#vue-router)
  - [localStorage](#localstorage)
- [🔍 Explicación del Código](#-explicación-del-código)
- [📝 Usuarios de Prueba](#-usuarios-de-prueba)
- [🎓 Ejercicios Propuestos](#-ejercicios-propuestos)
- [📚 Recursos de Aprendizaje](#-recursos-de-aprendizaje)

---

## 🎯 Características

✅ **Formulario de Login** - Validación de campos y mensajes de error/éxito  
✅ **Autenticación simulada** - Verificación contra lista de usuarios  
✅ **Persistencia de sesión** - Uso de localStorage para mantener la sesión  
✅ **Navegación protegida** - Redirección entre páginas con Vue Router  
✅ **Diseño moderno** - Estilos CSS con gradientes y animaciones  
✅ **Código comentado** - Ideal para aprender  

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **Vue.js** | 3.x | Framework JavaScript progresivo |
| **TypeScript** | 5.x | Superset de JavaScript con tipos |
| **Vite** | 5.x | Herramienta de construcción rápida |
| **Vue Router** | 4.x | Enrutador oficial de Vue.js |

---

## 📁 Estructura del Proyecto
login-typescript/
│
├── 📂 src/
│ │
│ ├── 📂 types/ # Definiciones de tipos TypeScript
│ │ └── User.ts # Tipos para Usuario y Login
│ │
│ ├── 📂 data/ # Datos estáticos
│ │ └── users.ts # Lista de usuarios válidos
│ │
│ ├── 📂 services/ # Lógica de negocio
│ │ └── authService.ts # Funciones de autenticación
│ │
│ ├── 📂 components/ # Componentes reutilizables
│ │ └── LoginForm.vue # Formulario de login
│ │
│ ├── 📂 views/ # Páginas/Vistas
│ │ ├── LoginView.vue # Página de login
│ │ └── DashboardView.vue # Página del dashboard
│ │
│ ├── 📂 router/ # Configuración de rutas
│ │ └── index.ts # Definición de rutas
│ │
│ ├── App.vue # Componente raíz
│ └── main.ts # Punto de entrada
│
├── index.html # HTML principal
├── tsconfig.json # Configuración TypeScript
├── vite.config.ts # Configuración Vite
├── package.json # Dependencias
└── README.md # Este archivo

text


### 📊 Diagrama de Flujo
┌─────────────────────────────────────────────────────────────┐
│ FLUJO DE LA APLICACIÓN │
├─────────────────────────────────────────────────────────────┤
│ │
│ ┌──────────┐ ┌──────────────┐ ┌────────────────┐ │
│ │ Usuario │───▶│ LoginView │───▶│ LoginForm.vue │ │
│ └──────────┘ └──────────────┘ └───────┬────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────────┐ │
│ │ authService.ts │ │
│ │ login() │ │
│ └────────┬────────┘ │
│ │ │
│ ┌───────────────────┼───────────────┐│
│ │ │ ││
│ ▼ ▼ ││
│ ┌──────────┐ ┌──────────┐ ││
│ │ ❌ Error │ │ ✅ Éxito │ ││
│ │ Mostrar │ │ Guardar │ ││
│ │ mensaje │ │ localStorage│ ││
│ └──────────┘ └─────┬────┘ ││
│ │ ││
│ ▼ ││
│ ┌────────────────┐ ││
│ │ DashboardView │ ││
│ │ Mostrar datos │ ││
│ └────────────────┘ ││
│ │
└─────────────────────────────────────────────────────────────┘

text


---

## 🚀 Cómo Ejecutar

### Requisitos Previos

- **Node.js** versión 18 o superior
- **npm** o **yarn**

### Pasos de Instalación

```bash
# 1. Clonar el repositorio (o descargar)
git clone https://github.com/tu-usuario/login-typescript.git

# 2. Entrar a la carpeta
cd login-typescript

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:5173
Scripts Disponibles
Comando	Descripción
npm run dev	Inicia servidor de desarrollo
npm run build	Construye para producción
npm run preview	Vista previa de producción
📖 Conceptos Básicos
Vue.js 3
Vue.js es un framework progresivo para construir interfaces de usuario. "Progresivo" significa que puedes usarlo para proyectos simples y escalarlo para proyectos complejos.

🔹 Composition API vs Options API
Vue 3 introdujo la Composition API, una nueva forma de organizar el código:

vue

<!-- ❌ OPTIONS API (forma antigua) -->
<script>
export default {
  data() {
    return {
      nombre: 'Juan'
    }
  },
  methods: {
    saludar() {
      console.log('Hola ' + this.nombre)
    }
  }
}
</script>

<!-- ✅ COMPOSITION API (forma moderna) -->
<script setup>
import { ref } from 'vue'

const nombre = ref('Juan')

function saludar() {
  console.log('Hola ' + nombre.value)
}
</script>
🔹 <script setup>
Es una forma simplificada de usar Composition API:

vue

<script setup>
// Todo lo que declares aquí está disponible en el template
// No necesitas return ni export
import { ref } from 'vue'

const contador = ref(0)
</script>

<template>
  <p>{{ contador }}</p>
</template>
🔹 ref() - Reactividad para valores simples
ref() crea una variable reactiva. Cuando cambia, Vue actualiza la vista automáticamente:

JavaScript

import { ref } from 'vue'

// Crear una variable reactiva
const mensaje = ref('Hola')

// En el script, usamos .value para acceder al valor
console.log(mensaje.value)  // 'Hola'

// Para cambiar el valor
mensaje.value = 'Adiós'

// En el template NO usamos .value
// <p>{{ mensaje }}</p>  ← Vue lo hace automáticamente
¿Por qué .value?

En JavaScript, los valores primitivos (string, number, boolean) se pasan por valor, no por referencia
ref() envuelve el valor en un objeto { value: ... } para poder rastrear cambios
En el template, Vue "desenvuelve" automáticamente el ref
🔹 reactive() - Reactividad para objetos
reactive() es para objetos completos:

JavaScript

import { reactive } from 'vue'

// Para objetos, usamos reactive
const usuario = reactive({
  nombre: 'Juan',
  edad: 25
})

// NO necesitamos .value
console.log(usuario.nombre)  // 'Juan'
usuario.edad = 26  // Cambio reactivo
¿Cuándo usar cada uno?

Usa ref()	Usa reactive()
Valores simples: string, number, boolean	Objetos con múltiples propiedades
Cuando necesitas reemplazar el valor completo	Cuando modificas propiedades individuales
const count = ref(0)	const form = reactive({ name: '', email: '' })
🔹 v-model - Enlace bidireccional
Sincroniza un input con una variable:

vue

<script setup>
import { ref } from 'vue'
const nombre = ref('')
</script>

<template>
  <!-- Cuando escribes, 'nombre' se actualiza -->
  <!-- Si 'nombre' cambia, el input muestra el nuevo valor -->
  <input v-model="nombre" />
  <p>Escribiste: {{ nombre }}</p>
</template>
Sin v-model (forma larga):

vue

<input 
  :value="nombre" 
  @input="nombre = $event.target.value" 
/>
🔹 v-if / v-else - Renderizado condicional
Muestra u oculta elementos según una condición:

vue

<script setup>
import { ref } from 'vue'
const mostrar = ref(true)
</script>

<template>
  <div v-if="mostrar">
    ✅ Esto se ve cuando mostrar es true
  </div>
  <div v-else>
    ❌ Esto se ve cuando mostrar es false
  </div>
  
  <button @click="mostrar = !mostrar">
    Cambiar
  </button>
</template>
🔹 v-for - Renderizado de listas
Itera sobre un array para crear elementos:

vue

<script setup>
const frutas = ['🍎 Manzana', '🍌 Banana', '🍊 Naranja']
</script>

<template>
  <ul>
    <!-- :key es OBLIGATORIO para que Vue identifique cada elemento -->
    <li v-for="(fruta, index) in frutas" :key="index">
      {{ fruta }}
    </li>
  </ul>
</template>
🔹 @click y @submit - Manejo de eventos
vue

<script setup>
function saludar() {
  alert('¡Hola!')
}

function enviarFormulario() {
  console.log('Formulario enviado')
}
</script>

<template>
  <!-- Click en botón -->
  <button @click="saludar">Saludar</button>
  
  <!-- Envío de formulario -->
  <!-- .prevent evita que la página se recargue -->
  <form @submit.prevent="enviarFormulario">
    <button type="submit">Enviar</button>
  </form>
</template>
🔹 onMounted - Ciclo de vida
Se ejecuta cuando el componente aparece en pantalla:

vue

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('¡El componente ya está visible!')
  // Aquí puedes cargar datos, hacer peticiones API, etc.
})
</script>
Ciclo de vida completo:

text

Componente creado
       ↓
   onMounted() ← El componente está en el DOM
       ↓
   onUpdated() ← Cuando los datos cambian
       ↓
  onUnmounted() ← Cuando se elimina el componente
TypeScript
TypeScript es JavaScript con tipos. Te ayuda a detectar errores antes de ejecutar el código.

🔹 ¿Por qué TypeScript?
JavaScript

// ❌ JavaScript - El error aparece AL EJECUTAR
function sumar(a, b) {
  return a + b
}
sumar('5', 3)  // Retorna '53' (concatena strings) - ¡Bug!

// ✅ TypeScript - El error aparece AL ESCRIBIR
function sumar(a: number, b: number): number {
  return a + b
}
sumar('5', 3)  // ❌ Error: '5' no es un número
🔹 Tipos básicos
TypeScript

// Tipos primitivos
let nombre: string = 'Juan'
let edad: number = 25
let activo: boolean = true

// Arrays
let numeros: number[] = [1, 2, 3]
let nombres: string[] = ['Ana', 'Luis']

// Tipo any (evitar si es posible)
let cualquierCosa: any = 'hola'
cualquierCosa = 123  // No da error, pero perdemos las ventajas de TS

// Tipo null y undefined
let dato: string | null = null  // Puede ser string O null
🔹 Interfaces
Define la forma de un objeto:

TypeScript

// Definir la interface
interface Usuario {
  id: number
  nombre: string
  email: string
  activo?: boolean  // El ? significa que es opcional
}

// Usar la interface
const usuario: Usuario = {
  id: 1,
  nombre: 'Juan',
  email: 'juan@email.com'
  // activo es opcional, no es obligatorio
}

// TypeScript te avisa si falta algo
const usuarioMal: Usuario = {
  id: 1,
  nombre: 'Ana'
  // ❌ Error: falta 'email'
}
🔹 Type vs Interface
Ambos definen tipos, pero tienen diferencias:

TypeScript

// INTERFACE - Para objetos, puede extenderse
interface Animal {
  nombre: string
}

interface Perro extends Animal {
  raza: string
}

// TYPE - Más flexible, para uniones y tipos complejos
type ID = number | string  // Puede ser número O string

type Respuesta = {
  exito: boolean
  mensaje: string
}
Regla simple: Usa interface para objetos, type para todo lo demás.

🔹 Funciones tipadas
TypeScript

// Parámetros tipados y tipo de retorno
function saludar(nombre: string): string {
  return `Hola, ${nombre}`
}

// Función que no retorna nada
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje)
}

// Función con parámetro opcional
function crearUsuario(nombre: string, edad?: number): void {
  console.log(nombre, edad)
}

crearUsuario('Juan')      // ✅ OK
crearUsuario('Juan', 25)  // ✅ OK
🔹 Genéricos
Permiten crear funciones/tipos reutilizables:

TypeScript

// Sin genéricos - Necesitarías una función por cada tipo
function primerElementoNumber(arr: number[]): number {
  return arr[0]
}
function primerElementoString(arr: string[]): string {
  return arr[0]
}

// Con genéricos - Una función para todos los tipos
function primerElemento<T>(arr: T[]): T {
  return arr[0]
}

primerElemento([1, 2, 3])        // Retorna number
primerElemento(['a', 'b', 'c'])  // Retorna string
Vue Router
Vue Router permite crear Single Page Applications (SPA) con múltiples "páginas" sin recargar el navegador.

🔹 Configuración básica
TypeScript

// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',           // URL
    name: 'home',        // Nombre único
    component: Home      // Componente a mostrar
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
🔹 RouterView y RouterLink
vue

<!-- App.vue -->
<template>
  <!-- Menú de navegación -->
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/about">Acerca de</RouterLink>
  </nav>
  
  <!-- Aquí se renderiza la vista actual -->
  <RouterView />
</template>
🔹 Navegación programática
vue

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irAlDashboard() {
  // Navegar a otra ruta
  router.push('/dashboard')
  
  // También puedes usar el nombre
  router.push({ name: 'dashboard' })
  
  // Con parámetros
  router.push({ name: 'usuario', params: { id: 123 } })
}

function volver() {
  router.back()  // Ir a la página anterior
}
</script>
🔹 Rutas con parámetros
TypeScript

// router/index.ts
const routes = [
  {
    path: '/usuario/:id',  // :id es un parámetro dinámico
    name: 'usuario',
    component: UsuarioView
  }
]

// En el componente
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id)  // Acceder al parámetro
localStorage
localStorage permite guardar datos en el navegador que persisten aunque cierres la pestaña.

🔹 Métodos principales
JavaScript

// GUARDAR datos
// Solo acepta strings, por eso usamos JSON.stringify
localStorage.setItem('clave', 'valor')

// Para objetos:
const usuario = { id: 1, nombre: 'Juan' }
localStorage.setItem('usuario', JSON.stringify(usuario))
// Guarda: '{"id":1,"nombre":"Juan"}'

// OBTENER datos
const valor = localStorage.getItem('clave')

// Para objetos, necesitas JSON.parse
const usuarioString = localStorage.getItem('usuario')
const usuarioObjeto = JSON.parse(usuarioString)

// ELIMINAR un dato
localStorage.removeItem('clave')

// ELIMINAR TODO
localStorage.clear()
🔹 Manejo seguro con try-catch
JavaScript

function guardarUsuario(usuario) {
  try {
    localStorage.setItem('usuario', JSON.stringify(usuario))
    return true
  } catch (error) {
    console.error('Error al guardar:', error)
    return false
  }
}

function obtenerUsuario() {
  try {
    const data = localStorage.getItem('usuario')
    if (!data) return null
    return JSON.parse(data)
  } catch (error) {
    console.error('Error al obtener:', error)
    return null
  }
}
🔹 Limitaciones de localStorage
Característica	Descripción
Capacidad	~5-10 MB por dominio
Tipo de datos	Solo strings
Seguridad	NO es seguro para datos sensibles
Sincronización	No se sincroniza entre dispositivos
🔍 Explicación del Código
Archivo: types/User.ts
TypeScript

// Interface = Contrato de cómo debe verse un objeto
export interface User {
  id: number       // Cada usuario tiene un ID único
  name: string     // Nombre del usuario
  email: string    // Email del usuario
}

// Datos que el usuario ingresa en el formulario
export interface LoginCredentials {
  name: string
  email: string
}

// Lo que retorna la función login
export interface LoginResponse {
  success: boolean    // ¿Funcionó el login?
  message: string     // Mensaje para mostrar
  user?: User         // El usuario (solo si success es true)
}
Archivo: services/authService.ts
TypeScript

export function login(credentials: LoginCredentials): LoginResponse {
  // 1. Limpiar espacios en blanco
  const name = credentials.name.trim()
  const email = credentials.email.trim()

  // 2. Validar que no estén vacíos
  if (!name || !email) {
    return { success: false, message: 'Campos vacíos' }
  }

  // 3. Buscar usuario en la lista
  // find() retorna el primer elemento que cumpla la condición
  const user = users.find(u => 
    u.name.toLowerCase() === name.toLowerCase() &&
    u.email.toLowerCase() === email.toLowerCase()
  )

  // 4. Si encontramos al usuario
  if (user) {
    // Guardar en localStorage
    localStorage.setItem('sesion', JSON.stringify(user))
    return { success: true, message: '¡Bienvenido!', user }
  }

  // 5. Si no lo encontramos
  return { success: false, message: 'Credenciales incorrectas' }
}
Archivo: components/LoginForm.vue
vue

<script setup lang="ts">
// IMPORTS - Traemos lo que necesitamos
import { ref, reactive } from 'vue'           // Reactividad
import { useRouter } from 'vue-router'        // Navegación
import { login } from '@/services/authService' // Función de login

// ESTADO - Variables que Vue observa para cambios
const credentials = reactive({
  name: '',
  email: ''
})
const errorMessage = ref('')
const isLoading = ref(false)

// FUNCIÓN - Se ejecuta al enviar el formulario
async function handleLogin() {
  isLoading.value = true
  
  const response = login(credentials)
  
  if (response.success) {
    router.push('/dashboard')
  } else {
    errorMessage.value = response.message
  }
  
  isLoading.value = false
}
</script>
📝 Usuarios de Prueba
Nombre	Email
Sebastian	sebas@riwi.io
Andres	andres@riwi.io
Karlos	karlos@riwi.io
