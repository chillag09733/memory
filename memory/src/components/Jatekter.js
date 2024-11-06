import React from 'react'
import { useKattContext } from '../context/KattContext'
import Lap from './Lap'

function Jatekter() {

const {lapok} = useKattContext()

  return (
    <>
    {lapok.map((lap, i) => {
        return <Lap lap={lap} index = {i} key={i}/>;
      })}
    </>
  )
}

export default Jatekter