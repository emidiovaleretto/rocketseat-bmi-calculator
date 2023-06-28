import { inputWeight, inputHeight } from "../assets/js/script.js"

const Modal = {
  modalContainer: document.querySelector(".modal"),
  text: document.querySelector(".modal h2"),
  btnClose: document.querySelector(".icon"),
  open() {
    Modal.modalContainer.classList.remove("hidden")
  },
  close() {
    Modal.modalContainer.classList.add("hidden")
  },
}

Modal.btnClose.addEventListener("click", Modal.close)

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Modal.close()
    inputWeight.focus()
    inputWeight.value = ""
    inputHeight.value = ""
  }
})

export { Modal }
