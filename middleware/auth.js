export default function ({redirect, store, $api}) {
  const token = store.state.localStorage.token
  $api.setHeader('auth-token', `${token}`)

    // const isAuthenticated = store.state.auth.user ? true : false
    // console.log("🚀 ~ file: auth.js ~ line 3 ~ isAuthenticated", isAuthenticated)
    // if (!isAuthenticated) {
    //   redirect({name: 'auth'})
    // }
    console.log('ok')
  }