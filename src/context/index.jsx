import { createContext, useState } from 'react'

export const RecorridosContext = createContext()

export const RecorridosProvider = ({children}) =>{

  const [dataCurios, setDataCurios] = useState({})
  const [dataMediaHostpot, setDataMediaHostpot] = useState([])
  
    return(
        <RecorridosContext.Provider value={{
            dataCurios, 
            setDataCurios,
            dataMediaHostpot,
            setDataMediaHostpot
        }}>
            {children}
        </RecorridosContext.Provider>
    )

}