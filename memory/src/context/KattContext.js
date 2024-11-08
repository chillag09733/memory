import { createContext, useContext, useState } from "react";
export const KattContext = createContext("");

export const useKattContext = () => useContext(KattContext);

export const KattProvider = ({ children }) => {
  const [lapok, setLapok] = useState([
    { id: 1, tartalom: "❤️", forditott: false, paros: false },
    { id: 2, tartalom: "❤️", forditott: false, paros: false },
    { id: 3, tartalom: "😊", forditott: false, paros: false },
    { id: 4, tartalom: "😊", forditott: false, paros: false },
    { id: 5, tartalom: "🦝", forditott: false, paros: false },
    { id: 6, tartalom: "🦝", forditott: false, paros: false },
    { id: 7, tartalom: "☎️", forditott: false, paros: false },
    { id: 8, tartalom: "☎️", forditott: false, paros: false },
    { id: 9, tartalom: "🧩", forditott: false, paros: false },
    { id: 10, tartalom: "🧩", forditott: false, paros: false },
    { id: 11, tartalom: "👽", forditott: false, paros: false },
    { id: 12, tartalom: "👽", forditott: false, paros: false },
  ]);

  const [forditottLapok, setForditottLapok] = useState([]);

  function fordit(index) {
    const ujLapok = [...lapok];
    ujLapok[index].forditott = !ujLapok[index].forditott;
    setLapok(ujLapok);

    const ujForditottLapok = [...forditottLapok, index];
    setForditottLapok(ujForditottLapok);

    if (ujForditottLapok.length === 2) {
      const [elsoElem, masodikElem] = ujForditottLapok;

      if (ujLapok[elsoElem].tartalom === ujLapok[masodikElem].tartalom) {
        ujLapok[elsoElem].paros = true;
        ujLapok[masodikElem].paros = true;

        setLapok([...ujLapok]);
      } else {
        setTimeout(() => {
          ujLapok[elsoElem].forditott = false;
          ujLapok[masodikElem].forditott = false;

          setLapok([...ujLapok]);
        }, 1000);
      }
      setForditottLapok([]);
    }
  }

  return (
    <KattContext.Provider value={{ lapok, setLapok, fordit }}>
      {children}
    </KattContext.Provider>
  );
};
