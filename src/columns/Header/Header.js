import React from 'react'
import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import cs from './Header.module.css'

const Header = () => {
  return (
    <div className={cs.Header}>
        <NavBar />
        <div className={[cs.hero, 'container'].join(' ')}>
            <div className={cs.hero_text}>
                <h1>Gadgets Ordering made easy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elit eiusmod tempor incididunt</p>
                <div className={cs.OS}>
                    <Button >Android</Button>
                    <Button 
                        background='transparent'
                        border='2px solid white'>IOS</Button>
                </div>
            </div>
            <div className={cs.hero_image}>
                <img src='' alt='Gaget'/>
            </div>
        </div>
    </div>
  )
}

export default Header