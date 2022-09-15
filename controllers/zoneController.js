export const zoneController = {
    get: {
        zones: async () => {
                const {data} = await $nuxt.$api.get('zones')
                return data
        }
    },
    post: {
        zone: async (payload) => {
                const {data} = await $nuxt.$api.post('zones', payload)
                if(data) {
                    $nuxt.refresh()
                     return true
                }
        }
    }
}