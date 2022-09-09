<template>
  <v-app dark>
    <v-main>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col cols="7" sm="4" class="text-center">
            <ZippLogo width="70" height="70" />
            <h1 class="mb-8">Zipp</h1>
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "loginLayout",

  data() {
    return {
      logo: "~/img/fog_via",
    };
  },
};
</script>