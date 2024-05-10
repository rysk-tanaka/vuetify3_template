<template>
  <v-app>
    <NavigationLayout />
    <v-main>
      <v-container>
        <LoadingOverlay />
        <router-view />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
//
</script>
