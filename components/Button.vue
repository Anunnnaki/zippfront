<template>
  <v-btn color="primary" @click="$emit('actionButton')" v-text="label" />
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