import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import dividerImg from '/images/pattern-divider-mobile.svg'
import diceImg from "./images/icon-dice.svg"
async function getUrl() {
  const advice = await fetch("https://api.adviceslip.com/advice").then(data => data)
  const data = await advice.json()
  return data.slip
}

export default function App() {
  const [advice, setAdvice] = useState("")
  const [adviceId, setAdviceId] = useState()
  async function getRandomAdvice() {
    const adviceText = await getUrl()
    setAdvice(adviceText.advice)
    setAdviceId(adviceText.id)
  }
  useEffect(() => {
    getRandomAdvice()
  }, [])

  return (
    <main className='container'>
      <span id='adviceId'>ADVICE #{adviceId}</span>
      <p id='adviceText'>"{advice}"</p>
      <img id='divider' src={dividerImg} alt="divider pattern" />
      <div className='diceContainer' onClick={() => getRandomAdvice()}>
        <img id="dice" src={diceImg} alt="dice" />
      </div>
    </main>
  )
}


