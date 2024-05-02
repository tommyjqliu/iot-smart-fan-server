"use client"
import { useState } from "react";
import { FaMicrophone, FaUserAlt } from 'react-icons/fa'; // 引入必要的图标

export default function ControlPage() {
    const [fanStatus, setFanStatus] = useState(false);
    const [temperature, setTemperature] = useState(22);
    const [fanSpeed, setFanSpeed] = useState(50);

    // 模拟的处理函数
    const handleVoiceControl = () => console.log("Voice control activated!");
    const handleFaceRecognition = () => console.log("Face recognition activated!");

    // 根据温度值设置不同的背景色
    const temperatureColor = temperature > 30 ? 'bg-red-500' : temperature < 10 ? 'bg-blue-400' : 'bg-yellow-400';

    return (
        <main className="flex flex-col gap-6 p-6 items-center bg-white rounded-xl shadow-xl max-w-4xl mx-auto my-8">
            <h1 className="text-3xl font-bold text-gray-800">Fan Control Dashboard</h1>
            <div className="flex flex-col items-center gap-4 w-full">
                <button
                    className={`px-8 py-4 text-2xl rounded-md font-semibold shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 ${
                        fanStatus ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                    onClick={() => setFanStatus(!fanStatus)}
                >
                    {fanStatus ? 'Turn Off' : 'Turn On'}
                </button>
                <span className={`text-2xl font-medium ${fanStatus ? 'text-red-500' : 'text-green-500'}`}>
                    {fanStatus ? 'Fan is On' : 'Fan is Off'}
                </span>
                <div className="text-2xl font-medium text-gray-700 flex items-center gap-2">
                    <span>Temperature:</span>
                    <span className={`${temperatureColor} text-white px-3 py-1 rounded-full`}>
                        {temperature}°C
                    </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div
                        className={`${temperatureColor} h-4 rounded-full transition-width duration-500 ease-in-out`}
                        style={{ width: `${(temperature / 50) * 100}%` }}
                    ></div>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="fan-speed" className="text-2xl font-medium text-gray-700">
                        Fan Speed:
                    </label>
                    <span className="text-2xl font-semibold">{fanSpeed}%</span>
                </div>
                <input
                    type="range"
                    id="fan-speed"
                    className="w-full h-2 bg-gray-300 rounded-full cursor-pointer transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    min="0"
                    max="100"
                    value={fanSpeed}
                    onChange={(e) => setFanSpeed(e.target.value)}
                />
</div>
<div className="flex flex-row justify-between items-center gap-4 w-full px-4">
    <button
        className="h-full w-1/2 px-4 py-2 text-lg rounded-lg font-medium shadow transition-transform duration-300 ease-in-out hover:scale-105 bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center gap-2"
        onClick={handleVoiceControl}
    >
        <FaMicrophone className="text-xl" />
        Activate Voice Control
    </button>
    <button
        className="h-full w-1/2 px-4 py-2 text-lg rounded-lg font-medium shadow transition-transform duration-300 ease-in-out hover:scale-105 bg-purple-500 text-white hover:bg-purple-600 flex items-center justify-center gap-2"
        onClick={handleFaceRecognition}
    >
        <FaUserAlt className="text-xl" />
        Activate Face Recognition
    </button>
</div>

           


</main>
    );
}








  