import { LineChart as MuiLineChart } from "@mui/x-charts";
import ModuleBox from "./module-box";

export default function LineChart({ x, y, title }: { x: any[], y: any[], title: string }) {
    return (
        <ModuleBox>
            <div>
                <span className="text-gray-700 font-semibold">{title}</span>
                <div className="m-[-16px]">
                    <MuiLineChart
                        xAxis={[{ data: x, scaleType: 'time' }]}
                        series={[
                            {
                                data: y,
                            },
                        ]}
                        width={350}
                        height={150}
                    />
                </div>
            </div>
        </ModuleBox>
    )
}