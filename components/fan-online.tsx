import { useState } from "react";
import ModuleBox from "./module-box";

export default function FanOnline({ isOnline = false }: { isOnline?: boolean }) {

    return (
        <ModuleBox >
            <div className="flex justify-between w-full">
                <span className="text-gray-700 font-semibold">Fan Online</span>
                <div
                    className={`px-3 rounded-full relative transition-all duration-300 ${isOnline ? "bg-green-500" : "bg-red-500"
                        }`}
                >
                    {isOnline ? "Online" : "Offline"}
                </div>
            </div>
        </ModuleBox>
    );
}