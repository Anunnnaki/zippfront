<template>
  <v-row justify="center">
    <v-dialog
      style="z-index: 9999"
      v-model="localIsDialog"
      :fullscreen="fullscreen"
      persistent
      max-width="600px"
    >
      <v-card rounded="xl">
        <v-card-title>
          <span class="text-h5" v-text="title" />
        </v-card-title>
        <v-card-text>
          <v-container>
            <Form formShow="formZones" :isDialog.sync="localIsDialog" />
          </v-container>
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
    fullscreen: {
      type: Boolean,
      default: false,
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