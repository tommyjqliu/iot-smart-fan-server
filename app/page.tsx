
import ControlPanel from '@/components/control-panel';
import { prisma } from '@/lib/prisma';
import { FanStatus } from '@/lib/type';



export default async function Page() {
  const latestLog = await prisma.reports.findFirst({
    orderBy: {
      id: 'desc', // Order by the primary key column in descending order
    },
    take: 1, // Take only the first (last) record
  });

  let lastReport: FanStatus | undefined
  if (latestLog) {
    lastReport = JSON.parse(latestLog?.status ?? "{}") as FanStatus;
    lastReport.date = latestLog?.date.toISOString();
  }

  return (
    <main>
      <ControlPanel lastReport={lastReport} />
    </main>
  );
}
