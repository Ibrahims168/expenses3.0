import React from 'react'

export const Header = (props) => {
    const {title , setHeaderTitle} = props
    const changeTitle = function() {

        setHeaderTitle('THIS IS Header TITLE')
    }

  return (
    <div onClick={changeTitle}>
        <h1>{title}</h1>
    </div>
  )
}

export default Header