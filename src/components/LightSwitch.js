import React, { useState } from "react"

const LightSwitch = () => {

const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
const [bulbColor, setBulbColor] = useState("white")

const buttonClick = () => {
  if(lightSwitchStatus === "off") {
    setBulbColor("yellow")
    setLightSwitchStatus("on")
  } else {
    setBulbColor("white")
    setLightSwitchStatus("off")
  }
}
  return (
    <>
      <div className="lightbulb"
        onClick={buttonClick}
        style={{ backgroundColor: bulbColor}}
      
      >{lightSwitchStatus}</div>
    </>
  )
}

export default LightSwitch
