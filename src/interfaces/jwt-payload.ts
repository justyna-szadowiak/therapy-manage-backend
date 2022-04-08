export type JwtPayload<T> = T & {
  iat: number;
  exp: number;
}
