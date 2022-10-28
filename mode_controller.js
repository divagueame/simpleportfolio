import { Application, Controller } from "./stimulus.js"
window.Stimulus = Application.start()

Stimulus.register("mode", class extends Controller {
    static targets = [ "trigger" ]
    static values = {
      currentMode: String
    }
    currentModeValueChanged(){
      // console.log('Changed!')
    }

    connect() { 
    }

    toggle(e) { 
      this.currentModeValue = e.target.dataset.modeTarget;
    }
  })