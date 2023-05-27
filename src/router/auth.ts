import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"

export function getCurrentAuth() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}