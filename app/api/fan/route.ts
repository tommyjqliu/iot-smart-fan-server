import { prisma } from "@/lib/prisma";

export const POST = async (request: Request) => {
    const data: { date: string, status: any } = await request.json();
    await prisma.reports.create({
        data: {
            status: JSON.stringify(data.status),
            date: new Date(data.date),
        },
    })

    return new Response("success", {
        status: 200,
    });
}