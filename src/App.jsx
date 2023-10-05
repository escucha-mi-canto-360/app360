import {useState} from 'react'
import Scene from './components/scena';
function App() {
  const [mediaHotspot, setMediaHotspot] = useState({})
  const [dataCurios, setDataCurios]= useState([])
  return (
    <>
      <Scene 
        mediaHotspot={mediaHotspot}
        setMediaHotspot={setMediaHotspot}
        dataCurios={dataCurios}
        setDataCurios={setDataCurios}

      />
    </>
  )
}

export default App
