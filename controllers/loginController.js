export const loginController = {
    singIn: async (payload) => {
        try {
            const {data} = await $nuxt.$api.post('user/login', payload)
            if(data.data.token) {
                $nuxt.$router.push({name: 'home'})

            }
            // $nuxt.$store.dispatch('localStorage/actValueState', {
                //         key: 'accessToken',
                //         value: user.accessToken
                //     })
        } catch (error) {
            alert("Correo o contraseña incorrecta");
        }
    }
}