<template>
  <div>
    <v-app-bar app color="primary">
      <template #prepend>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="toggleDrawer"
        >
        </v-app-bar-nav-icon>
      </template>

      <v-app-bar-title> Application Bar </v-app-bar-title>

      <template #append> </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          link
        >
          <template #prepend>
            <v-icon :icon="route.meta.icon"></v-icon>
          </template>
          <v-list-item-title>{{
            route.meta.name
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
const drawer = ref(false)
const router = useRouter()

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const routes = computed(() => {
  return router.getRoutes().filter((route) => route.name)
})
</script>
