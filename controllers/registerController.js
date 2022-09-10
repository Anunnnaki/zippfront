export const registerController = {
    signUp: async (payload) => {
            const {data} = await $nuxt.$api.post('user/register', payload)
        
            if(data) {
                $nuxt.$router.push({name: 'login'})
            }
    }
}