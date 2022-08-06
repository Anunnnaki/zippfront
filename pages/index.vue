<template>
  <v-row>
    <v-col cols="12">
      <h1>Titulo</h1>
    </v-col>
    <v-col cols="12">
      <h1>Busca y ofrece espacios de parqueo</h1>
      <Button @actionButton="actionButton" label="Buscar" />
    </v-col>
    <v-col cols="12">
      <h1>Beneficios</h1>
    </v-col>
    <v-col cols="12">
      <h1>Informacion corta y concisa</h1>
      <Button @actionButton="actionButton" label="Buscar" />
    </v-col>
    <v-col cols="12">
      <h1>Informacion corta y concisa</h1>
      <Button @actionButton="actionButton" label="Ofrecer" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    actionButton() {
      $nuxt.$router.push({ name: "login" });
    },
  },
};
</script>
