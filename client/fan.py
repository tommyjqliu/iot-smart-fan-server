import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(12, GPIO.OUT)

p = GPIO.PWM(12, 1000)
GPIO.setmode(GPIO.BCM) # GPIO Numbers instead of board numbers
 
RELAIS_1_GPIO = 17
GPIO.setup(RELAIS_1_GPIO, GPIO.OUT) # GPIO Assign mode

class Fan():
    def __init__(self, id):
        self.id = id

    def message_handler(self, data):
 
        print(f'{self.id} fan received message: {data}', type(data))
        self.setSpeed(int(data["speed"]))
        
    def register(self):
        print(f'{self.id} fan is registered')

    def setSpeed(speed):
        if speed == 0:
            GPIO.output(RELAIS_1_GPIO, GPIO.LOW)
            p.ChangeDutyCycle(0)
        else:
            print(11)
            GPIO.output(RELAIS_1_GPIO, GPIO.HIGH)
            p.ChangeDutyCycle(min(speed, 100))

