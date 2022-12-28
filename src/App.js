import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <h2>Click on the box to turn the light off and on</h2>
      <div className="lightBox">
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      </div>
    </>
  )
}

export default App
