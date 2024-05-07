import { useState } from 'react'
import Calendar from './Calendar' 
import Textbooks from './Textbooks'
import Title from './Title' 
import Work from './Work.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <Calendar />
      <Textbooks />
      <Work />
    </>
  )
}

export default App
