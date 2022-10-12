<template>
  <v-row justify="center">
    <v-dialog v-model="localIsDialog" persistent :max-width="maxWidth">
      <v-card rounded="xl">
        <v-card-title>
          <span class="text-h5" v-text="title" />
        </v-card-title>
        <v-card-text>
          <Form formShow="formZones" :isDialog.sync="localIsDialog" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    isDialog: {
      type: Boolean,
      default: null,
    },
    title: {
      type: String,
      default: "title",
    },
    maxWidth: {
      type: String,
      default: "600px",
    },
  },
  data() {
    return {
      localIsDialog: this.isDialog,
    };
  },
  watch: {
    isDialog(val) {
      this.localIsDialog = val;
    },
    localIsDialog(val) {
      this.$emit("update:isDialog", val);
    },
  },
};
</script>
