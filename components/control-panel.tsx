'use client';
import FanControl from '@/components/fan-control';
import Switch from '@/components/switch';
import Temperature from '@/components/temperature';
import FanOnline from '@/components/fan-online';
import { useFanStatus } from '@/lib/use-status';
import { FanStatus } from '@/lib/type';
import LineChart from './line-chart';
import useStatistics from '@/lib/use-statistics';
import { useEffect, useState } from 'react';


function checkIfOnline(date: string): boolean {
    return (new Date().getTime() - new Date(date).getTime()) < 15 * 1000;
}

export default function ControlPanel({ lastReport }: { lastReport?: FanStatus }) {
    const [status, setStatus] = useFanStatus(lastReport)
    const statistics = useStatistics(status);
    const [isOnline, setIsOnline] = useState(checkIfOnline(status.date));

    useEffect(() => {
        setIsOnline(checkIfOnline(status.date));
        const interval = setInterval(() => {
            setIsOnline(checkIfOnline(status.date));
        }, 15000); // Update every 15 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [status.date]);

    return (
        <div className="flex gap-4 p-12 h-full items-center justify-center flex-wrap">
            <div className='flex flex-col gap-4'>
                <FanControl initialValue={status.fan_speed} onChange={(speed) => setStatus({ fan_speed: speed }, "fan")} />
                <LineChart title='Fan Speed History' x={statistics.map(s => new Date(s.date!))} y={statistics.map(s => s.fan_speed)} />
            </div>
            <div className='flex flex-col gap-4'>
                <FanOnline isOnline={isOnline} />
                <Switch title="Power" isOn={status.active} onChange={(active) => setStatus({ active, fan_speed: active ? 50 : 0 }, "power")} />
                <Switch title="Auto Fan Off" isOn={status.auto_fan_off} onChange={(auto_fan_off) => setStatus({ auto_fan_off }, "auto")} />
                <Temperature temperature={status.temperature || 0} />
                <LineChart title='Temperature History' x={statistics.map(s => new Date(s.date!))} y={statistics.map(s => s.temperature)} />
            </div>

        </div>
    );
}