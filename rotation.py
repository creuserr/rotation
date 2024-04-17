import random

class Rotation:
  def __init__(self):
    pass

  def _model(self):
    char = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    return ''.join([char[random.randint(0, len(char) - 1)] for _ in range(3)]) + str(random.randint(100, 999))

  def _build(self):
    char = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    return ''.join([char[random.randint(0, len(char) - 1)] for _ in range(2)]) + ''.join([str(random.randint(1, 99999)) for _ in range(3)])

  def create(self):
    prod = f"Mozilla {random.randint(3, 5)}.0"
    andr = f"Android {random.randint(10, 13)}"
    mod = f"{self._model()} Build/{self._build()}"
    kit = f"AppleWebKit/{random.randint(500, 550)}"
    ver = f"Version/{random.randint(3, 5)}"
    chrom = f"Chrome/{self._build()}"
    safar = f"Mobile Safari/{random.randint(500, 550)}"
    return f"{prod} (Linux; {andr} {mod}) {kit} (KHTML, like Gecko) {ver} {chrom} {safar}"