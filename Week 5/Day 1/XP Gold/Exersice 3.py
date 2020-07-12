import random


class QuantumParticle:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.p = 0
        self.entangled = None

    def position(self):
        self.x = random.randint(1, 10000)
        self.y = random.random()
        print("Quantum Interferences!!")

    def momentum(self):
        self.y = random.random()
        self.x = random.randint(1, 10000)
        print("Quantum Interferences!!")

    def spin(self):
        self.p = random.choice([0.5, -0.5])
        self.x = random.randint(1, 10000)
        self.y = random.random()
        print("Quantum Interferences!!")

    def repr(self):
        print(f"""
        Position: {self.x}
        Momentum: {self.y}
        Spin: {self.p}""")

    def entangle(self, particle):
        if self.entangled != particle:
            self.entangled = particle
            particle.entangled = self
            self.x = particle.x * (-1)
            self.y = particle.y * (-1)
            self.p = particle.p * (-1)
            print("Particle p1 is now in quantum entanglement with Particle p2}")
        else:
            print("Spooky Action at a Distance")


par = QuantumParticle()
par.repr()
par.spin()
par.repr()

par2 = QuantumParticle()
par.entangle(par2)
par2.entangle(par)
