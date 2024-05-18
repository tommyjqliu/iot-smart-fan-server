import { useState } from "react";
import ModuleBox from "./module-box";

export default function Temperature() {
    const [temperature, setTemperature] = useState(22);

    const temperatureColor =
        temperature > 30
            ? 'bg-red-600'
            : temperature < 10
                ? 'bg-blue-500'
                : 'bg-yellow-500';
                
    return <ModuleBox>
        <div className='flex justify-between w-full'>
            <span className="text-gray-700 font-semibold">Temperature</span>
            <div
                className={`px-3 rounded-full relative transition-all duration-300 ${temperatureColor}`}
            >
                {temperature}°C
            </div>
        </div>
    </ModuleBox>
}