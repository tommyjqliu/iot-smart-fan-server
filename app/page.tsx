'use client';
import { useState } from 'react';
import { AirVent, Joystick } from 'lucide-react';
import { Power } from 'lucide-react';
// import { CircleSlider } from 'react-circle-slider';

export default function ControlPage() {
  const [fanStatus, setFanStatus] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const [fanSpeed, setFanSpeed] = useState(50);

  const temperatureColor =
    temperature > 30
      ? 'bg-red-600'
      : temperature < 10
        ? 'bg-blue-500'
        : 'bg-yellow-500';

  return (
    <main className="flex flex-col gap-12 p-12 items-center bg-white rounded-xl shadow-2xl max-w-5xl mx-2 my-2 border border-gray-200">
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Fan on/off toggle */}
        <button
          className="focus:outline-none"
          onClick={() => setFanStatus(!fanStatus)}
        >
          {/* {fanStatus ? 'Turn Off' : 'Turn On'} */}
          <Power
            strokeWidth={3}
            size={48}
            color={fanStatus ? 'red' : 'green'}
          />
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Temperature display */}
        <div className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <span>Temperature:</span>
          <span
            className={`${temperatureColor} text-white px-4 py-2 rounded-full`}
          >
            {temperature}°C
          </span>
        </div>
        {/* Temperature progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className={`${temperatureColor} h-6 rounded-full transition-width duration-500 ease-in-out`}
            style={{ width: `${(temperature / 50) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Fan speed control */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="fan-speed"
            className="font-semibold text-gray-800 text-3xl"
          >
            Fan Speed:
          </label>
          <span className="text-3xl font-bold">{fanSpeed}%</span>
        </div>
        <input
          type="range"
          id="fan-speed"
          className="w-full h-3 bg-gray-200 rounded-full cursor-pointer transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          min="0"
          max="100"
          value={fanSpeed}
          onChange={(e) => setFanSpeed(+e.target.value)}
        />
      </div>
    </main>
  );
}
