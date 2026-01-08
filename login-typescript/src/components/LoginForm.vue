<!-- ============================================
     ARCHIVO: src/components/LoginForm.vue
     Formulario de login
     ============================================ -->

<template>
  <div class="login-container">
    
    <h2 class="login-title">🔐 Iniciar Sesión</h2>
    
    <form @submit.prevent="handleLogin" class="login-form">
      
      <!-- Campo Nombre -->
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input
          id="name"
          v-model="credentials.name"
          type="text"
          placeholder="Ingresa tu nombre"
          class="form-input"
          :disabled="isLoading"
        />
      </div>

      <!-- Campo Email -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="credentials.email"
          type="email"
          placeholder="Ingresa tu email"
          class="form-input"
          :disabled="isLoading"
        />
      </div>

      <!-- Mensaje de Error -->
      <div v-if="errorMessage" class="error-message">
        ❌ {{ errorMessage }}
      </div>

      <!-- Mensaje de Éxito -->
      <div v-if="successMessage" class="success-message">
        ✅ {{ successMessage }}
      </div>

      <!-- Botón -->
      <button 
        type="submit" 
        class="login-button"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Ingresando...' : 'Iniciar Sesión' }}
      </button>
      
    </form>

    <!-- Usuarios de ejemplo -->
    <div class="help-section">
      <p><strong>📋 Usuarios disponibles:</strong></p>
      <ul>
        <li v-for="user in availableUsers" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { LoginCredentials } from '@/types/User';
import { login } from '@/services/authService';
import { users } from '@/data/users';

// Router para navegar
const router = useRouter();

// Estado del formulario
const credentials = reactive<LoginCredentials>({
  name: '',
  email: ''
});

// Mensajes y estado de carga
const errorMessage = ref<string>('');
const successMessage = ref<string>('');
const isLoading = ref<boolean>(false);

// Lista de usuarios para mostrar
const availableUsers = users;

// Función que se ejecuta al enviar el formulario
async function handleLogin(): Promise<void> {
  // Limpiar mensajes
  errorMessage.value = '';
  successMessage.value = '';
  
  // Activar carga
  isLoading.value = true;

  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Llamar servicio de login
  const response = login(credentials);

  if (response.success) {
    successMessage.value = response.message;
    
    // Navegar al dashboard después de 1 segundo
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
    
  } else {
    errorMessage.value = response.message;
  }

  isLoading.value = false;
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.login-title {
  text-align: center;
  color: white;
  margin-bottom: 25px;
  font-size: 1.8rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  color: white;
  font-weight: 600;
}

.form-input {
  padding: 12px 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

.form-input:disabled {
  opacity: 0.7;
}

.error-message {
  background-color: #ff6b6b;
  color: white;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.success-message {
  background-color: #51cf66;
  color: white;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.login-button {
  padding: 14px;
  background-color: #2d3436;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover:not(:disabled) {
  background-color: #636e72;
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.help-section {
  margin-top: 25px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
}

.help-section ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.help-section li {
  padding: 5px 0;
  font-size: 0.9rem;
}
</style>