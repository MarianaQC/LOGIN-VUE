<!-- ============================================
     ARCHIVO: src/views/DashboardView.vue
     Página después del login
     ============================================ -->

<template>
  <div class="dashboard">
    
    <div v-if="currentUser" class="dashboard-content">
      
      <header class="dashboard-header">
        <h1>🎉 ¡Bienvenido, {{ currentUser.name }}!</h1>
        <p>Has iniciado sesión correctamente</p>
      </header>

      <div class="user-card">
        <h2>📋 Tu información:</h2>
        <div class="info-item">
          <span class="label">ID:</span>
          <span class="value">{{ currentUser.id }}</span>
        </div>
        <div class="info-item">
          <span class="label">Nombre:</span>
          <span class="value">{{ currentUser.name }}</span>
        </div>
        <div class="info-item">
          <span class="label">Email:</span>
          <span class="value">{{ currentUser.email }}</span>
        </div>
      </div>

      <div class="storage-info">
        <h3>💾 Datos en localStorage:</h3>
        <code>{{ storedData }}</code>
      </div>

      <button @click="handleLogout" class="logout-button">
        🚪 Cerrar Sesión
      </button>
      
    </div>

    <div v-else class="no-session">
      <h2>⚠️ No has iniciado sesión</h2>
      <button @click="goToLogin" class="login-redirect-button">
        Ir al Login
      </button>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type { User } from '@/types/User';
import { getCurrentUser, logout } from '@/services/authService';

const router = useRouter();

const currentUser = ref<User | null>(null);
const storedData = ref<string>('');

onMounted(() => {
  currentUser.value = getCurrentUser();
  storedData.value = localStorage.getItem('sesion') || 'No hay datos';
});

function handleLogout(): void {
  logout();
  currentUser.value = null;
  router.push('/');
}

function goToLogin(): void {
  router.push('/');
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px 20px;
}

.dashboard-content {
  max-width: 600px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

.dashboard-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.dashboard-header p {
  opacity: 0.8;
}

.user-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
}

.user-card h2 {
  color: #ffd700;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  color: #888;
}

.storage-info {
  background: #2d3436;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;
}

.storage-info h3 {
  color: #00cec9;
  margin-bottom: 15px;
}

.storage-info code {
  display: block;
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  color: #74b9ff;
  word-break: break-all;
}

.logout-button {
  width: 100%;
  padding: 15px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
}

.logout-button:hover {
  background: #c0392b;
}

.no-session {
  text-align: center;
  color: white;
  padding: 100px 20px;
}

.login-redirect-button {
  margin-top: 20px;
  padding: 15px 40px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>