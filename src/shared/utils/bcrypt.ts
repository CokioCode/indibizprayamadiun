import { compare } from "bcryptjs";

export default async function comparePassword(password: string, hash: string) {
  return await compare(password, hash);
}
