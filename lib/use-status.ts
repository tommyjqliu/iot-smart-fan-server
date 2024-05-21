import mqtt from "mqtt";
import { useCallback, useEffect, useRef, useState } from "react";
import { FanStatus } from "./type";
import { useDebounceFn } from "ahooks";
import { sendControl } from "./fan-control";
import { isEqual } from "./utils";

export function useFanStatus(initialStatus: FanStatus = { fan_speed: 0, active: false, auto_fan_off: false, temperature: 0, date: new Date(0).toISOString() }) {
    const [status, _setStatus] = useState<FanStatus>(initialStatus);

    useEffect(() => {
        const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');
        client.subscribe("CITS5506SMARTFAN/REPORT");
        client.on('message', function (topic, message) {
            try {
                const report = JSON.parse(message.toString())
                console.log("Recieve report:", report)
                _setStatus(report);
            } catch (error) {
                console.error(error);
            }
        });

        return () => {
            client.unsubscribe("CITS5506SMARTFAN/REPORT");
            client.end();
        }
    }, [])

    const debounceSendControl = useDebounceFn((data: FanStatus) => {
        console.log("sendControl:", data)
        sendControl(data);
    })

    const setStatus = useCallback((nextStatus: Partial<FanStatus>, caller: string) => {
        console.log("setStatus:", nextStatus, caller)
        _setStatus((status) => {
            const combinedStatus = { ...status, ...nextStatus };
            if (!isEqual(status, combinedStatus)) {
                debounceSendControl.run(combinedStatus);
            }
            return combinedStatus
        });
    }, [])

    return [status, setStatus] as const;
}