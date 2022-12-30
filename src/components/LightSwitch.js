import React, { useState } from "react"
import lightOff from "../assets/lightOff.png"
import lightOn from "../assets/lightOn.png"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"

const LightSwitch = () => {

const [lightSwitchStatus, setLightSwitchStatus] = useState(switchOff)
const [bulbColor, setBulbColor] = useState(lightOff)

const buttonClick = () => {
  if(lightSwitchStatus === switchOff) {
    setBulbColor(lightOn)
    setLightSwitchStatus(switchOn)
  } else {
    setBulbColor(lightOff)
    setLightSwitchStatus(switchOff)
  }
}
  return (
    <>
      <div className="lightBox">
        <div className="lightswitch"
          onClick={buttonClick}
          style={{ backgroundImage: `url(${lightSwitchStatus})`}}
        >
        </div>
        <div className="lightbulb"
          style={{ backgroundImage: `url(${bulbColor})`}}
        >
        </div>
      </div>
    </>
  )
}

export default LightSwitch
