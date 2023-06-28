const Error = {
  toast: document.querySelector(".error-message"),
  show() {
    Error.toast.classList.remove("hidden")
    Error.hide()
  },
  hide() {
    setTimeout(() => {
      Error.toast.classList.add("hidden")
    }, 3000)
  },
}

export { Error }
