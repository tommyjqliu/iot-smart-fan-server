class Fan():
    def __init__(self, id):
        self.id = id

    def message_handler(self, data):
        print(f'{self.id} fan received message: {data}')
        
    def register(self):
        print(f'{self.id} fan is registered')

    def on(self):
        print(f'{self.name} fan is on')

    def off(self):
        print(f'{self.name} fan is off')