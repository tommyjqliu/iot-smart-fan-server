import { prisma } from "@/lib/prisma";

export const POST = async (request: Request) => {
    const data = await request.json();
    await prisma.logs.create({
        data: {
            data: JSON.stringify(data),
            date: new Date(),
        },
    })

    return new Response("success", {
        status: 200,
    });
}