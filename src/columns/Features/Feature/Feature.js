import React from 'react'
import cs from './Feature.module.css'

const Feature = (props) => {
  return (
    <div className={cs.Feature}>
      <div className={cs.logo}>

      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Feature