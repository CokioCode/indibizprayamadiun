import bcrypt from "bcryptjs";

export default async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
