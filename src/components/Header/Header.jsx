import React from 'react'

const Header = (props) => {
    const {title} = props
    const { headerTitle , setHeaderTitle} = props

    function changeTitle(){
        setHeaderTitle('THIS IS Header TITLE')
    } 

  return (
    <div onClick={changeTitle}>{title}</div>
  )
}

export default Header