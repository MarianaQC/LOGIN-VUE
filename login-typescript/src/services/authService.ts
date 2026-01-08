// ============================================
// ARCHIVO: src/services/authService.ts
// Lógica de autenticación
// ============================================

import type { User, LoginCredentials, LoginResponse } from '@/types/User';
import { users } from '@/data/users';

// Clave para localStorage
const STORAGE_KEY = 'sesion';

/**
 * Función login
 * Verifica credenciales y guarda sesión en localStorage
 */
export function login(credentials: LoginCredentials): LoginResponse {
  try {
    // Limpiar espacios
    const name = credentials.name.trim();
    const email = credentials.email.trim();

    // Validar campos vacíos
    if (!name || !email) {
      return {
        success: false,
        message: 'Debes ingresar nombre y email'
      };
    }

    // Buscar usuario (ignorando mayúsculas/minúsculas)
    const user = users.find(
      (u) => 
        u.name.toLowerCase() === name.toLowerCase() && 
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (user) {
      // Usuario encontrado - guardar en localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      console.log('✅ Login exitoso:', user.name);
      
      return {
        success: true,
        message: `¡Bienvenido, ${user.name}!`,
        user: user
      };
    } else {
      console.log('❌ Usuario no encontrado');
      return {
        success: false,
        message: 'Usuario o email incorrectos'
      };
    }

  } catch (error) {
    console.error('Error en login:', error);
    return {
      success: false,
      message: 'Ocurrió un error inesperado'
    };
  }
}

/**
 * Función logout
 * Elimina la sesión de localStorage
 */
export function logout(): void {
  localStorage.removeItem(STORAGE_KEY);
  console.log('👋 Sesión cerrada');
}

/**
 * Función getCurrentUser
 * Obtiene el usuario logueado desde localStorage
 */
export function getCurrentUser(): User | null {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    
    if (!storedData) {
      return null;
    }
    
    return JSON.parse(storedData) as User;
    
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

/**
 * Función isLoggedIn
 * Verifica si hay sesión activa
 */
export function isLoggedIn(): boolean {
  return getCurrentUser() !== null;
}