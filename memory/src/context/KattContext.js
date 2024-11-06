import { createContext, useContext, useState } from "react";
export const KattContext = createContext("")

export const useKattContext = () => useContext(KattContext)

export const KattProvider = ({children}) => {
   
  const [lapok, setLapok] = useState([
    { id: 1, value: 'A', flipped: false },
    { id: 2, value: 'A', flipped: false },
    { id: 3, value: 'B', flipped: false },
    { id: 4, value: 'B', flipped: false },
    { id: 5, value: 'C', flipped: false },
    { id: 6, value: 'C', flipped: false },
    { id: 7, value: 'D', flipped: false },
    { id: 8, value: 'D', flipped: false },
    { id: 9, value: 'E', flipped: false },
    { id: 10, value: 'E', flipped: false },
    { id: 11, value: 'F', flipped: false },
    { id: 12, value: 'F', flipped: false }
  ]);

  function katt(){
    
  }
  


  return(
    <KattContext.Provider value = {{lapok, setLapok, katt}}>
        {children}
    </KattContext.Provider>
  )
}