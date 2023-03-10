import { alertGeneral } from "~/assets/Alert";

export const zoneController = {
  get: {
    zones: async () => {
      const { data } = await $nuxt.$api.get("zones");
      return data;
    },
  },
  post: {
    zone: async (payload) => {
      const { data } = await $nuxt.$api.post("zones", payload);
      if (data) {
        alertGeneral('Exitoso!','Zona creada','success')
        $nuxt.refresh();
        return true;
      }
    },
  },
  put: {
    zone: async (payload) => {
      const { data } = await $nuxt.$api.put(`zones/${payload._id}`, payload);
      if (data) {
        $nuxt.refresh();
        return true;
      }
    },
  },
  remove: {
    zone: async (id) => {
      if (confirm("Esta sona se eliminara, esta seguro?")) {
        await $nuxt.$api.delete(`zones/${id}`);
        $nuxt.refresh();
      }
    },
  },
};
