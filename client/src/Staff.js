class Staff {

  constructor(name) {
    this.name = name
    this.months = new Array(12)
  }

  static getName() {
    return this.name
  }
}

export default Staff
