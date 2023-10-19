import React , { useState }from 'react'
import MenItems from '../components/MenItems'

const Men = () => {
  return (
    <div>
       <p className="subheading" style={{fontSize: '1.5em',margin: '3.5em 0 0 1.5em',
       fontWeight: 650,}}>Men's Fashion</p>
      <MenItems/>
    </div>
  )
}

export default Men
