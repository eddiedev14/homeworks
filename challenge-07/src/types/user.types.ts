// Se usa Utility Types (particularmente Omit) para crear variantes de interfaces
export type User = {
  email: string;
  username: string;
  password: string;
};

export type UserDoc = Pick<User, "username">;
export type UserLogin = Omit<User, "username">;
export type UserUI = Omit<User, "password">;
