<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col cols="12">
          <Input
            label="Ingrese su nombre"
            :model.sync="model.name"
            :rules="[
              (v) => !!v || 'El nombre es necesario',
              (v) =>
                (v && v.length >= 6) ||
                'El nombre debe tener 6 o mas caracteres',
            ]"
            class="mb-n6"
          />
        </v-col>
        <v-col cols="12">
          <Input
            label="Ingrese su correo"
            :model.sync="model.email"
            type="email"
            :rules="[(v) => !!v || 'El correo es necesario']"
            class="mb-n6"
          />
        </v-col>
        <v-col cols="12">
          <Input
            label="Ingresa una contraseña"
            :model.sync="model.password"
            type="password"
            :rules="[
              (v) => !!v || 'La contraseña es necesaria',
              (v) =>
                (v && v.length >= 6) ||
                'La contraseña debe tener 6 o mas caracteres',
            ]"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { registerController } from "~/controllers/registerController";

export default {
  props: {
    methodSendForm: {
      type: Function,
      default: () => null,
    },
    paramForm: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      model: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  created() {
    this.$emit("update:methodSendForm", this.signUp);
    this.$emit("update:paramForm", this.model);
  },

  methods: {
    signUp: registerController.signUp,
  },
};
</script>
