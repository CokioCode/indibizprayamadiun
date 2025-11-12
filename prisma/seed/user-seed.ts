import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const hash = await bcrypt.hash("admin#123", 10);

    await prisma.auth.upsert({
        where: { username: "admin" },
        update: { password: hash },
        create: {
            username: "admin",
            password: hash,
        },
    })
    console.log("✅ Seeded user:");
}

main().catch((e) => {
    console.log(e)
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});