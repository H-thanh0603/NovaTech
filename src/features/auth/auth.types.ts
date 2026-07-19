export type AuthUser = Readonly<{
  id: string;
  email: string;
  name: string;
  role: "CUSTOMER" | "ADMIN";
}>;

export type AuthSession = Readonly<{
  userId: string;
  email: string;
  name: string;
  role: "CUSTOMER" | "ADMIN";
  expiresAt: number;
}>;

export type AuthResult = Readonly<{
  success: boolean;
  error?: string;
  sessionToken?: string;
  user?: AuthUser;
}>;

export type RegisterInput = Readonly<{
  email: string;
  password: string;
  name: string;
}>;

export type LoginInput = Readonly<{
  email: string;
  password: string;
}>;
