<template>
    <div>
      <p v-if="error">{{ error }}</p>
      <p v-if="message">{{ message }}</p>
      <button v-if="showLogout" @click="logout">Logout</button>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const error = ref('');
      const message = ref('');
      const showLogout = ref(false);
  
      onMounted(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log('Authorization Code:', code);
  
        if (code) {
          message.value = 'Hello World';
          showLogout.value = true;
        } else {
          error.value = 'Authorization code not found in URL.';
        }
      });
  
      const logout = () => { 
        const redirectUri = 'https://black-sea-07fc4440f.5.azurestaticapps.net/';
        const tenantId = '9329c02a-4050-4798-93ae-b6e37b19af6d';
        const logoutUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout?post_logout_redirect_uri=${redirectUri}`;
        window.location.href = logoutUrl;
      };
      return {
        error,
        message,
        showLogout,
        logout
      };
    }
  };
  </script>
  
