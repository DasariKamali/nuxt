<template>
    <button @click="redirectToAuth">Login with Microsoft</button>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      redirectToAuth() {
        const clientId = 'e810c444-49f0-4184-8c26-dc9fa08a5230'; 
        const redirectUri = 'https://black-sea-07fc4440f.5.azurestaticapps.net/callback'; 
        const tenantId = '9329c02a-4050-4798-93ae-b6e37b19af6d';
        const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`;
        const scope = encodeURIComponent('openid profile');
        const authorizationUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
        window.location.href = authorizationUrl;
      }
    }
  };
  </script>
  
