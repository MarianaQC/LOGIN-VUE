// ============================================
// ARCHIVO: src/types/User.ts
// Define los tipos de datos para el usuario
// ============================================

/**
 * Interface User
 * Define la estructura de un usuario
 */
export interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * Interface LoginCredentials
 * Define los datos que el usuario ingresa en el formulario
 */
export interface LoginCredentials {
  name: string;
  email: string;
}

/**
 * Interface LoginResponse
 * Define la respuesta del proceso de login
 */
export interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;  // El ? significa que es opcional
}