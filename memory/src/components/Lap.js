import React from 'react'
import { useKattContext } from '../context/KattContext'
import "./Lap.css";

function Lap({ lap, index }) {

    const {fordit} = useKattContext()

  return (
    <div onClick={() => fordit(index)} className={`kartya ${lap.forditott ? 'emoji' : ''}`}>
      {lap.forditott ? lap.tartalom : null}
    </div>
  )
}

export default Lap