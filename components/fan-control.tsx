import CircularSlider from "@fseehawer/react-circular-slider";
import { Power } from "lucide-react";
import { useState } from "react";
import Switch from "./switch";
import ModuleBox from "./module-box";

export default function FanControl() {
    const [active, setActive] = useState(false);
    const [speed, setSpeed] = useState(0);

    return <div className="relative rounded-2xl">
        <ModuleBox>
            <div className="p-4">
                <CircularSlider
                    label="Fan Speed"
                    width={180}
                    min={0}
                    max={100}
                    initialValue={speed}
                    onChange={(value: number) => {
                        setSpeed(value);
                    }}
                />
            </div>
        </ModuleBox>
    </div>
}