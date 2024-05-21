import { prisma } from "@/lib/prisma";
import { FanStatus } from "@/lib/type";

export const POST = async (request: Request) => {
    const {date, ...rest}: FanStatus = await request.json();
    await prisma.reports.create({
        data: {
            status: JSON.stringify(rest),
            date: new Date(date),
        },
    })

    return new Response("success", {
        status: 200,
    });
}