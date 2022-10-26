import React from 'react'

export default function ButtonLink(props) {
  //props => { className: "ButtonLink", href: "/" do componente Menu.jsx }
  
  return (
    <a href={props.href} className={props.className}>
      Novo vídeo
    </a>
  )
}
