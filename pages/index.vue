<template>
  <v-row class="white">
    <!-- Titulo -->
    <v-col cols="12" class="text-center pa-10 d-flex">
      <ZippLogo />
      <h1>Zipp</h1>
    </v-col>
    <!-- Busca y ofrece espacios de parqueo -->
    <v-col
      cols="12"
      class="text-center pa-10"
      style="border-top: 1px solid #bace00"
    >
      <h1>Busca y ofrece espacios de parqueo</h1>
      <NuxtLogo imageToDisplay="walking" class="mt-4" />
      <Button @actionButton="actionButton" label="Buscar" class="mt-4" />
    </v-col>
    <!-- Beneficios -->
    <v-col cols="12" class="text-center" style="border-top: 1px solid #bace00">
      <v-row>
        <v-col class="text-center pa-10">
          <h3>
            Encuentra espacios para todo tipo de vehiculos (carro, moto,
            bicicleta, patinenetas)
            <NuxtLogo imageToDisplay="vehicle" />
          </h3>
        </v-col>
        <v-col
          class="text-center pa-10"
          style="
            border-right: 1px solid #bace00;
            border-left: 1px solid #bace00;
          "
        >
          <h3>Ofrece cualquier espacio disponible en tu casa u oficina</h3>
          <NuxtLogo imageToDisplay="houses" />
        </v-col>
        <v-col class="text-center pa-10">
          <h3>
            Rentabiliza tus zonas, tambien puedes darle opciones a tus clientes
            para que te visiten
          </h3>
          <NuxtLogo imageToDisplay="money" />
        </v-col>
      </v-row>
    </v-col>
    <!-- Informacion corta y concisa -->
    <v-col cols="12" style="border-top: 1px solid #bace00">
      <v-row>
        <v-col cols="6" class="text-center pa-10">
          <NuxtLogo imageToDisplay="location" />
        </v-col>
        <v-col
          cols="6"
          class="pa-10 d-flex justify-center align-center flex-column"
          style="border-left: 1px solid #bace00"
        >
          <h3>
            Puedes encontrar espacios para cualquier tipo de vehiculo, en
            cualquier lugar cerca o donde necesites ir
          </h3>
          <Button @actionButton="actionButton" label="Buscar" class="mt-4" />
        </v-col>
      </v-row>
    </v-col>
    <!-- Informacion corta y concisa -->
    <v-col cols="12" style="border-top: 1px solid #bace00">
      <v-row>
        <v-col cols="6" class="d-flex justify-center align-center">
          <div class="pa-10 text-center" style="position: absolute">
            <h3>
              Puedes ofrecer cualquier espacio, desde un acceso de garaje para
              carros y motos hasta cualquier espacio para guardar bicicletas,
              patinetas, scooter, malumetas, etc
            </h3>
            <Button @actionButton="actionButton" label="Ofrecer" class="mt-4" />
          </div>
        </v-col>
        <v-col
          cols="6"
          class="text-center pa-10"
          style="border-left: 1px solid #bace00"
        >
          <NuxtLogo imageToDisplay="starts" />
        </v-col>
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
