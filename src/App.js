import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <h2>Click on each light switch to turn the lights off and on</h2>
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <footer>
        <p>Matthew Munoz | Hotel 2022</p>
      </footer>
    </>
  )
}

export default App
