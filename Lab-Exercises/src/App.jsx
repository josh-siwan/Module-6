import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/Greetings'
import BigCats from './components/BigCats.JSX'
import Emoji from './components/Emoji'



function App() {
  const [count, setCount] = useState(0)

  return (    
    <> 
      <Emoji/>
      <BigCats/>
      <Greetings name="john">
      <p>hi</p>
      </Greetings>
      
    </>
  )
}

export default App
