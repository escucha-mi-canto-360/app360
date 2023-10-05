import { createContext, useState } from 'react'

export const RecorridosContext = createContext()

export const RecorridosProvider = ({children}) =>{

  // Shopping Cart · Add products to cart
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