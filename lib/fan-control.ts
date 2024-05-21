import mqtt from "mqtt";
import { FanStatus } from "./type";

const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

export async function sendControl(data: FanStatus) {
  client.publish("CITS5506SMARTFAN/CONTROL", JSON.stringify(data), { qos: 1 });
}
