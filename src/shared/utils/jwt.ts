import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(payload: object) {
  return sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string) {
  return verify(token, JWT_SECRET);
}
