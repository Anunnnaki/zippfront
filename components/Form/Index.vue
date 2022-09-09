<template>
  <v-form @submit.prevent="sendForm" v-model="validForm">
    <FormLogin
      :methodSendForm.sync="methodSendForm"
      :paramForm.sync="paramForm"
    />
    <Button label="Ingresar" type="submit" :disabled="!validForm" />
  </v-form>
</template>

<script>
export default {
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
  },
};
</script>