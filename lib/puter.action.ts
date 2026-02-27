import puter from "@heyputer/puter.js"

const puterSignIn = async () => await puter.auth.signIn()

const puterSignOut = () => puter.auth.signOut()

const getCurrentUser = async () => {
  try{
    return await puter.auth.getUser()
  } catch {
    return null
  }
}

export {puterSignIn, puterSignOut, getCurrentUser}
