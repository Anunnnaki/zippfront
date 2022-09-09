<template>
  <v-btn
    v-text="label"
    @click="$emit('actionButton', param)"
    :color="color"
    :disabled="disabled"
    :outlined="outlined"
    rounded
    type="type"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "secondary",
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