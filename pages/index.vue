<template>
  <v-row>
    <!-- Titulo -->
    <v-col cols="12" class="teal lighten-4 mt-1">
      <h1>Titulo</h1>
    </v-col>
    <!-- Busca y ofrece espacios de parqueo -->
    <v-col cols="12" class="teal lighten-4 mt-1">
      <h1>Busca y ofrece espacios de parqueo</h1>
      <Button @actionButton="actionButton" label="Buscar" />
    </v-col>
    <!-- Beneficios -->
    <v-col cols="12" class="teal lighten-4 mt-1">
      <h1>Beneficios</h1>
    </v-col>
    <!-- Informacion corta y concisa -->
    <v-col cols="12" class="teal lighten-4 mt-1">
      <v-row>
        <v-col cols="6" class="teal lighten-3"> Imagen </v-col>
        <v-col cols="6">
          <h1>Informacion corta y concisa</h1>
          <Button @actionButton="actionButton" label="Buscar" />
        </v-col>
      </v-row>
    </v-col>
    <!-- Informacion corta y concisa -->
    <v-col cols="12" class="teal lighten-4 mt-1">
      <v-row>
        <v-col cols="6">
          <h1>Informacion corta y concisa</h1>
          <Button @actionButton="actionButton" label="Ofrecer" />
        </v-col>
        <v-col cols="6" class="teal lighten-3"> Imagen </v-col>
      </v-row>
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
