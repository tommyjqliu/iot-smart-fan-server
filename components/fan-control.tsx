import CircularSlider from "@fseehawer/react-circular-slider";
import ModuleBox from "./module-box";

export default function FanControl({ initialValue = 0, onChange }: { initialValue?: number, onChange?: (value: number) => void}) {
 
    return <div className="relative rounded-2xl">
        <ModuleBox>
            <div className="px-4 py-7">
                <CircularSlider
                    label="Fan Speed"
                    width={180}
                    min={0}
                    max={100}
                    onChange={onChange}
                    dataIndex={initialValue}
                />
            </div>
        </ModuleBox>
    </div>
}