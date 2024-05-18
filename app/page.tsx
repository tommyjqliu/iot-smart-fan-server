'use client';
import { useState } from 'react';
import { AirVent, Joystick } from 'lucide-react';
import { Power } from 'lucide-react';
import CircularSlider from '@fseehawer/react-circular-slider';
import Image from 'next/image';
import homeImage from './image.png';
import FanControl from '@/components/fan-control';
import Switch from '@/components/switch';
import Temperature from '@/components/temperature';
import FanOnline from '@/components/fan-online';

export default function ControlPage() {
  const [fanStatus, setFanStatus] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const [fanSpeed, setFanSpeed] = useState(0);


  return (
    <main className="flex gap-4 p-12 items-center justify-center flex-wrap">
      <FanControl />
      <div className='flex flex-col gap-4'>
        <FanOnline/>
        <Switch title="Power" />
        <Switch title="Auto Fan Off" />
        <Temperature />
      </div> 
    </main>
  );
}
