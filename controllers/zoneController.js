export const zoneController = {
    get: {
        zones: async () => {
                const {data} = await $nuxt.$api.get('zones')
                return data
        }
    }
}