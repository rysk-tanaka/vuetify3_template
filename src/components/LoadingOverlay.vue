<template>
  <v-overlay
    v-model="isLoading"
    :persistent="true"
    class="align-center justify-center"
  >
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
    ></v-progress-circular>
  </v-overlay>
</template>

<script setup lang="ts">
const loadingStore = useLoadingStore()
const isLoading = computed(() => loadingStore.loading)
</script>
