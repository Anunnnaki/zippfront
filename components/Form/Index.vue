<template>
  <v-form @submit.prevent="sendForm()" v-model="validForm" ref="form">
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
    <!-- Fomrulario de crear zona -->
    <FormZones
      v-if="formShow === 'formZones'"
      :methodSendForm.sync="methodSendForm"
      :paramForm.sync="paramForm"
    />
    <!-- Acciones en cuanto login/registro -->
    <template v-if="isLoginRegister">
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
    </template>
    <!-- Acciones del formulario -->
    <template v-else>
      <div class="d-flex justify-end">
        <Button :actionButton="closeDialog" color="secondary" label="Cerrar" />
        <!-- :disabled="!validForm" -->
        <Button
          class="ml-2"
          color="primary"
          :disabled="!validForm"
          label="Crear"
          type="submit"
        />
      </div>
    </template>
  </v-form>
</template>

<script>
export default {
  props: {
    formShow: {
      type: String,
      default: null,
    },
    isDialog: {
      type: Boolean,
      default: null,
    },
    isLoginRegister: {
      type: Boolean,
      default: false,
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
    async sendForm() {
      const res = await this.methodSendForm(this.paramForm);
      if (res) {
        this.closeDialog();
      }
    },
    actionButton() {
      if (this.formShow === "formLogin") {
        $nuxt.$router.push({ name: "signUp" });
      } else {
        $nuxt.$router.push({ name: "login" });
      }
    },
    closeDialog() {
      this.$emit("update:isDialog", false);
      this.$refs.form.reset();
    },
  },
};
</script>