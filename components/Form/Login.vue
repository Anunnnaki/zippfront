<template>
  <v-row>
    <v-col cols="12">
      <Input
        label="Email"
        :model.sync="model.email"
        type="email"
        :rules="[(v) => !!v || 'El correo es necesario']"
        class="mb-n6"
      />
    </v-col>
    <v-col cols="12">
      <Input
        label="Contraseña"
        :model.sync="model.password"
        type="password"
        :rules="[(v) => !!v || 'La contraseña es necesaria']"
      />
    </v-col>
  </v-row>
</template>

<script>
import { loginController } from "~/controllers/loginController";

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
        email: "",
        password: "",
      },
    };
  },

  created() {
    this.$emit("update:methodSendForm", this.singIn);
    this.$emit("update:paramForm", this.model);
  },

  methods: {
    singIn: loginController.singIn,
  },
};
</script>