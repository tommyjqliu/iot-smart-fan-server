import mqtt from "mqtt";
import { useEffect, useState } from "react";
import { FanState } from "./type";



export function useReport(lastReport: FanState = {}) {
    const [report, setReport] = useState<FanState>(lastReport);
    useEffect(() => {
        const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');
        client.subscribe("CITS5506SMARTFAN/REPORT");
        client.on('message', function (topic, message) {
            console.log(message.toString())
            try {
                setReport(JSON.parse(message.toString()));
            } catch (error) {
                console.error(error);
            }
        });
        return () => {
            client.unsubscribe("CITS5506SMARTFAN/REPORT");
            client.end();
        }
    })
    return report;
}