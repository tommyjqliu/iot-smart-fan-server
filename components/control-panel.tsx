'use client';
import FanControl from '@/components/fan-control';
import Switch from '@/components/switch';
import Temperature from '@/components/temperature';
import FanOnline from '@/components/fan-online';
import { useReport } from '@/lib/use-report';
import { FanState } from '@/lib/type';
import { sendControl } from '@/lib/fan-control';



export default function ControlPanel({ lastReport }: { lastReport: FanState }) {
    const report = useReport(lastReport)

    return (
        <div className="flex gap-4 p-12 items-center justify-center flex-wrap">
            <FanControl initialValue={report.fan_speed} />
            <div className='flex flex-col gap-4'>
                <FanOnline isOnline={report.online} />
                <Switch title="Power" initialState={report.active} onChange={(state) => sendControl({ active: state })} />
                <Switch title="Auto Fan Off" initialState={report.auto_fan_off} onChange={(state) => sendControl({ auto_fan_off: state })} />
                <Temperature temperature={report.temperature || 0} />
            </div>
        </div>

    );
}