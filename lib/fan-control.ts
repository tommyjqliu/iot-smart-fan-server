"use server"
import mqtt from "mqtt";
import { FanState } from "./type";

const client = mqtt.connect('mqtt://broker.hivemq.com');

export async function sendControl(data: FanState) {
  client.publish("CITS5506SMARTFAN/CONTROL", JSON.stringify(data), { qos: 1 });
}
