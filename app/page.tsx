
import ControlPanel from '@/components/control-panel';
import { prisma } from '@/lib/prisma';
import { FanState } from '@/lib/type';



export default async function Page() {
  const latestLog = await prisma.reports.findFirst({
    orderBy: {
      id: 'desc', // Order by the primary key column in descending order
    },
    take: 1, // Take only the first (last) record
  });

  let lastReport: FanState = {};
  
  try {
    lastReport = JSON.parse(latestLog?.status ?? "{}");
  } catch (error) {
    console.error(error);
  }
  console.log( latestLog )
  return (
    <main >
      <ControlPanel lastReport={lastReport}/>
    </main>
  );
}
