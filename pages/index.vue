<template>
  <v-row class="primary">
    <!-- Titulo -->
    <v-col cols="12" class="white mt-1 px-10 py-6 d-flex">
      <ZippLogo />
      <h1>Zipp</h1>
    </v-col>
    <!-- Busca y ofrece espacios de parqueo -->
    <v-col cols="12" class="text-center white mt-1 pa-10">
      <h1>Busca y ofrece espacios de parqueo</h1>
      <Button @actionButton="actionButton" label="Buscar" class="mt-4" />
    </v-col>
    <!-- Beneficios -->
    <v-col cols="12" class="mt-1">
      <v-row>
        <v-col class="white pa-10">
          <h3>
            Encuentra espacios para todo tipo de vehiculos (carro, moto,
            bicicleta, patinenetas)
          </h3>
        </v-col>
        <v-col class="mx-1 white pa-10">
          <h3>Ofrece cualquier espacio disponible en tu casa u oficina</h3>
        </v-col>
        <v-col class="white pa-10">
          <h3>
            Rentabiliza tus zonas, tambien puedes darle opciones a tus clientes
            para que te visiten
          </h3>
        </v-col>
      </v-row>
    </v-col>
    <!-- Informacion corta y concisa -->
    <v-col cols="12" class="white mt-1">
      <v-row>
        <v-col cols="6" class="grey"> Imagen </v-col>
        <v-col cols="6" class="text-center pa-10">
          <h3>
            Puedes encontrar espacios para cualquier tipo de vehiculo, en
            cualquier lugar cerca o donde necesites ir
          </h3>
          <Button @actionButton="actionButton" label="Buscar" class="mt-4" />
        </v-col>
      </v-row>
    </v-col>
    <!-- Informacion corta y concisa -->
    <v-col cols="12" class="white mt-1">
      <v-row>
        <v-col cols="6" class="text-center pa-10">
          <h3>
            Puedes ofrecer cualquier espacio, desde un acceso de garaje para
            carros y motos hasta cualquier espacio para guardar bicicletas,
            patinetas, scooter, malumetas, etc
          </h3>
          <Button @actionButton="actionButton" label="Ofrecer" class="mt-4" />
        </v-col>
        <v-col cols="6" class="grey"> Imagen </v-col>
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
