import React from 'react'
import './section.css'
function Section({Icon,color,title}) {
  return (
    <div className='section'>
        <Icon/>
        <h4>{title}</h4>
    </div>
  )
}

export default Section