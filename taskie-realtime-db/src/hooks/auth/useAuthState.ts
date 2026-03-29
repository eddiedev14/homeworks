//* React
import { useEffect, useState } from "react";

//* Firebase
import { auth, db } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// * Types & utils
import type { User, UserLogin, UserUI } from "../../types/user.types";
import { getAuthErrorMessage } from "../../utils/firebaseErrors";

export default function useAuthState() {
  //* States
  const [user, setUser] = useState<UserUI | null>(null);
  const [loading, setLoading] = useState(true);

  //* Effects
  useEffect(() => {
    // ? onAuthStateChanged, es un listener que se ejecuta cuando el usuario inicia sesión, cierra sesión
    // ? se recarga la página o firebase detecta que hay una sesión activa y la restaura.
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      // Si hay una sesión activa
      if (firebaseUser) {
        // Obtener ID
        const uid: string = firebaseUser.uid;

        // Se busca ese usuario en la COLECCIÓN usuarios
        const userRef = doc(db, "users", uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as User;

          setUser({
            email: firebaseUser.email!,
            username: data.username,
          });
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //* Functions
  const register = async ({
    email,
    password,
    username,
  }: User): Promise<string | null> => {
    try {
      // ? Se crea un usuario en la parte de authentication con Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Ahora se guarda en la colección "users", el usuario con esa misma id (para referencias) con los datos propios
      //? La función doc(), recibe la base de datos, nombre de la colección y id específico (uid)
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username,
      });

      return null;
    } catch (err) {
      return getAuthErrorMessage(err);
    }
  };

  const login = async (credentials: UserLogin): Promise<string | null> => {
    try {
      // ? Se inicia sesión con Firebase
      // Si el login funciona correctamente, se ejecuta el listener y se setea el usuario.
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );

      return null;
    } catch (err) {
      return getAuthErrorMessage(err);
    }
  };

  const logout = async (): Promise<string | null> => {
    try {
      // ? Se usa el método signOut
      await signOut(auth);
      return null;
    } catch {
      return "No se pudo cerrar sesión. Intenta nuevamente.";
    }
  };

  const getUserId = (): string | undefined => {
    return auth.currentUser?.uid;
  };

  return {
    user,
    loading,
    register,
    login,
    logout,
    getUserId,
  };
}
