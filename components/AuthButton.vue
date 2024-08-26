<template>
    <button @click="redirectToAuth">Login with Microsoft</button>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      redirectToAuth() {
        const clientId = '<ClientID>'; 
        const redirectUri = 'https://<AzureStaticWebAppname>.azurestaticapps.net/callback'; 
        const tenantId = '<TenantID>';
        const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`;
        const scope = encodeURIComponent('openid profile');
        const authorizationUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
        window.location.href = authorizationUrl;
      }
    }
  };
  </script>
  
