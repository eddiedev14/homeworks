import { useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  type DocumentData,
  type WhereFilterOp,
  DocumentReference,
} from "firebase/firestore";

// Tipo de filtro (tupla)
type Filter = [string, WhereFilterOp, unknown];

// Tipo base de documento
type Doc = {
  id: string;
} & DocumentData;

export const useCollection = (table: string) => {
  const [results, setResults] = useState<Doc[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //* 1. R -> READ
  const getAll = async (filters: Filter[] = []): Promise<Doc[]> => {
    // Cargando y no hay errores
    setIsPending(true);
    setError(null);

    try {
      // Se hace una busqueda sobre la colección indicada
      let q = query(collection(db, table));

      // Pueden haber filtros por lo que se itera para obtener aquellos en los que coincide todo.
      // Ejemplo de uso: getAll([["age", ">", 18]]);
      filters.forEach(([field, op, value]) => {
        q = query(q, where(field, op, value));
      });

      // Firebase responde con un “paquete” de documentos
      const snapshot = await getDocs(q);

      // Se unen los documentos para seguir con la estructura del tipo definido
      const docs: Doc[] = snapshot.docs.map((d) => ({
        id: d.id, // Identificador unico del documento
        ...d.data(), // Datos (campos) del documento
      }));

      // Actualizar estados
      setResults(docs);
      setIsPending(false);
      return docs;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      setIsPending(false);
      return [];
    }
  };

  //* 2. C -> CREATE
  const add = async (
    data: DocumentData,
  ): Promise<DocumentReference<DocumentData> | null> => {
    setIsPending(true);
    setError(null);

    try {
      // Añadir el documento al firestore
      const ref = await addDoc(collection(db, table), {
        ...data,
        createdAt: serverTimestamp(),
      });

      setIsPending(false);
      return ref; // Retornar la referencia
    } catch (err) {
      setIsPending(false);
      setError(err instanceof Error ? err.message : "Error al agregar");
      return null;
    }
  };

  //* 3. U -> UPDATE
  const update = async (id: string, data: DocumentData) => {
    setIsPending(true);
    setError(null);

    try {
      // Busca el documento con ese id y lo actualiza
      // con doc(db, table, id), se obtiene un documento específico de esa colección por su id
      // updateDoc, recibe el documento a reemplazar y el nuevo documento
      await updateDoc(doc(db, table, id), {
        ...data,
        updatedAt: serverTimestamp(),
      });

      setIsPending(false);
      return true;
    } catch (err) {
      setIsPending(false);
      setError(err instanceof Error ? err.message : "Error al actualizar");
      return false;
    }
  };

  //* 4. D -> DELETE
  const remove = async (id: string) => {
    setIsPending(true);
    setError(null);

    try {
      await deleteDoc(doc(db, table, id));
      setIsPending(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar");
      setIsPending(false);
      return false;
    }
  };

  return {
    results,
    isPending,
    error,
    getAll,
    add,
    update,
    remove,
  };
};
