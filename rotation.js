const rotation = {
  _random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  _model() {
    let that = this
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    return new Array(3).fill(0).map(_ => char[that._random(0, char.length -1)]).join("") + that._random(100, 999).toString()
  },
  _build() {
    let that = this
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    return new Array(2).fill(0).map(_ => char[that._random(0, char.length -1)]).join("") + new Array(3).fill(0).map(_ => that._random(1, 99999)).join(".")
  },
  create() {
    const prod = `Mozilla ${this._random(3, 5)}.0`
    const andr = `Android ${this._random(10, 13)}`
    const mod = `${this._model()} Build/${this._build()}`
    const kit = `AppleWebKit/${this._random(500, 550)}`
    const ver = `Version/${this._random(3, 5)}`
    const chrom = `Chrome/${this._build()}`
    const safar = `Mobile Safari/${this._random(500, 550)}`
    return `${prod} (Linux; ${andr} ${mod}) ${kit} (KHTML, like Gecko) ${ver} ${chrom} ${safar}`
  }
}

