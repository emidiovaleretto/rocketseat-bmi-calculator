import { Modal } from "../../modules/modal.js"
import { Error } from "../../modules/error.js"

export const inputWeight = document.querySelector("#weight")
export const inputHeight = document.querySelector("#height")
const button = document.querySelector("#submit")

button.onclick = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  if (weight === "" || height === "") {
    Error.show()
  } else {
    const bmi = calculateBMI(Number(weight), Number(height))
    displayResult(bmi)
  }
}

const calculateBMI = (weight, height) => {
  return ((weight / (height * height)) * 10000).toFixed(1)
}

const displayResult = (bmi) => {
  Modal.open()
  Modal.text.innerText = `Your BMI is ${bmi} kg/m2.`
}
