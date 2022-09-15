<template>
  <v-form @submit.prevent="sendForm()" v-model="validForm">
    <!-- Fomrulario de login -->
    <FormLogin
      v-if="formShow === 'formLogin'"
      :methodSendForm.sync="methodSendForm"
      :paramForm.sync="paramForm"
    />
    <!-- Fomrulario de registro -->
    <FormRegister
      v-if="formShow === 'formSignUp'"
      :methodSendForm.sync="methodSendForm"
      :paramForm.sync="paramForm"
    />
    <!-- Acciones en cuanto login/registro -->
    <Button
      :label="formShow === 'formSignUp' ? 'Tengo una cuenta' : 'Crear cuenta'"
      class="mb-4 mt-n4 white--text"
      color="secondary"
      :block="true"
      :actionButton="actionButton"
    />
    <Button
      :block="true"
      color="primary"
      :label="formShow === 'formSignUp' ? 'Crear' : 'Iniciar sesion'"
      type="submit"
      :disabled="!validForm"
    />
  </v-form>
</template>

<script>
export default {
  props: {
    formShow: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      methodSendForm: () => null,
      paramForm: {},
      validForm: true,
    };
  },
  methods: {
    sendForm() {
      this.methodSendForm(this.paramForm);
    },
    actionButton() {
      if (this.formShow === "formLogin") {
        $nuxt.$router.push({ name: "signUp" });
      } else {
        $nuxt.$router.push({ name: "login" });
      }
    },
  },
};
</script>