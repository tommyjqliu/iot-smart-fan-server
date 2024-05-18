import CircularSlider from "@fseehawer/react-circular-slider";
import {  useState } from "react";
import ModuleBox from "./module-box";
import { useDebounceEffect } from "ahooks";
import { sendControl } from "@/lib/fan-control";

export default function FanControl({ initialValue = 0 }: { initialValue?: number }) {
 
    const [speed, setSpeed] = useState(initialValue);
    useDebounceEffect(() => {
        sendControl({
            "fan_speed": speed,
        })
    }, [speed]);

    return <div className="relative rounded-2xl">
        <ModuleBox>
            <div className="p-4">
                <CircularSlider
                    label="Fan Speed"
                    width={180}
                    min={0}
                    max={100}
                    initialValue={100} // Component bug, initialValue is not working
                    onChange={(value: number) => {
                        setSpeed(value);
                    }}
                />
            </div>
        </ModuleBox>
    </div>
}