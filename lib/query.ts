"use server"

import { prisma } from "./prisma"
import { FanStatus } from "./type";

export async function queryStatus() {
    // Get the current date and time
    const now = new Date();
    // Calculate the date and time for 5 minutes ago
    const fiveMinutesAgo = new Date(now.getTime() - 3 * 60 * 1000);

    // Query the records within the last 5 minutes
    const records = await prisma.reports.findMany({
        where: {
            date: {
                gte: fiveMinutesAgo
            }
        }
    });

    // Group records by 15-second intervals and calculate the mean value
    const groupedRecords: Record<string, FanStatus[]> = {};

    records.forEach(record => {
        // Get the time portion of the date
        const time = new Date(record.date).getTime();
        // Calculate the 15-second interval key
        const intervalKey = Math.floor(time / 15000);

        if (!groupedRecords[intervalKey]) {
            groupedRecords[intervalKey] = [];
        }

        groupedRecords[intervalKey].push(JSON.parse(record.status));
    });

    // Calculate the mean value for each 15-second interval
    const statistics = Object.keys(groupedRecords).map(key => {
        const status = groupedRecords[key];
        const speedSum = status.reduce((acc, val) => acc + (val.fan_speed ?? 0), 0);
        const temperatureSum = status.reduce((acc, val) => acc + (val.temperature ?? 0), 0);
        return {
            date: new Date(parseInt(key) * 15000).toISOString(),
            fan_speed: speedSum / status.length,
            temperature: temperatureSum / status.length
        };
    });

    return statistics;
}