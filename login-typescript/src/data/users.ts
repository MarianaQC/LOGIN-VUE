// ============================================
// ARCHIVO: src/data/users.ts
// Lista de usuarios válidos
// ============================================

import type { User } from '@/types/User';

/**
 * Lista de usuarios registrados
 * En una app real, estos vendrían de una base de datos
 */
export const users: User[] = [
  { 
    id: 1, 
    name: 'Sebastian', 
    email: 'sebas@riwi.io' 
  },
  { 
    id: 2, 
    name: 'Andres', 
    email: 'andres@riwi.io' 
  },
  { 
    id: 3, 
    name: 'Karlos', 
    email: 'karlos@riwi.io' 
  },
];