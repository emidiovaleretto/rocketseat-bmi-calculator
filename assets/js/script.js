const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const button = document.querySelector("#submit")
const errorToast = document.querySelector(".error-message")
const modal = document.querySelector(".modal")
const icon = document.querySelector(".icon")

button.addEventListener("click", handleClick)
icon.addEventListener("click", handleModalClose)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    handleModalClose()
    inputWeight.focus()
    inputWeight.value = ""
    inputHeight.value = ""
  }
})

const calculateBMI = (weight, height) => {
  return ((weight / (height * height)) * 10000).toFixed(1)
}

const displayResult = (bmi) => {
  modal.classList.remove("hidden")
  modal.querySelector("h2").innerHTML = `Your BMI is ${bmi} kg/m2.`
}

function handleClick(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  if (weight === "" || height === "") {
    handleErrorMessage()
  } else {
    const bmi = calculateBMI(Number(weight), Number(height))
    displayResult(bmi)
  }
}

function handleErrorMessage() {
  errorToast.classList.remove("hidden")

  setTimeout(() => {
    errorToast.classList.add("hidden")
  }, 3000)
}

function handleModalClose() {
  modal.classList.add("hidden")
}
