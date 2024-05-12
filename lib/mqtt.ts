"use server"
import mqtt from "mqtt";

const client = mqtt.connect('mqtt://broker.hivemq.com');

export async function message(topic: string, message: string) {
  client.publish(topic, message);
}

// client.publish("CITS5506SMARTFAN/1","test");