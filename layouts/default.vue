<template>
  <v-app dark>
    <NavigationDrawer />
    <v-main>
      <Nuxt />
    </v-main>
    <Loading />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
