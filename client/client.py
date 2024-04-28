
import machineid
from fan import Fan
from pusher import pusher

MACHINE_ID = machineid.hashed_id()

def signal_handler(signal, frame):
    print("\nExiting program...")
    exit(0)

def main():


    fan = Fan(MACHINE_ID)
    pusher.connection.bind('pusher:connection_established', lambda data: pusher.subscribe('my-channel').bind('my-event', fan.message_handler))
    pusher.connect()

    while True:
        pass

if __name__ == "__main__":
    main()