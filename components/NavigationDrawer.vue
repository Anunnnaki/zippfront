<template>
  <v-navigation-drawer app permanent expand-on-hover color="tertiary">
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <ZippLogo :width="40" :height="40" />
        </v-list-item-avatar>
        <v-list-item-title>
          <h1 class="white--text">Zipp</h1>
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item
        link
        v-for="(item, i) in navigation.items"
        :key="i"
        :to="`/${item.to}`"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon class="white--text">{{ `mdi-${item.icon}` }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import itemsNavigation from "~/config/itemsNavigation";
export default {
  data() {
    return {
      navigation: {
        items: itemsNavigation,
      },
    };
  },
};
</script>

<style>
</style>