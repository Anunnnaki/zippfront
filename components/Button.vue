<template>
  <v-btn
    v-text="label"
    @click="actionButton(param)"
    :block="block"
    :color="color"
    :disabled="disabled"
    :outlined="outlined"
    rounded
    :type="type"
  />
</template>

<script>
export default {
  props: {
    actionButton: {
      type: Function,
      default: () => null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "label",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
    param: {
      type: Number,
      default: 0,
    },
  },
};
</script>