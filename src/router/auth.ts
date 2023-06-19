import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"

export const getCurrentAuth = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}