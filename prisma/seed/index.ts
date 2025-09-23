import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password", 12);

  const user = await prisma.auth.create({
    data: {
      username: "AdminAbi",
      password,
    },
  });

  console.log("Seeded Auth:", user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
