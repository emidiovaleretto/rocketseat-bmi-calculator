import { Modal } from "../modules/modal.js"

const calculateBMI = (weight, height) => {
  return ((weight / (height * height)) * 10000).toFixed(1)
}

const displayResult = (bmi) => {
  Modal.open()
  Modal.text.innerText = `Your BMI is ${bmi} kg/m2.`
}

export { calculateBMI, displayResult }
