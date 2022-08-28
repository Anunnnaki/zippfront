<template>
  <v-btn
    v-text="label"
    @click="$emit('actionButton', param)"
    :color="color"
    :outlined="outlined"
    rounded
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    label: {
      type: String,
      default: "label",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    param: {
      type: Number,
      default: 0,
    },
  },
};
</script>