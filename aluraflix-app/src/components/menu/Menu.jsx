import React from 'react'
import LogoMain from '../../assets/img/LogoMain.png'
import { Main } from '../../style/styled'

export default function Menu() {
  return (
    <nav>
      <Main>
        <img className='logo' src={LogoMain} alt="Aluraflix logo" />
      </Main>
    </nav>
  )
}