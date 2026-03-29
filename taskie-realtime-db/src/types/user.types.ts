// Se usa Utility Types (particularmente Omit) para crear variantes de interfaces
export type User = {
  email: string;
  username: string;
  password: string;
};

export type UserNode = Pick<User, "username">; // Nodo de usuario en la base de datos
export type UserLogin = Omit<User, "username">;
export type UserUI = Omit<User, "password">;
