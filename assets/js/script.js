const button = document.querySelector("#submit")
const errorToast = document.querySelector(".error-message")
const modal = document.querySelector(".modal")
const icon = document.querySelector(".icon")

button.addEventListener("click", handleClick)
icon.addEventListener("click", handleModalClose)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    handleModalClose()
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

  const inputWeight = document.querySelector("#weight").value
  const inputHeight = document.querySelector("#height").value

  if (inputWeight === "" || inputHeight === "") {
    handleErrorMessage()
  } else {
    const bmi = calculateBMI(Number(inputWeight), Number(inputHeight))
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
