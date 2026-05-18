import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["banner"]

  connect() {
    this.boundShake = this.shake.bind(this)
    window.addEventListener("shutdown-banner:shake", this.boundShake)
  }

  disconnect() {
    window.removeEventListener("shutdown-banner:shake", this.boundShake)
  }

  shake() {
    this.bannerTarget.classList.add("animate-shake")
    this.bannerTarget.addEventListener("animationend", () => {
      this.bannerTarget.classList.remove("animate-shake")
    }, { once: true })
  }
}
