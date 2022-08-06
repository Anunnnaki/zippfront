<template>
  <v-btn
    color="primary"
    rounded
    @click="$emit('actionButton')"
    v-text="label"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
  },
};
</script>