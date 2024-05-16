'use client';
import { useState } from 'react';
import { AirVent, Joystick } from 'lucide-react';
import { Power } from 'lucide-react';
import CircularSlider from '@fseehawer/react-circular-slider';
import Image from 'next/image';
import homeImage from './image.png';

export default function ControlPage() {
  const [fanStatus, setFanStatus] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const [fanSpeed, setFanSpeed] = useState(0);

  const temperatureColor =
    temperature > 30
      ? 'bg-red-600'
      : temperature < 10
        ? 'bg-blue-500'
        : 'bg-yellow-500';

  return (
    <main className="flex flex-col gap-12 p-12 items-center bg-white rounded-xl shadow-2xl max-w-5xl mx-2 my-2 border border-gray-200">
      {/* Row 1: Fan on/off toggle */}
      <div className="flex items-center justify-center gap-6 w-full">
        <button
          className="focus:outline-none"
          onClick={() => setFanStatus(!fanStatus)}
        >
          <Power
            strokeWidth={3}
            size={48}
            color={fanStatus ? 'red' : 'green'}
          />
        </button>
      </div>

      {/* Row 2: Temperature display and Fan Speed control */}
      <div className="flex flex-row items-center gap-6 w-full">
        {/* Temperature display */}
        <div className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <span
            className={`${temperatureColor} text-white px-4 py-2 rounded-full`}
          >
            {temperature}°C
          </span>
        </div>

        {/* Fan Speed control */}
        <div>
          <CircularSlider
            label="Fan Speed"
            width={180}
            min={0}
            max={100}
            initialValue={0}
            onChange={(value) => {
              setFanSpeed(value);
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 w-full">
        <Image src={homeImage} width={500} height={500} />
      </div>
    </main>
  );
}
