import { alertGeneral } from "~/assets/Alert";

export const loginController = {
    singIn: async (payload) => {
        try {
            const {data} = await $nuxt.$api.post('user/login', payload)
    
            if(data.data.token) {
                $nuxt.$store.dispatch('localStorage/actUpdateKey', {
                    key: 'token',
                    value: data.data.token
                })
                $nuxt.$router.push({name: 'home'})

            }
        } catch (error) {
            alertGeneral('Ups!','Correo o contraseña incorrecta','error')

        }
    }
}