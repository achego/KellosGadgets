import React from 'react'
import Feature from './Feature/Feature'
import cs from './Features.module.css'

const Features = () => {
  return (
    <div className={[cs.Features, 'container'].join(' ')}>
        <div className={cs.title}>
            <h2><span>Amazing</span> features</h2>
            <p>You cant deny</p>
        </div>
        <div className={cs.main_features}>
            <div className={cs.all_features}>
                <Feature 
                    title='Latest Technology'
                    description='Lorem ipsum dolor sit amet elit sed eiusmod tempor.'/>
                <Feature />
                <Feature />
            </div>
            <div className={cs.app_image}>
                <img src='' alt='app_image' />
            </div>
            <div className={cs.all_features}>
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    </div>
  )
}

export default Features