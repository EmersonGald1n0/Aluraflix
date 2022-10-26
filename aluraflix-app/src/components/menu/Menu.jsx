import React from 'react'
import LogoMain from '../../assets/img/LogoMain.png'
import { Main } from '../../style/styled'
import ButtonLink from './components/ButtonLink'


export default function Menu() {
  return (
    <Main>
      <nav className='Menu'>
        <a href="/">
          <img className="logo" src={LogoMain} alt="Aluraflix logo" />
        </a>
        <ButtonLink className='ButtonLink' href="/">
          Novo vídeo
        </ButtonLink>
      </nav>
    </Main>
  )
}
