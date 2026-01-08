<!-- ============================================
     ARCHIVO: src/views/LoginView.vue
     Página de Login
     ============================================ -->

<template>
  <div class="login-view">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
</script>

<style scoped>
.login-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
}
</style>