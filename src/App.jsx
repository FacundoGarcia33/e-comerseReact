import './index.css'
import Navbar from './component/navbar/Navbar'
import Saludo from './component/itemlistcontainer/Itemlistcontainer'

function App() {
  return (
    <div>
      <Navbar />
      <Saludo saludo={"Hola, muchachos"}/>
    </div>
  )
}

export default App
