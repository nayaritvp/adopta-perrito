import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import MyCard from './MyCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="Adopta un perrito!"/>
      <MyCard/>
    </div>
  )
}

export default App
