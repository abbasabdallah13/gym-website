import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Bars color='red' />
    </div>
  )
}

export default Loader