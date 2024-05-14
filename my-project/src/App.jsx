import { useState } from 'react'
import Calendar from './Calendar' 
import Textbooks from './Textbooks'
import Title from './Title' 
import Work from './Work.jsx'
import Front from './Front.jsx'
import NotesUpload from './NotesUpload.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Front />
      <Calendar />
      <Textbooks />
      <Work />
      <Title />
      <NotesUpload/>
    </>
  )
}

export default App
