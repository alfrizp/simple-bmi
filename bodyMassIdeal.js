class BodyMassIdeal {
  constructor(gender, height, weight) {
    this.gender = gender
    this.height = height
    this.weight = weight
    this.idealMass = 0
    this.isIdeal = false
  }

  calculateForMale() {
    // [tinggi badan (cm) – 100] – [(tinggi badan (cm) – 100) x 10%]
    return (this.height - 100) - ((this.height - 100) * 10/100)
  }

  calculateForFemale() {
    // [tinggi badan (cm) – 100] – [(tinggi badan (cm) – 100) x 15%]
    return (this.height - 100) - ((this.height - 100) * 15/100)
  }

  calculate() {
    if (this.gender === "male") {
      this.idealMass = this.calculateForMale()
      if (this.idealMass === this.weight) this.isIdeal = true
    } else if (this.gender === "female") {
      this.idealMass = this.calculateForFemale()
      if (this.idealMass === this.weight) this.isIdeal = true
    }
  }

  print() {
    this.calculate()
    console.log("!!!!!!!!!!RESULT!!!!!!!!!!")
    console.log("Jenis kelamin anda: ", this.gender === "male" ? "LAKI-LAKI" : "PEREMPUAN")
    console.log("Tinggi badan anda: ", this.height)
    console.log("Berat badan anda: ", this.weight)
    console.log("Berat badan ideal anda: ", this.idealMass)
    console.log("Apakah anda ideal? ", this.isIdeal ? "YA" : "TIDAK")
    console.log("==========================")
  }
}